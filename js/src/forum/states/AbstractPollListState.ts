import app from 'flarum/forum/app';
import Model from 'flarum/common/Model';
import PaginatedListState, { Page, PaginatedListParams, PaginatedListRequestParams } from 'flarum/common/states/PaginatedListState';
import EventEmitter from 'flarum/common/utils/EventEmitter';
import { ApiResponsePlural } from 'flarum/common/Store';

export interface PollListParams extends PaginatedListParams {
  sort?: string;
}

export const pollListEmitter = new EventEmitter();

export default abstract class AbstractPollListState<M extends Model, P extends PollListParams = PollListParams> extends PaginatedListState<M, P> {
  protected extraItems: M[] = [];

  constructor(params: P, page: number = 1) {
    super(params, page);

    pollListEmitter.on(this.deletedEvent(), this.removeItem.bind(this));
  }

  protected abstract deletedEvent(): string;

  protected abstract defaultSort(): string;

  abstract includes(): string[];

  getSort(): string {
    return this.params.sort || this.defaultSort();
  }

  requestParams(): PaginatedListRequestParams {
    const params: PaginatedListRequestParams = {
      include: this.includes()
        .concat(this.params.include || [])
        .join(','),
      filter: this.params.filter || {},
      sort: this.currentSort(),
    };

    if (this.params.q) {
      params.filter!.q = this.params.q;
    }

    return params;
  }

  protected loadPage(page: number = 1): Promise<ApiResponsePlural<M>> {
    const preloaded = app.preloadedApiDocument<M[]>();

    if (preloaded) {
      this.initialLoading = false;
      this.pageSize = preloaded.payload?.meta?.perPage || PaginatedListState.DEFAULT_PAGE_SIZE;

      return Promise.resolve(preloaded);
    }

    return super.loadPage(page);
  }

  clear(): void {
    super.clear();

    this.extraItems = [];
  }

  isSearchResults(): boolean {
    return !!this.params.q;
  }

  // Every live list showing this record drops it, so a delete made from one
  // page does not leave a ghost row on another.
  notifyDeleted(item: M): void {
    pollListEmitter.emit(this.deletedEvent(), item);
  }

  removeItem(item: M): void {
    for (const page of this.pages) {
      const index = page.items.indexOf(item);

      if (index !== -1) {
        page.items.splice(index, 1);
        break;
      }
    }

    const index = this.extraItems.indexOf(item);

    if (index !== -1) {
      this.extraItems.splice(index, 1);
    }

    m.redraw();
  }

  addItem(item: M): void {
    this.notifyDeleted(item);
    this.extraItems.unshift(item);

    m.redraw();
  }

  protected getAllItems(): M[] {
    return this.extraItems.concat(super.getAllItems());
  }

  public getPages(): Page<M>[] {
    const pages = super.getPages();

    if (!this.extraItems.length) return pages;

    return [{ number: -1, items: this.extraItems }, ...pages];
  }
}

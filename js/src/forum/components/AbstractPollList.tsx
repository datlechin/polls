import type Mithril from 'mithril';
import app from 'flarum/forum/app';
import Component, { ComponentAttrs } from 'flarum/common/Component';
import Button from 'flarum/common/components/Button';
import LoadingIndicator from 'flarum/common/components/LoadingIndicator';
import Placeholder from 'flarum/common/components/Placeholder';
import classList from 'flarum/common/utils/classList';
import Model from 'flarum/common/Model';
import AbstractPollListState from '../states/AbstractPollListState';

export interface IAbstractPollListAttrs<M extends Model = Model> extends ComponentAttrs {
  state: AbstractPollListState<M>;
}

export default abstract class AbstractPollList<
  M extends Model = Model,
  CustomAttrs extends IAbstractPollListAttrs<M> = IAbstractPollListAttrs<M>,
> extends Component<CustomAttrs> {
  abstract className(): string;

  abstract itemView(item: M): Mithril.Children;

  abstract emptyText(): Mithril.Children;

  abstract loadMoreText(): Mithril.Children;

  view(): Mithril.Children {
    const state = this.attrs.state;
    const className = this.className();

    if (state.isEmpty()) {
      return (
        <div className={className}>
          <Placeholder text={this.emptyText()} />
        </div>
      );
    }

    const isLoading = state.isInitialLoading() || state.isLoadingNext();
    const items = state.getPages().flatMap((page) => page.items);

    return (
      <div className={classList(className, state.isSearchResults() && `${className}--searchResults`)}>
        <ul role="feed" aria-busy={isLoading} className={`${className}-items`}>
          {items.map((item, index) => (
            <li key={item.id()} data-id={item.id()} role="article" aria-setsize={-1} aria-posinset={index + 1}>
              {this.itemView(item)}
            </li>
          ))}
        </ul>
        <div className={`${className}-loadMore`}>{this.loadMoreView()}</div>
      </div>
    );
  }

  loadMoreView(): Mithril.Children {
    const state = this.attrs.state;

    if (state.isInitialLoading() || state.isLoadingNext()) {
      return <LoadingIndicator />;
    }

    if (!state.hasNext()) return null;

    return (
      <Button className="Button" onclick={() => state.loadNext()}>
        {this.loadMoreText()}
      </Button>
    );
  }
}

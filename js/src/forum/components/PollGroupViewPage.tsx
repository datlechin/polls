import type Mithril from 'mithril';
import app from 'flarum/forum/app';
import Page, { IPageAttrs } from 'flarum/common/components/Page';
import PageStructure from 'flarum/forum/components/PageStructure';
import ItemList from 'flarum/common/utils/ItemList';
import PollGroup from '../models/PollGroup';
import PollGroupListItem from './PollGroup/PollGroupListItem';
import PollPageHero from './PollPageHero';
import PollsIndexSidebar from './PollsIndexSidebar';

export default class PollGroupViewPage extends Page<IPageAttrs> {
  loading: boolean = false;
  pollGroup: PollGroup | null = null;

  oninit(vnode: Mithril.Vnode<IPageAttrs, this>) {
    super.oninit(vnode);

    if (!app.forum.attribute<boolean>('canViewPollGroups')) {
      m.route.set('/');
      return;
    }

    this.bodyClass = 'App--polls';

    const id = m.route.param('id');

    this.pollGroup = app.store.getById<PollGroup>('poll_groups', id) || null;

    if (this.pollGroup) {
      app.setTitle(this.pollGroup.name());
      return;
    }

    this.loading = true;

    app.store.find<PollGroup>('poll_groups', id).then((pollGroup) => {
      this.pollGroup = pollGroup;
      this.loading = false;
      app.setTitle(pollGroup.name());
      m.redraw();
    });
  }

  view(): Mithril.Children {
    return (
      <PageStructure className="PollGroupViewPage" hero={this.hero.bind(this)} sidebar={this.sidebar.bind(this)} loading={this.loading}>
        {this.contentItems().toArray()}
      </PageStructure>
    );
  }

  hero(): Mithril.Children {
    return <PollPageHero title={this.pollGroup?.name()} icon="fas fa-layer-group" />;
  }

  sidebar(): Mithril.Children {
    return <PollsIndexSidebar />;
  }

  contentItems(): ItemList<Mithril.Children> {
    const items = new ItemList<Mithril.Children>();

    if (this.pollGroup) {
      items.add('pollGroup', <PollGroupListItem pollGroup={this.pollGroup} />);
    }

    return items;
  }
}

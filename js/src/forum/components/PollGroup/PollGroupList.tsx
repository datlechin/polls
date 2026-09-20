import type Mithril from 'mithril';
import app from 'flarum/forum/app';
import PollGroup from '../../models/PollGroup';
import AbstractPollList from '../AbstractPollList';
import PollGroupListItem from './PollGroupListItem';

export default class PollGroupList extends AbstractPollList<PollGroup> {
  className(): string {
    return 'PollGroupList';
  }

  itemView(pollGroup: PollGroup): Mithril.Children {
    return <PollGroupListItem pollGroup={pollGroup} compactView={true} />;
  }

  emptyText(): Mithril.Children {
    return app.translator.trans('fof-polls.forum.poll_groups.list_page.empty_text');
  }

  loadMoreText(): Mithril.Children {
    return app.translator.trans('fof-polls.forum.poll_groups.list_page.load_more_button');
  }
}

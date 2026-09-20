import type Mithril from 'mithril';
import app from 'flarum/forum/app';
import Poll from '../../models/Poll';
import AbstractPollList from '../AbstractPollList';
import PollListItem from './PollListItem';

export default class PollList extends AbstractPollList<Poll> {
  className(): string {
    return 'PollList';
  }

  itemView(poll: Poll): Mithril.Children {
    return <PollListItem poll={poll} />;
  }

  emptyText(): Mithril.Children {
    return app.translator.trans('fof-polls.forum.polls_list.empty_text');
  }

  loadMoreText(): Mithril.Children {
    return app.translator.trans('fof-polls.forum.polls_list.load_more_button');
  }
}

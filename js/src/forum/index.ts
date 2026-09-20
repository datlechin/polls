import app from 'flarum/forum/app';

import addDiscussionBadge from './addDiscussionBadge';
import addComposerItems from './addComposerItems';
import addPollsToPost from './addPollsToPost';
import addPostControls from './addPostControls';
import addNavItem from './addNavItem';

export { default as extend } from './extend';

app.initializers.add('fof/polls', () => {
  // Registered unconditionally: with discussion polls off the backend omits
  // the fields these read, so they do nothing on their own.
  addDiscussionBadge();
  addComposerItems();
  addPollsToPost();
  addPostControls();
  addNavItem();
});

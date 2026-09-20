import app from 'flarum/admin/app';
import Extend from 'flarum/common/extenders';
import type { PermissionType } from 'flarum/admin/components/PermissionGrid';
import PollsSettingsPage from './components/PollsSettingsPage';

export interface PollPermission {
  key: string;
  permission: string;
  type: PermissionType;
  icon: string;
  allowGuest?: boolean;
}

export const PERMISSIONS: PollPermission[] = [
  {
    key: 'view_results_without_voting',
    permission: 'discussion.polls.viewResultsWithoutVoting',
    type: 'view',
    icon: 'fas fa-poll',
    allowGuest: true,
  },
  { key: 'view_group', permission: 'viewPollGroups', type: 'view', icon: 'fas fa-poll', allowGuest: true },
  { key: 'start', permission: 'discussion.polls.start', type: 'start', icon: 'fas fa-poll' },
  { key: 'start_global', permission: 'startGlobalPoll', type: 'start', icon: 'fas fa-poll' },
  { key: 'start_group', permission: 'startPollGroup', type: 'start', icon: 'fas fa-plus' },
  { key: 'self_edit', permission: 'polls.selfEdit', type: 'start', icon: 'fas fa-pencil-alt' },
  { key: 'self_post_edit', permission: 'polls.selfPostEdit', type: 'start', icon: 'fas fa-pencil-alt' },
  { key: 'upload_images', permission: 'uploadPollImages', type: 'start', icon: 'fas fa-image' },
  { key: 'vote', permission: 'discussion.polls.vote', type: 'reply', icon: 'fas fa-poll' },
  { key: 'change_vote', permission: 'polls.changeVote', type: 'reply', icon: 'fas fa-poll' },
  { key: 'moderate', permission: 'discussion.polls.moderate', type: 'moderate', icon: 'fas fa-pencil-alt' },
  { key: 'moderate_group', permission: 'polls.moderate_group', type: 'moderate', icon: 'fas fa-edit' },
];

const admin = new Extend.Admin().page(PollsSettingsPage);

PERMISSIONS.forEach(({ key, permission, type, icon, allowGuest }) => {
  admin.permission(
    () => ({
      icon,
      label: app.translator.trans(`fof-polls.admin.permissions.${key}`),
      permission,
      allowGuest,
    }),
    type
  );
});

export default [admin];

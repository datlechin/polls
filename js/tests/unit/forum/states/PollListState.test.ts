import bootstrapForum from '../../../bootstrap';
import { makePoll } from '../../../factory';
import PollListState from '../../../../src/forum/states/PollListState';
import PollGroupListState from '../../../../src/forum/states/PollGroupListState';

beforeAll(() => bootstrapForum());

describe('PollListState', () => {
  it('falls back to the newest sort when none is set', () => {
    expect(new PollListState({}).getSort()).toBe('newest');
    expect(new PollListState({ sort: 'oldest' }).getSort()).toBe('oldest');
  });

  it('translates the configured API sort value back into a key', () => {
    expect(PollListState.sortKey('-voteCount')).toBe('most_voted');
    expect(PollListState.sortKey('nonsense')).toBe('newest');
  });

  it('offers relevance as a sort only while searching', () => {
    expect(Object.keys(new PollListState({}).sortMap())).not.toContain('relevance');
    expect(Object.keys(new PollListState({ q: 'cats' }).sortMap())).toContain('relevance');
  });

  it('asks the API for the sort behind the current key', () => {
    const params = new PollListState({ sort: 'least_voted', filter: { isDraft: '0' } }).requestParams();

    expect(params.sort).toBe('voteCount');
    expect(params.filter).toEqual({ isDraft: '0' });
    expect(params.include).toBe('options,votes');
  });

  it('carries a search term into the filter', () => {
    expect(new PollListState({ q: 'cats' }).requestParams().filter!.q).toBe('cats');
  });

  it('reports whether the list is search results', () => {
    expect(new PollListState({ q: 'cats' }).isSearchResults()).toBe(true);
    expect(new PollListState({}).isSearchResults()).toBe(false);
  });

  it('pins an added poll to the front of the list', () => {
    const state = new PollListState({});
    const poll = makePoll();

    state.addItem(poll);

    expect(state.getPages()[0].items).toEqual([poll]);
  });

  // Every open list drops the row, so deleting from one page does not leave a
  // ghost behind on another.
  it('drops a deleted poll from every live list', () => {
    const one = new PollListState({});
    const two = new PollListState({});
    const poll = makePoll();

    one.addItem(poll);
    two.addItem(poll);

    PollListState.notifyDeleted(poll);

    expect(one.getPages()).toHaveLength(0);
    expect(two.getPages()).toHaveLength(0);
  });

  it('leaves poll group lists alone when a poll is deleted', () => {
    const groups = new PollGroupListState({});
    const poll = makePoll();

    groups.addItem(poll as any);
    PollListState.notifyDeleted(poll);

    expect(groups.getPages()).toHaveLength(1);
  });
});

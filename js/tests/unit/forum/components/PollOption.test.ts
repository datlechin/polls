import mq from 'mithril-query';
import bootstrapForum from '../../../bootstrap';
import { makeOption, makePoll } from '../../../factory';
import PollOption from '../../../../src/forum/components/Poll/PollOption';
import PollState from '../../../../src/forum/states/PollState';

beforeAll(() => bootstrapForum());

function render(pollAttributes: Record<string, unknown> = {}, optionAttributes: Record<string, unknown> = {}, myVotes: boolean = false) {
  const option = makeOption(optionAttributes);
  const poll = makePoll(pollAttributes, [option], myVotes ? [option.id()!] : []);
  const state = new PollState(poll);

  return { option, poll, state, out: mq(PollOption, { option, name: `poll${poll.id()}`, state }) };
}

describe('PollOption', () => {
  it('votes through a real radio input a keyboard can reach', () => {
    const { out } = render();

    expect(out).toHaveElement('label.PollBar input.PollOption-input[type=radio]');
    expect(out).not.toHaveElement('input[disabled]');
  });

  it('uses checkboxes when the poll allows more than one vote', () => {
    const { out } = render({ allowMultipleVotes: true });

    expect(out).toHaveElement('input.PollOption-input[type=checkbox]');
  });

  it('groups the radios of one poll under a shared name', () => {
    const { out, poll } = render();

    expect(out.find(`input[name="poll${poll.id()}"]`)).toHaveLength(1);
  });

  it('disables the input once the poll has ended', () => {
    const { out } = render({ hasEnded: true });

    expect(out.rootEl.querySelector('input.PollOption-input')!.hasAttribute('disabled')).toBe(true);
  });

  it('marks the option the reader voted for as checked', () => {
    const { out } = render({}, {}, true);

    expect(out.rootEl.querySelector('label.PollBar')!.hasAttribute('data-selected')).toBe(true);
    expect((out.rootEl.querySelector('input.PollOption-input') as HTMLInputElement).checked).toBe(true);
  });

  it('leaves the marker off an option the reader did not vote for', () => {
    const { out } = render();

    expect(out.rootEl.querySelector('label.PollBar')!.hasAttribute('data-selected')).toBe(false);
  });

  it('shows the share of the vote when the count is visible', () => {
    const { out } = render({ voteCount: 4 }, { voteCount: 1 });

    expect(out.rootEl.querySelector('.PollOption-percent')!.textContent).toBe('25%');
  });

  // The count is simply absent from the API while votes are hidden, which is
  // what tells the client not to show a share.
  it('shows no share at all when the vote count is hidden', () => {
    const { out } = render({ voteCount: undefined }, { voteCount: undefined });

    expect(out).not.toHaveElement('.PollOption-percent');
    expect(out).not.toHaveElement('.sr-only');
  });
});

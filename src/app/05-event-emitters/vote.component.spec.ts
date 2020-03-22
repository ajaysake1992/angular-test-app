import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  let component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('vote changed event should should emit data', () => {
    let totalVotes = null;
    component.voteChanged.subscribe((tv) => {

      totalVotes = tv;
    });

    component.upVote();

    expect(totalVotes).toBe(1);
  });
});

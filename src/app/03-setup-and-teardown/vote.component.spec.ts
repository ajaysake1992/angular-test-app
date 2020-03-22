import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {

  let cmpVt: VoteComponent;

  beforeEach(() => {
     // Arrange
     // Set up
     cmpVt = new VoteComponent();
     console.log('1');
  });

  afterEach(() => {
    // Tear down
    console.log('2');
  });

  beforeAll(() => {

    console.log('3');
  });

  afterAll(() => {

    console.log('4');
  });

  it('it should increament the vote if upvoted', () => {
    // Action
    cmpVt.upVote();
    // Assert
    expect(cmpVt.totalVotes).toBe(1);
  });

  it('it should decreament the vote if downVote', () => {

     // Action
     cmpVt.downVote();

     console.log(cmpVt.totalVotes);
     // Assert
     expect(cmpVt.totalVotes).toBe(-1);

  });
});


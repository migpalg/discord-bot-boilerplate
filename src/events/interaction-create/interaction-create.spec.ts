import event from './interaction-create';

describe('interactionCreate event unit testing', () => {
  it('should have interactionCreate name', () => {
    expect(event.name).toEqual('interactionCreate');
  });
});

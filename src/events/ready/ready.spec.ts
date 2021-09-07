import event from './ready';

describe('ready event unit testing', () => {
  it('should trigger ready event', () => {
    expect(event.name).toEqual('ready');
  });
});

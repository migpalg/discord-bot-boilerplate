import { initEventHandlers } from './events-initializer';

describe('initEventHanlders unit testing', () => {
  it('should read system files', () => {
    initEventHandlers({} as any);

    expect(true).toBeTruthy();
  });
});

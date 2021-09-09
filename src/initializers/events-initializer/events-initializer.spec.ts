import { initEventHandlers } from './events-initializer';

describe('initEventHanlders unit testing', () => {
  let mockClient: Record<string, jest.Mock>;
  let mockFunction: jest.Mock;

  beforeAll(() => {
    mockFunction = jest.fn();

    mockClient = {
      on: mockFunction,
      once: mockFunction,
    };
  });

  it('should read system files', async () => {
    await initEventHandlers(mockClient as any);

    expect(mockFunction).toHaveBeenCalled();
  });
});

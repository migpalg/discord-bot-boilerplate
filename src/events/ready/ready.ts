// @scripts
import { createEvent } from '@app/utils';

export default createEvent({
  name: 'ready',
  once: true,
  execute: (client) => {
    // TODO: Log client tags
  },
});

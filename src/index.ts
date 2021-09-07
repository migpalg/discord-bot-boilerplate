import { createServer } from 'http';
import { config } from './config';

async function main(): Promise<void> {
  const server = createServer(async (_, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });

    res.write(
      JSON.stringify({
        message: 'hello world!',
      }),
    );

    res.end();
  });

  server.listen(config.server.port);
}

main();

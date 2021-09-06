function getUser(): Promise<Record<string, any>> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: 'Hello',
        age: 21,
      });
    }, 200);
  });
}

async function main() {
  const user = {
    name: 'Miguel!',
  };

  const result = await getUser();

  console.log({ ...user, ...result });
}

main();

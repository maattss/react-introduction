export async function getData(url: string): Promise<any> {
  const response = await getPromise(url);
  if (response.status === 200) {
    return await response.json();
  } else if (response.status === 204) {
    return null;
  } else {
    // eslint-disable-next-line no-console
    console.error(`Got http status: ${response.status} ${response.statusText}`);
    return null;
  }
}

function getPromise(url: string): Promise<Response> {
  return new Promise<Response>(async (resolve, reject) => {
    fetch(url)
      .then((response) => resolve(response))
      .catch((error) => {
        reject(error);
      });
  });
}

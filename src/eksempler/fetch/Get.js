export const Get = fetch("https://api.chucknorris.io/jokes/random")
  .then((response) => response.json())
  .catch((error) => console.log("Fetch Error: ", error))
  .finally(() => console.log("Promise resolved"));

export const AsyncGet = async () => {
  try {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await response.json();
    return data;
  } catch (e) {
    console.log("Fetch Error: ", e);
  } finally {
    console.log("Promise resolved");
  }
};

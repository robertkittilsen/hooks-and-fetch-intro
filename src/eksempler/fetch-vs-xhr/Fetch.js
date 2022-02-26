fetch("https://api.chucknorris.io/jokes/random")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((e) => {
    console.log("Fetch Error: ", e);
  });

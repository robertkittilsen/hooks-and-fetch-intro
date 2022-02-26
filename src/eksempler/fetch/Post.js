export const Post = (data) => {
  fetch("URL du kan poste til", {
    method: "POST", // eller 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Post Success:", data);
    })
    .catch((error) => {
      console.error("Post Error:", error);
    });
};

export const AsyncPost = async (data) => {
  try {
    const post = await fetch("URL du kan poste til", {
      method: "POST", // eller 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const response = await post.json();
    if (response) {
      console.log("Post Success: ", data);
    }
  } catch (error) {
    console.log("Post Error: ", error);
  }
};

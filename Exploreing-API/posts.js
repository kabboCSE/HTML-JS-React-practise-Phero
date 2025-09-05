const loadPost = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      displayPost(data);
    });
};

//                  array of object
// const displayPost = (posts) => {
//   // 1. get the container
//   const postContainer = document.getElementById("post-container");
//   postContainer.innerHTML = "";

//   console.log(postContainer);
//   posts.forEach((post) => {
//     // console.log(post.title);

//     //2.create HTML element
//     const li = document.createElement("li");
//     li.innerText = post.title;

//     //3. add li into container
//     postContainer.appendChild(li);
//   });
// };
const displayPost = (posts) => {
  //   {
  //     "userId": 1,
  //     "id": 3,
  //     "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
  //     "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  // }
  //get post-container
  const getPostContainer = document.getElementById("post-container");
  getPostContainer.innerHTML = "";

  // console.log(getPostContainer);

  posts.forEach((post) => {
    //create card-container div
    const cardContainer = document.createElement("div");

    cardContainer.innerHTML = `
      <div class="card-container">
      <h1>id = ${post.id}</h1>
      <h2>${post.title}</h2>
      <p>${post.body}</p>
    </div>
  `;

    getPostContainer.append(cardContainer);
  });
};

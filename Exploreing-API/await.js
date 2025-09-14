const data = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  // .then((response) => response.json())
  // .then((json) => console.log(json));
  console.log("Hello");
  const json = await response.json();
  console.log(json);
  console.log(true);
};

data();

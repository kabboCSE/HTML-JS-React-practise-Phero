async function loadData() {
  console.log("One");
  console.log("Two");
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));

  try {
    const res = await fetch("https://jsonplacehlder.typicode.com/users");
    const data = await res.json();
    console.log("data got await", data.length);
  } catch (err) {
    console.log("error happened!");
  }

  console.log("Four");
  console.log("Five");
}

loadData();

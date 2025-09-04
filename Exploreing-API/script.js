// fetch() server এর সাথে ডাটা আদান-প্রদানের জন্য ব্যবহার করা হয়।, API request করার জন্য ব্যবহার করা হয়।

// fetch() ফাংশনটি একটি Promise রিটার্ন করে, যা তখন রিজল্ভ হয় যখন রিসপন্স পাওয়া যায়।
// fetch() ফাংশনটি একটি HTTP রিকোয়েস্ট তৈরি করে এবং সার্ভার থেকে রিসপন্স পায়।

// fetch() ফাংশনটি GET, POST, PUT, DELETE ইত্যাদি HTTP মেথড ব্যবহার করতে পারে।
// fetch() ফাংশনটি কনফিগারেশন অপশন গ্রহণ করতে পারে, যেমন হেডার, বডি ইত্যাদি।

// fetch() ফাংশনটি ব্রাউজার এবং নোড.জেএস উভয় পরিবেশেই ব্যবহার করা যায়।
// fetch() ফাংশনটি সাধারণত JSON ডাটা হ্যান্ডেল করার জন্য ব্যবহৃত হয়, তবে এটি অন্যান্য ফরম্যাটও হ্যান্ডেল করতে পারে, যেমন টেক্সট, ব্লব ইত্যাদি।

// const loadData = () => {
//   fetch("https://jsonplaceholder.typicode.com/todos/1") //this fetch function always returns a promise
//     //Promise of response
//     .then((response) => response.json())
//     //Promise of JSON data
//     .then((json) => console.log(json));
// };

// const loadPost = () => {
//   const url = "https://jsonplaceholder.typicode.com/posts";
//   fetch(url)
//     .then((response) => response.json())
//     .then((jsonData) => {
//       console.log(jsonData);
//       displayPost(jsonData);
//     });
//   // .then((jsonData) => console.log(jsonData));
// };

// const displayPost = (posts) => {
//   posts.forEach((element) => {
//     console.log(element);
//   });
// };

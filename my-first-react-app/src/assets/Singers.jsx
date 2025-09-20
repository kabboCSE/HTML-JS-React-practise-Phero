export default function Singer({ singer }) {
  console.log(singer);
  return (
    <div className="singer">
      <h3>Singer Name: {singer.name} </h3>
      <h3>Singer Age: {singer.age} </h3>
    </div>
  );
}

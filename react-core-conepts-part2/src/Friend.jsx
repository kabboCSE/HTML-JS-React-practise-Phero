import "./App.css";
const Friend = ({ friend }) => {
  console.log(friend);
  const { id, name, email } = friend;
  return (
    <div className="borderd">
      <h3>
        Friend : {id}
        {""}
        {name}
      </h3>
    </div>
  );
};
export default Friend;

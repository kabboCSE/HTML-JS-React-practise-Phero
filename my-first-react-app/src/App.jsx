import "./App.css";
import Todo from "./Todo.jsx";

function App() {
  const time = 60;
  return (
    <>
      <h1>React Core Concepts</h1>
      <Todo task="learn React" isDone={true} time={time}></Todo>
      <Todo task="learn JS"></Todo>
      <Todo task="learn Vue" isDone={true} time={time}></Todo>
      {/* <Student></Student>
      <Student></Student>
      <Person></Person>
      <Developer name="Kabbo" tech="JS"></Developer>
      <Developer name="tuhin" tech="qa"></Developer>
      <Developer name="Anis" tech="JAVA"></Developer>
      <Salami event="Eid Salami" amount="5000"></Salami>
      <Salami event="Graduation"></Salami> */}
    </>
  );
}

function Salami({ event, amount = 0 }) {
  return (
    <div className="student">
      <p>Salami For: {event} </p>
      <p>Amount:{amount} </p>
    </div>
  );
}

function Student() {
  return (
    <div className="student">
      <p>Name:</p>
      <p>Dept:</p>
    </div>
  );
}

function Developer(props) {
  return (
    <div
      style={{
        color: "yellow",
        fontWeight: "bold",
        border: "3px solid blue",
        borderRadius: "10px",
        marginBottom: "10px",
      }}
    >
      <h3>Developer: {props.name}</h3>
      <p>Technology: {props.tech}</p>
    </div>
  );
}

function Person() {
  const age = 28;
  const person = "Kabbo";

  const personStyle = {
    color: "red",
    border: "2px solid green",
    padding: "10px",
    borderRadius: "10px",
  };

  return (
    <p style={personStyle}>
      I am a person: {person} {age}
    </p>
  );
}
function Test() {
  return (
    <div>
      <h1>This is Testing!</h1>
    </div>
  );
}

function Sports() {
  return (
    <div>
      <Person></Person>
      <h3>Cricket</h3>
      <Test></Test>
      <p>Playing and Loosing</p>
    </div>
  );
}

export default App;

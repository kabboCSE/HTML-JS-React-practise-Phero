// export default function Todo({ task, isDone, time }) {
//   if (isDone === true) {
//     return (
//       <li>
//         Done: {task}, Duration: {time}
//       </li>
//     );
//   } else {
//     return <li>Pending Task: {task} </li>;
//   }
// }

//                          Using Ternary Operator
// export default function Todo({ task, isDone, time }) {
//   return isDone ? (
//     <li>
//       Done: {task}, Duration: {time}
//     </li>
//   ) : (
//     <li>Pending: {task}</li>
//   );
// }

//                Condintional Rendering && true
// export default function Todo({ task, isDone, time }) {
//   return (
//     isDone && (
//       <li>
//         Done: {task}, Duration: {time}
//       </li>
//     )
//   );
// }

//                Condintional Rendering || False

export default function Todo({ task, isDone, time }) {
  return (
    isDone || (
      <li>
        Done: {task}, Duration: {time}
      </li>
    )
  );
}

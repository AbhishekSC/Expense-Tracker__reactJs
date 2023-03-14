import "../styles/card.css";

//using children props - a reserved keyword in reactjs whose value will always
//be the content b/w the open and close tag of your custome component

function Card(props) {
  const classes = 'card ' + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;

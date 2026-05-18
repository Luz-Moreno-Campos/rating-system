function Star(props) {
  return (
    <li onClick={props.onClick}>
      <props.StarIcon color={props.rated ? "gold" : "grey"} size={50}  style={{ cursor: "pointer" }} />
    </li>
  );
}

export default Star;
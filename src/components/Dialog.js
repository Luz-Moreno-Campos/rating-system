function Dialog(props) {

  return (
    <div className="dialog-backdrop">
      <div className="dialog">
        <p>Thanks for rating our service! Your feedback helps us improve.</p>
        <button onClick={props.closeDialog}>Close</button>
      </div>
    </div>
  );
}


export default Dialog;

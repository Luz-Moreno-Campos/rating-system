import { FaStar } from "react-icons/fa6";
import { useState } from "react";
import StarRating from "./components/StarRating";
import Dialog from "./components/Dialog"


const ratingWords = ["Bad", "Average", "Good", "Very Good", "Excellent"];



function App() {

  const [showDialog, setShowDialog] = useState(false);
    /*To reset the rating after closing the dialog, I used the following state to change the component’s key. 
  React treats a new key as a new component, so its state resets automatically. This is called key-based remount*/
  const [resetKey, setResetKey] = useState(0); 

  const openDialog = () => {
    setTimeout(() => {
      setShowDialog(true);
    }, 1500);
  };

  const closeDialog = () => {
          setShowDialog(false); 
          /*I used  prev istead of resetKey  here because React state updates are asynchronous, 
          and using the previous value guarantees the update is correct even if React batches renders*/
          setResetKey(prev => prev + 1)
        }

  return (
    <>
      <StarRating StarIcon={FaStar} ratingWords={ratingWords} openDialog={openDialog}   key={resetKey}   />
      {showDialog && (<Dialog closeDialog={closeDialog} />)}
    </>
  );
}

export default App;

import { FaStar } from "react-icons/fa6";
import { useState } from "react";
import StarRating from "./components/StarRating";
import Dialog from "./components/Dialog"


const ratingWords = ["Bad", "Average", "Good", "Very Good", "Excellent"];




function App() {

  const [showDialog, setShowDialog] = useState(false);

  const openDialog = () => {
  setTimeout(() => {
    setShowDialog(true);
  }, 1000); 
};


  return (
    <>
      <StarRating StarIcon={FaStar} ratingWords={ratingWords} openDialog={openDialog} />
      {showDialog && (
        <Dialog closeDialog={() => setShowDialog(false)} />
      )}

    </>
  );
}

export default App;

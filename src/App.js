import { FaStar } from "react-icons/fa";
import {useState}  from "react";
import StarRating from "./components/StarRating";
import Dialog from "./components/Dialog"


const ratingWords = ["Bad", "Average", "Good", "Very Good", "Excellent"];




function App() {
  
  const [showDialog, setShowDialog] = useState(false);

  return (
   <>
   <StarRating StarIcon={FaStar} ratingWords={ratingWords} />
   <Dialog />
   </>
  ); 
}

export default App;

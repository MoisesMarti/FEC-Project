import { useContext } from "react";
import { ReviewContext } from "../Context/ReviewContext";
import "./ShowAllReviews.css";

export default function ShowAllReviews() {
  const { showReview, closeAllRev } = useContext(ReviewContext);

  return (
    <>
      {showReview && (
        <div className="modal-overlay">
          <div className="cancel-modal-container">
            <div className="cancel-modal">
              <div className="button-container">
                <button className="close-modal" onClick={closeAllRev}>X</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

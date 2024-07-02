import React, { useState } from "react";
import Popup from "./Popup";
import Markdown from "./MarkDown_Previewer";

function Pop() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  function togglePopup() {
    setIsPopupOpen(!isPopupOpen);
  }

  return (
    <div>
      <button onClick={togglePopup}>Open Markdown Previewer</button>
      <Popup isOpen={isPopupOpen} onClose={togglePopup}>
       <Markdown/>
      </Popup>
    </div>
  );
}

export default Pop;

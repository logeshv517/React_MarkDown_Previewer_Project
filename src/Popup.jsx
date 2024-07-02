import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  popup: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "whitesmoke",
    width: "90%",
    height: "90%",
    zIndex: "100",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem",
    borderRadius: "0.5rem",
    boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.3)",
  },
  closeButton: {
    position: "absolute",
    top: "0.5rem",
    right: "0.5rem",
  },
}));

function Popup({ isOpen, onClose, children }) {
  const classes = useStyles();

  if (!isOpen) {
    return null;
  }

  return (
    <div className={classes.popup}>
      <button className={classes.closeButton} onClick={onClose}>
        X
      </button>
      {children}
    </div>
  );
}

export default Popup;

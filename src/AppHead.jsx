import React from 'react';
import { Button, Grid } from '@material-ui/core';
import ModalDialog from './ModalDialog';
import { useState } from 'react';
function MyComponent() {
  const [open, setOpen] = useState(false);

  // function to handle modal open
  const handleOpen = () => {
    setOpen(true);
  };

  // function to handle modal close
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div id='hi'>
  
      <div id='button'>
          <div id='summa'>
            <div id='homebutton'>
          <Button  className='button-89' role='button' >
          &emsp;Home&emsp;
          </Button>
            </div>
          <div id='aboutbutton'>
          <Button className='button-89' role='button' >
          &emsp;About&emsp;
          </Button>
          </div>
          <div id='terminalbutton'>
          <Button className='button-89' role='button'>
          &emsp;Terminal&emsp;
          </Button>
          </div>
        <div id='documentbutton'>
          <Button className='button-89' role='button'>
          &emsp;Documents&emsp;
          </Button>
        </div>
        <div id='signupbutton'>
        <Button className='button-89' role='button' onClick={handleOpen}>
        &emsp;Signup&emsp;
      </Button>
      <ModalDialog open={open} handleClose={handleClose} />
        </div>
          </div>
      
      </div>
    </div>
  );
}

export default MyComponent;


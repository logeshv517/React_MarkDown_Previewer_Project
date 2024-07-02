import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './App.css';
const Form = ({ handleClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Submitted name: ${name}, email: ${email}`);
    handleClose();
  };

  return (
    <div>

    <form onSubmit={handleSubmit}>
        <div id='email'>
      <TextField
        label="EMAIL"
        value={name}
        onChange={(event) => setName(event.target.value)}
        variant="outlined"
        color="primary"
        />
        </div>
        <div id='password'>      
      <TextField
        label="PASSWORD"
        variant="outlined"
        color="primary"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        />
        </div>
      <div id='formsubmit'>
      <Button class="button-55" role="button" type="submit">
        SIGN UP
      </Button>
      </div>
    </form>
    </div>
  );
};

export default Form;

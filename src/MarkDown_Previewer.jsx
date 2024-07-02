import React, { useState } from "react";
import { marked } from "marked";
import {
  Box,
  Container,
  Grid,
  TextField,
  IconButton,
  Fab,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CheckIcon from '@material-ui/icons/Check';
import './App.css'
const useStyles = makeStyles((theme) => ({
  input: {
    height: "100%",
    width: "45vw",
    padding: theme.spacing(2),
    border: "none",
    outline: "none",
    resize: "none",
    direction: "ltr",
    textAlign: "left",
    paddingRight: "10px",
    backgroundColor: "whitesmoke",
  },
  preview: {
    height: "80%",
    width: "45vw",
    padding: theme.spacing(2),
    backgroundColor: "#e4c1f9",
    border: "none",
    borderRadius: theme.spacing(1),
    overflowY: "auto",
    overflowWrap: "break-word",
    direction: "ltr",
    textAlign: "left",
  },
  saveButton: {
    position: "fixed",
    top: "50%",
    right: "5vw",
    transform: "translateY(-50%)",
    zIndex: 10,
  },
}));

export default function Markdown() {
  const classes = useStyles();
  const [markdown, setMarkdown] = useState(`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](/), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

`);
return (
  <div id="terminalbox">
    <Container maxWidth="xl" component="main" style={{backgroundColor:"whitesmoke"}}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            variant="filled"
            multiline
            rows={33}
            style={{display:"flex",marginRight:"40vw"}}
            value={markdown}
            onChange={(event) => setMarkdown(event.target.value)}
            className={classes.input}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box className={classes.preview} boxShadow={3}>
            <div dangerouslySetInnerHTML={{ __html: marked(markdown) }} />
          </Box>
            <Fab
              color="primary"
              aria-label="save"
              className={classes.fab}
              onClick={() => console.log("Save button clicked")} // Change this to the desired save function
            >
              <CheckIcon />
            </Fab>
        </Grid>
      </Grid>
    </Container>
  </div>
);
}
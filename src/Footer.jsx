import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    backgroundColor: theme.palette.grey[200],
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="md">
        <Typography variant="body1">
          Learn a new language with our interactive courses and practice exercises.
        </Typography>
        <Typography variant="body2" color="textSecondary">
          © 2023 Language Learning. All rights reserved.
        </Typography>
        <Link href="#">Terms</Link>
        {' | '}
        <Link href="#">Privacy</Link>
      </Container>
    </footer>
  );
}

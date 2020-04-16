import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(10)
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    cryptoInputBox: {
      marginTop: 10,
      marginBottom: 20,
    },
    currencyInput: {
      minWidth: 'calc(70% - 10px)',
      marginRight: 10,
    },
    currencyType:{
      minWidth: '30%',
    }
  }),
);

function App() {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <Grid container className={classes.root} spacing={3}>
        <Grid item xs={8}>
          <Paper> 123</Paper >
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <div className={classes.cryptoInputBox}>
              
              <FormControl className={classes.currencyInput}>
                <TextField label='Сумма' />
              </FormControl>
              <FormControl className={classes.currencyType}>
              <InputLabel shrink id="demo-simple-select-label">Валюта</InputLabel>
              <Select value={0}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Ten</MenuItem>
                <MenuItem value={30}>Ten</MenuItem>
              </Select>
              </FormControl>
            </div>
            <div className={classes.cryptoInputBox}>
              
              <FormControl className={classes.currencyInput}>
                <TextField label='Сумма' />
              </FormControl>
              <FormControl className={classes.currencyType}>
              <InputLabel shrink id="demo-simple-select-label">Валюта</InputLabel>
              <Select value={0}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Ten</MenuItem>
                <MenuItem value={30}>Ten</MenuItem>
              </Select>
              </FormControl>
            </div>
          </Paper >
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;

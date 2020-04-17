import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


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
    currencyType: {
      minWidth: '30%',
    },
    table: {
      minWidth: 650,
    },
  }),
);


type TCoin = {
  name: string;
  fullName: string;
  imgUrl: string;
  price: number;
  volume24Houre: number;
}


function App() {
  const classes = useStyles();
  const [allCoins, setAllCoins] = React.useState<TCoin[] | null>(null);

  React.useEffect(() => {
    axios.get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD').then(({ data }) => {
      const coins = data.Data;
      setAllCoins(coins);
    });
  }, [classes]);

  return (
    <Container maxWidth="lg">
      <Grid container className={classes.root} spacing={3}>
        <Grid item xs={8}>
          <Paper>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell align="right">FullName</TableCell>
                    <TableCell align="right">Name</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">volume24houre</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {allCoins.map(row => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.name}</TableCell>
                      <TableCell align="right">{row.fullName}</TableCell>
                      <TableCell align="right">{row.imgUrl}</TableCell>
                      <TableCell align="right">{row.price}</TableCell>
                      <TableCell align="right">{row.volume24Houre}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer></Paper >
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
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thety</MenuItem>
                </Select>
              </FormControl>
              <Typography variant="h5" component="h5"> 77,81 российский рубль</Typography>
            </div>
          </Paper >
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function App() {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en')
      .then(response => {
        setCryptoData(response.data);
      })
      .catch(error => {
        console.error('Error fetching crypto data:', error);
      });
  }, []);

  return (
    <Container>
      <h1>Crypto Tracker</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Symbol</TableCell>
              <TableCell>Current Price</TableCell>
              <TableCell>Market Cap</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cryptoData.map(crypto => (
              <TableRow key={crypto.id}>
                <TableCell>{crypto.name}</TableCell>
                <TableCell>{crypto.symbol}</TableCell>
                <TableCell>${crypto.current_price}</TableCell>
                <TableCell>${crypto.market_cap.toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default App;

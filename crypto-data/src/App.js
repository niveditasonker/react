/*
import logo from './logo.svg';
import './App.css';

import React, {useState, useEffect} from 'react';

const CRYPTO_PRICES_API_BASE_URL =
  'https://api.frontendexpert.io/api/fe/cryptocurrencies';
  
function CryptoPrices() {
  // Write your code here.
  const [page, setPage] = useState(0);
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    fetchCryptoData(page);
  }, [page]);

  const fetchCryptoData = async function (page){
    let response = await fetch(`https://api.frontendexpert.io/api/fe/cryptocurrencies?page=${page}`)

    const res = await response.json();
    console.log("====> ", res);
    setCryptoData(res);


    console.log(cryptoData);
}

  return (
    <div className="crypto-container">
      <table className='table'>
        <thead>
          <tr>
            <th>Crypto Prices</th>
          </tr>
          <tr>
            <th>Coin</th>
            <th>Price</th>
            <th>Market Cap</th>
          </tr>
          </thead>
        <tbody>
        </tbody>
      </table>
    </div>
  );
}


export default CryptoPrices
*/


import React, { useState, useEffect} from 'react';

const CRYPTO_PRICES_API_BASE_URL =
  'https://api.frontendexpert.io/api/fe/cryptocurrencies';
  
export default function CryptoPrices() {
  // Write your code here.
  const [page, setPage] = useState(0);
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    fetchCryptoData(page);
  }, [page]);

  const fetchCryptoData = async function (page){
    try {
      let response = await fetch(`${CRYPTO_PRICES_API_BASE_URL}?page=${page}`)
        // mode: 'no-cors',
        // method: "GET",
        // headers: {
        //      "Content-Type": "application/json"
        // },
        // body: JSON.stringify()
      // });

      // console.log(response);
  
      const res = await response.json();
      console.log("====> ", res);
      setCryptoData(res);
  
      console.log(cryptoData);
    } catch (err) {
      console.error(err);
    }

  }

  const decrement = () => {
    setPage((prevPg) => prevPg - 1);
  }

  const increment = () => {
    setPage((prevPg) => prevPg + 1);
  }

  const firstPage = page === 0;
  const lastPage = cryptoData?.hasNext === false;



  return (
    <>
      <table className='table'>
        <thead>
          <tr>
            <th>Crypto Prices</th>
          </tr>
          <tr>
            <th>Coin</th>
            <th>Price</th>
            <th>Market Cap</th>
          </tr>
          </thead>
        <tbody>
          {cryptoData?.coins?.map((coin) => {
            return (
              <tr>
                <td>{coin.name}</td>
                <td>{coin.price}</td>
                <td>{coin.marketcap}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <button disabled={firstPage} onClick={decrement}> Back </button>
      <button disabled={lastPage} onClick={increment}>Next</button>
    </>
  );
}

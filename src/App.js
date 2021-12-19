import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Crypto from './Crypto'
import './App.css'

function App() {

  const [cryptos, setCryptos] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios                                                                                                                                            //fetch the data from the API
        .get(
            'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
        )
        .then((res) => {
            setCryptos(res.data);                                                                                                                    //set the state with JSON object []
        })
        .catch((err) => {                                                                                                                            //if there's an error, it will be catche here
            console.log('Error Fetching Data! See Error Code: '+ err);
        })
}, [])

  const handleChange = e => {                                                                                                                        //based on the input from the user, this event will be triggered
    setSearch(e.target.value)                                                                                                                        //value from <input> tag is set to this 'search' state
  }

  const filteredCrypto = cryptos.filter(crypto =>                                                                                                    //filter from the list of 'cryptos' state, only those state that are stored in 'search' state
    crypto.name.toLowerCase().includes(search.toLowerCase())                                                                                         //and store it in filteredCrypto []
    )

  return (
    <div className='crypto-app'>
      <div className='crypto-search'>
      <h1 className='crypto-text'>CryptoWatch</h1>
        <form>
          <input type='text' placeholder='search' onChange={handleChange} className='crypto-input'/>
        </form>
      </div>
      {filteredCrypto.map(crypto => {                                                                                                                //now map through each of those individual filteredCryptos 
        return (
          <Crypto                                                                                                                                    //and return a JSX with props to render on the web browser
          key={crypto.id}
          name={crypto.name} 
          image={crypto.image} 
          symbol={crypto.symbol} 
          volume={crypto.total_volume} 
          price={crypto.current_price} 
          priceChange={crypto.price_change_percentage_24h} 
          mrktCap={crypto.market_cap}/>
        )
      })}
    </div>                                                                                                                                           //now the command goes to Crypto.js component to render the JSX
  );
}

export default App;

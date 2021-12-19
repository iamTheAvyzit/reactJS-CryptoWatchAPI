import React from 'react'
import './Crypto.css'

const Crypto = ({name, image, symbol, price, volume, priceChange, mrktCap}) => {                                       //named props received from App component 
    return (
        <div className='crypto-container'>
            <div className='crypto-row'>
                <div className='crypto'>
                    <img src={image} alt='crypto_img'/>                                                                {/*setting all props in the JSX to render on browser */}
                    <h1>{name}</h1>
                    <p className='crypto-symbol'>{symbol}</p>
                </div>
                <div className='crypto-data'>
                    <p className='crypto-price'>${price}</p>
                    <p className='crypto-volume'>${volume.toLocaleString()}</p>

                    {/*this condition will check whether the price for a crypto has increased or decreased and based on those value it will change to the color to red or green*/}

                    {priceChange < 0 ? (<p className='crypto-percent red'>{priceChange.toFixed(2)}</p>)
                                     : (<p className='crypto-percent green'>{priceChange.toFixed(2)}</p>)
                    }
                    <p className='crypto-mrktcap'>Mkt Cap: ${mrktCap.toLocaleString()}</p>
                </div>
            </div>
        </div>
    )
}

export default Crypto

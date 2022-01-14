import React from 'react';
import './Order.scss';
import note from './icon-music.svg'


const Order = () => {
    return (
        <main>
            <div className='main-img' />
            <div className='main-section'>
                <h1>Order Summary</h1>
                <p className='desc'>
                    You can now listen to millions 
                    of songs, audiobooks, and podcasts 
                    on any device anywhere you like!
                </p>
                <div className='plan-container'>
                    <div>
                        <img src={note} alt='' aria-hidden='true' />
                        <h2>Annual Plan <span>$59.99/year</span></h2>
                    </div>
                    <a href='https://github.com/MarleyReyna'>Change</a>
                </div>
                <div className='button-container'>
                    <button className='payment'>Proceed to Payment</button>
                    <button className='cancel'>Cancel Order</button>
                </div>
            </div>
        </main>
    );
}
 
export default Order;
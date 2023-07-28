import React from 'react'
import './banner.css'

function banner() {
  return (
    <div className='banner' >
        <div className='leftBanner'>
            <div className='textP'>
                 <p className='start'>START</p>
                 <p className='saving'>SAVING</p>
                 <p className='money'>MONEY</p>
            </div>
            <h1 className='smart'>Smart Credit Card</h1>
            <h1 className='for'>For Your Faily Life.</h1>
            <div className='btnCon'><button className='btnDownload'>DownLoad<i className="bi bi-download"> </i></button></div>
        </div>
        <div>
            <img className='imgBanner' src="https://img.freepik.com/free-vector/crowdfunding-app-concept_23-2148626243.jpg?w=1480&t=st=1690513389~exp=1690513989~hmac=c94367769619ce9c88a7e02a8e45465a601bb9b74cf1706c8ff86095972590f4" alt="payment" />
        </div>
    </div>
  )
}

export default banner
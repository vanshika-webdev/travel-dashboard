import React from 'react'
import './herobanner.css'

function HeroBanner() {
  return (
    <div className="hero">
    <div className='hero-banner'>
      <h5>Hero Banner(1374W*811H)</h5>
      <div className="upload">
        <div className="cross">
        <input type="file" name="" id="" />
        <i class="bi bi-x"></i>
        </div>
       
        <i class="bi bi-eye inner"></i>
        <button type='button'>Upload</button>
      </div>
    </div>
    <div className='hero-banner'>
      <h5>Header</h5>
      <div className="upload">
        <div className="cross">
        <input type="text" name="" id="" placeholder='Header Title'/>
        <i class="bi bi-x"></i>
        </div>
      </div>
    </div>
    <div className='hero-banner'>
      <h5>Sub Header</h5>
      <div className="upload">
        <div className="cross">
        <input type="text" name="" id="" placeholder='Header Title'/>
        <i class="bi bi-x"></i>
        </div>
      </div>
    </div>
    <div className='hero-banner'>
      <h5>CTA</h5>
      <div className="upload">
        <div className="cross">
        <input type="text" name="" id="" placeholder='text'/>
        <i class="bi bi-x"></i>
        </div>
      </div>
    </div>
    <button className='remove-btn'>Remove</button>
    </div>
  )
}

export default HeroBanner

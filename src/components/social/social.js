import React from 'react'
import './social.css'
import facebook from '../facebook.png'
import instagram from '../instagram.png'

const Social = () => {
  return (
    <div id='social'>
      <div className='links'>
        <a
          href='https://www.facebook.com/bleummusic/?ref=br_rs'
          target='_blank'
          rel='noopener noreferrer'>
          <img id='fb' src={facebook} alt='link to facebook' />
        </a>
      </div>
      <div className='links'>
        <a
          href='https://www.instagram.com/bleummusic/?hl=en'
          target='_blank'
          rel='noopener noreferrer'>
          <img src={instagram} alt='link to instagram' />
        </a>
      </div>
      <div className='links' id='buyDiv'>
        <a
          href='https://fanlink.to/visitbybleum'
          target='_blank' rel='noopener noreferrer'
          id='buy'>
          <p>stream/ </p>
          <p>buy</p>
        </a>
      </div>
    </div>
  )
}

export default Social

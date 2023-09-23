import React from 'react'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='not-found'>
        <div className='container'>
            <h1>4<span className='gr-txt'>0</span>4</h1>
            <p>The Page You Are Looking For Not Available!</p>
            <Link to="/">
              <Button buttonType="default">Back to Home</Button>
            </Link>
        </div>
    </div>
  )
}

export default NotFound
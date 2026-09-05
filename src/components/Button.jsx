// import React from 'react'
import '../components/Button.css'

const Button = (prop) => {
  return (
    <div>
      <div className="button-component">
        {prop.btn}
        <div className='hover-grad'>

        </div>
      </div>
    </div>
  )
}

export default Button
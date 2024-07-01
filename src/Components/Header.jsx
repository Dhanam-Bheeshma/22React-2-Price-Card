import React from 'react'

const Header = ({ cardtype, price }) => {
    return (
    
        <><div className='card-title'>
                <p className='text-muted plan'>{cardtype}</p>
                <h2>${price}/month</h2>
            </div></>
    )
}

export default Header
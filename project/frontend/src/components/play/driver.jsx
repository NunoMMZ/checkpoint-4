import React from 'react'

function Driver(props){
    const {image, GivenName, FamilyName, PermanentNumber} = props;
    return(
        <div className='card'>
            <h2>{GivenName}</h2>
            <h3>{FamilyName}</h3>
            <h3>{PermanentNumber}</h3>
        </div>
    )
}



export default Driver;
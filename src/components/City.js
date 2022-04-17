import React, { memo } from 'react'

const City = memo(({city,handleChange,state}) => {
    

  return (
    <div className='city-list' >
    <input
    type="checkbox"
    name={city.name}
    checked={city.isChecked ? city.isChecked : false}
    onChange={(e) => handleChange(e, state.id)}
  />
  <label htmlFor="city">{city.name}</label></div>
  )
})

export default City
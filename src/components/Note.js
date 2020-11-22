import React from 'react'

const Country = ({ i,country }) => {
  return (
  <li>{country.name}:  {country.region}</li>
  )
}

export default Country
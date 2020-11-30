import React from 'react'

const Country = ({ i,country }) => {
var arr = [];
// console.log(country.languages[0].iso639_1);
for(var key in country.languages){
  arr.push(country.languages[key]);
}
// console.log(arr);

  return (
  <li>
    <font size="5" color="blue"><b>{country.name} </b></font><br />
    <p>&nbsp;&nbsp;&nbsp;&nbsp;<b>region&nbsp;: </b> &nbsp;&nbsp; {country.region}</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;<b>capital&nbsp;: </b> &nbsp;&nbsp; {country.capital}</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;<b>timezones&nbsp;: </b> &nbsp;&nbsp; {country.timezones}</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;<b>languages&nbsp;: </b> &nbsp;&nbsp; {arr.map((item) => (
      <font><br />
        &nbsp;&nbsp;&nbsp;&nbsp;[<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;iso639_1 : &nbsp; {item.iso639_1}<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;iso639_2 : &nbsp; {item.iso639_2}<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name : &nbsp; {item.name}<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;nativeName : &nbsp; {item.nativeName}<br />
        &nbsp;&nbsp;&nbsp;&nbsp;]
      </font>
    ))
    }</p>
  </li>
  )
}

export default Country
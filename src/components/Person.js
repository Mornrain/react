import React from 'react'

const Person = ({ person, toDeletePerson, toggleImportantanveOf}) => {
    
    const label1 = 'delete' 
    const label2 = person.important ? 'make not important' : 'make important'
    return (
        <li class='note'>
            {person.name}: {person.number} <br />
            <button onClick={toDeletePerson}>{label1}</button>
            <button onClick={toggleImportantanveOf}>{label2}</button>
        </li>
    )
}

export default Person
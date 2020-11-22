<<<<<<< HEAD
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SearchFilter from './components/SearchFilter'

const App = () => {
    const [countries, setCountries] = useState([])
    const [newCountries, setNewCountries] = useState('')
    // const [showAll, setShowAll] = useState(true)

    useEffect(()=>{
        // console.log('effect');
        axios
        .get('https://restcountries.eu/rest/v2/all')
        .then(response => {
            // console.log('promise fulfilled');
            // console.log(response);
            setCountries(response.data)
        })
    },[])

    const [persons] = useState([
        { name: "Dayo Olorinla", number: "+234-1234-5678", borders:["ire","someone"] },
        { name: "Temi Otedola", number: "+234-9029-9229", borders:["iro","someoto"] },
        { name: "Zlatan Ibile", number: "+234-1243-2345", borders:["iren","somethree"] },
      ]);

    // console.log(countries);

    return(
        <div>
            <h1>Countries</h1>
            <div>
                <SearchFilter countries={countries} persons={persons} />
            </div>
        </div>
    )
}

=======
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SearchFilter from './components/SearchFilter'

const App = () => {
    const [countries, setCountries] = useState([])
    const [newCountries, setNewCountries] = useState('')
    // const [showAll, setShowAll] = useState(true)

    useEffect(()=>{
        // console.log('effect');
        axios
        .get('https://restcountries.eu/rest/v2/all')
        .then(response => {
            // console.log('promise fulfilled');
            // console.log(response);
            setCountries(response.data)
        })
    },[])

    const [persons] = useState([
        { name: "Dayo Olorinla", number: "+234-1234-5678", borders:["ire","someone"] },
        { name: "Temi Otedola", number: "+234-9029-9229", borders:["iro","someoto"] },
        { name: "Zlatan Ibile", number: "+234-1243-2345", borders:["iren","somethree"] },
      ]);

    // console.log(countries);

    return(
        <div>
            <h1>Countries</h1>
            <div>
                <SearchFilter countries={countries} persons={persons} />
            </div>
        </div>
    )
}

>>>>>>> cb8f7a26823354a6a99901be562e881cb846a490
export default App
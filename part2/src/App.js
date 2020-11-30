import React, { useState, useEffect } from 'react'
import Person from './components/Person'
import personService from './services/phoneBook'
import Notefications from './components/Notefication'

const Footer = () => {
    const footerStyle = {
        color: 'green',
        fontStyle: 'italic',
        fontSize: 16
    }
    return (
        <div style={footerStyle}>
            <br />
            <em>Phone Book App, Design by Morain, Department of Biomedical Engineering, University of USST</em>
        </div>
    )
}

const App = () => {
    const [persons, setPersons] = useState([])
    const [newPerson, setNewPerson] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [errorMessage, setErrorMessage] = useState(null)
    const [successMessage, setSuccessMessage] = useState(null)

    useEffect(() => {
        personService
        .getAll()
        .then(initialNotes => {
            setPersons(initialNotes)
        })
    },[persons])

    // 添加新的联系人
    const addPerson = event => {
        event.preventDefault()
        const personObject = {    
            name: newPerson,
            number: newNumber,
            important: Math.random < 0.5,
        }

        let item = persons.find(person => {
            return person.name === newPerson
        }) 
        if(!item){
            personService
            .create(personObject)
            .then(returnedPerson => {
                setPersons(persons.concat(returnedPerson.data))
                setNewPerson('')
                setNewNumber('')
                return returnedPerson.data
            })
            .then(response => {
                setSuccessMessage(`${response.name} is success to add in this Phonebook`)
                setTimeout(() => {
                    setSuccessMessage(null)
                },5000)
            })
            .catch(error => {
                setErrorMessage(`Because of ${error}, ${personObject.name} is fail to add`)
                setTimeout(() => {
                    setErrorMessage(null)
                },5000)
            }) 
        }
        else {
            if(window.confirm(`${newPerson} is already added to phonebook, replace the old number with a new one?`)){
                let changePerson = {...item, number:newNumber}
                personService
                .update(item.id,changePerson)
                .then(response => {
                    setPersons(persons.map(person => person.id !== item.id ? person : response.data))
                })
                .then(response => {
                    setSuccessMessage(`${response.name} is success to add in this Phonebook`)
                    setTimeout(() => {
                        setSuccessMessage(null)
                    },5000)
                })
                .catch(error => {
                    setErrorMessage(`Because of ${error}, ${personObject.name} is fail to add`)
                    setTimeout(() => {
                        setErrorMessage(null)
                    },5000)
                })
            }
        }  
    }

    // 实时记录文本框更改
    const handlePersonChange = (event) => {
        setNewPerson(event.target.value);
    }
    const handleNumberChange = event => {
        setNewNumber(event.target.value);
    }

    // important属性值的更改
    const toggleImportanceOf = (id) => {
        const person = persons.find(n => n.id === id)
        const changedPerson = {...person, important: !person.important }
        personService
        .update(id,changedPerson)
        .then(returnedPerson => {
            // console.log(returnedPerson.data);
            setPersons(persons.map(person => person.id !== id ? person : returnedPerson.data))
        })
        .catch(error => {
            console.log('hhhh');
            setErrorMessage(`Person '${person.name}' was already remove from server`)
            setTimeout(() => {
                setErrorMessage(null)
            },5000)
            setPersons( persons.filter(n => n.id !== id))
        })
    }

    // 删除用户
    const toDeletePerson = (id,person) => {
        if(window.confirm(`Delete ${person.name} ?`)){
            personService
            .deletePerson(id)
            .then(response => {
                console.log(response);
            })
            .catch( error => {
                console.log(error);
            })

            personService
            .getAll()
            .then(response => {
                console.log(response);
                setPersons(response)
            })
        }
    }

    return(
        <div>
            <h1>Phone Book</h1>
            <Notefications errorMessage={errorMessage} successMessage={successMessage} />
            <div>
                <form onSubmit={addPerson}>
                    <input value={newPerson} onChange={handlePersonChange} /><br />
                    <input value={newNumber} onChange={handleNumberChange} />
                    <button type="submit">add to save</button>
                </form>
            </div>
            <ul>
                {persons.map((person,i) =>
                    <Person key={i} person={person} toDeletePerson={() => toDeletePerson(person.id,person)} toggleImportanceOf={() => toggleImportanceOf(person.id,person)}/>
                )}
            </ul>
            <Footer />
        </div>
    )
}

export default App
const { response } = require('express')
const express = require('express')
const app = express()

let persons = [
    {
        "name": "Arto Hellas",
        "number": "040-123456",
        "id": 1,
        "important": true
      },
      {
        "name": "Ada Lovelace",
        "number": "39-44-5323523",
        "id": 2,
        "important": true
      },
      {
        "name": "Dan Abramov",
        "number": "12-43-234345",
        "id": 3,
        "important": true
      },
      {
        "name": "Mary Poppendieck",
        "number": "39-23-6423122",
        "id": 4,
        "important": true
      },
      {
        "name": "Morain",
        "number": "2020-11-24T07:12:24.916Z",
        "id": 5,
        "important": true
      },
      {
        "name": "咋神",
        "number": "19872637465",
        "important": false,
        "id": 6
      },
      {
        "name": "呵呵不会吧",
        "number": "1752637948",
        "important": false,
        "id": 7
      },
      {
        "name": "呵呵不是吧",
        "number": "18273647582",
        "important": false,
        "id": 8
      },
      {
        "name": "测试人",
        "number": "18726374859",
        "important": false,
        "id": 9
      }
]

// const app = http.createServer((request, response) => {
//     response.writeHead(200, {'Content-Type': 'text/plain' })
//     response.end(JSON.stringify(persons))
// })

// app.get('/',(req,res) => {
//     res.send('<h1>Hello world! </h1>')
// })

const generateId = () => {
    const maxId = persons.length > 0 
        ? Math.max(...persons.map(n => n.id))
        : 0
    return maxId + 1 
}
    
app.use(express.json())

app.get('/api/persons',(request,response) => {
    response.json(persons)
})

app.get('/api/persons/:id',(request,response) => {
    const id = Number(request.params.id)
    const person = persons.find(person =>{
        // console.log(person.id, typeof person.id, id, typeof id, person.id === id);
        return person.id === id
    } )
    if (person) {
        response.json(person)
    } else{
        response.status(404).end()
    }
})

app.post('/api/persons',(request,response) => {
    const body = request.body
    if(!body.name){
        return response.status(400).json({
            error: 'name missing'
        })
    }

    const person = {
        "name": body.name,
        "number": body.number,
        "important": body.important || false,
        "id": generateId(),
    }
    persons = persons.concat(person)
    response.json(person)
})

app.delete('/api/persons/:id',(request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
    response.status(204).end()
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})
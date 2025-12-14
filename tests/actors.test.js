import request from 'supertest'
import app from '../src/app.js'

let id

test('GET /actors - Obtener todos los actores', async () => {
    const res = await request(app).get('/actors')
    expect(res.status).toBe(200)
    expect(res.body).toBeInstanceOf(Array)
    console.log(res.body)
});

test('POST /actors - Crear un nuevo actor', async () => {
    const newActor = { 
        first_name: 'Anne',
        last_name: 'Hathaway',
        nationality: 'American',
        image: 'https://celebmafia.com/wp-content/uploads/2019/05/anne-hathaway-the-hustle-premiere-in-la-15.jpg',
        birthday: '1982-11-12'
    }
    const res = await request(app).post('/actors').send(newActor)
    id = res.body.id
    expect(res.status).toBe(201)
    expect(res.body.first_name).toBe(newActor.first_name)
    console.log('Body:', res.body)
})

test('PUT /actors/:id - Actualizar un actor', async () => {
    const updatedActor = { 
        first_name: 'Emily',
        last_name: 'Blunt',
        nationality: 'American and British',
        image: 'https://wallpapers.com/images/hd/elegant-actress-emily-blunt-bj012c32eelesnqd.jpg',
        birthday: '1983-02-23'
    }
    const res = await request(app).put(`/actors/${id}`).send(updatedActor)
    expect(res.status).toBe(200)
    expect(res.body.first_name).toBe(updatedActor.first_name)
    console.log('Body:', res.body)
});

test('DELETE /actors/:id - Eliminar un actor por ID', async () => {
    const res = await request(app).delete(`/actors/${id}`)
    expect(res.status).toBe(204)
});
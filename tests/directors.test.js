import request from 'supertest'
import app from '../src/app.js'

let id

test('GET /directors - Obtener todos los directores', async () => {
    const res = await request(app).get('/directors')
    expect(res.status).toBe(200)
    expect(res.body).toBeInstanceOf(Array)
    console.log(res.body)
});

test('POST /directors - Crear un nuevo director', async () => {
    const newDirector = { 
        first_name: 'David',
        last_name: 'Frankel',
        nationality: 'American',
        image: 'https://c8.alamy.com/comp/BK1MC1/david-frankel-the-devil-wears-prada-opening-night-los-angeles-film-BK1MC1.jpg',
        birthday: '1959-04-02'
    }
    const res = await request(app).post('/directors').send(newDirector)
    id = res.body.id
    expect(res.status).toBe(201)
    expect(res.body.name).toBe(newDirector.name)
    console.log('Body:', res.body)
})

test('PUT /directors/:id - Actualizar un director', async () => {
    const updatedDirector = { 
        first_name: 'Anne',
        last_name: 'Seibel',
        nationality: 'French',
        image: 'https://images.squarespace-cdn.com/content/v1/5ec2f36f2fd0c5570cbedcb7/577d4d35-18a3-40f7-a144-8f2cc6c9fa0c/0-3.jpg',
        birthday: '1983-02-23'
    }
    const res = await request(app).put(`/directors/${id}`).send(updatedDirector)
    expect(res.status).toBe(200)
    expect(res.body.name).toBe(updatedDirector.name)
    console.log('Body:', res.body)
});

test('DELETE /directors/:id - Eliminar un director por ID', async () => {
    const res = await request(app).delete(`/directors/${id}`)
    expect(res.status).toBe(204)
});
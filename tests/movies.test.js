import request from 'supertest'
import app from '../src/app.js'
import { Genre } from '../src/models/genre.model.js';
import { Actor } from '../src/models/actor.model.js';
import { Director } from '../src/models/director.model.js';

let id

test('GET /movies - Obtener todas las peliculas', async () => {
    const res = await request(app).get('/movies')
    expect(res.status).toBe(200)
    expect(res.body).toBeInstanceOf(Array)
    console.log(res.body)
});

test('POST /movies - Crear una nueva pelicula', async () => {
    const movie = {
        name: 'The Devil Wears Prada',
        image: 'https://resizing.flixster.com/8HoNaz27x5oF49u3qxfUC75BTSI=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p159800_p_v8_aj.jpg',
        synopsis: "Andy is a recent college graduate with big dreams. Upon landing a job at prestigious Runway magazine, she finds herself the assistant to diabolical editor Miranda Priestly. Andy questions her ability to survive her grim tour as Miranda's whipping girl without getting scorched.",
        release_year: 2006,
    }
    const res = await request(app).post('/movies').send(movie)
    id = res.body.id
    expect(res.status).toBe(201)
    expect(res.body.name).toBe(movie.name)
    console.log('Name:', res.body.name)
})

test('PUT /movies/:id - Actualizar una pelicula', async () => {
    const updatedMovie = {
        name: 'Oppenheimer',
        image: 'https://resizing.flixster.com/5bbfOrn5Stku1HxlkK4ISYi2uQk=/206x305/v2/https://resizing.flixster.com/dV1vfa4w_dB4wzk7A_VzThWUWw8=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzEyZDMyYjZmLThmNzAtNDliNC1hMjFmLTA2ZWY4M2UyMjJhMi5qcGc=',
        synopsis: "During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project. Oppenheimer and a team of scientists spend years developing and designing the atomic bomb. Their work comes to fruition on July 16, 1945, as they witness the world's first nuclear explosion, forever changing the course of history.",
        release_year: 2023,
    }
    const res = await request(app).put(`/movies/${id}`).send(updatedMovie)
    expect(res.status).toBe(200)
    expect(res.body.name).toBe(updatedMovie.name)
    console.log('Name:', res.body.name)
});

test('POST /movies/:id/genres - Asignar generos a un pelicula', async () => {
    const genre = await Genre.create({ name: 'Drama' })
    const res = await request(app).post(`/movies/${id}/genres`).send([genre.id])
    expect(res.status).toBe(200)
    expect(res.body).toBeInstanceOf(Array)
    expect(res.body.length).toBe(1)
});

test('POST /movies/:id/actors - Asignar actores a una pelicula', async () => {
    const actor = await Actor.create({ 
        first_name: 'Emily',
        last_name: 'Blunt',
        nationality: 'American and British',
        image: 'https://wallpapers.com/images/hd/elegant-actress-emily-blunt-bj012c32eelesnqd.jpg',
        birthday: '1983-02-23' 
    })
    const res = await request(app).post(`/movies/${id}/actors`).send([actor.id])
    expect(res.status).toBe(200)
    expect(res.body).toBeInstanceOf(Array)
    expect(res.body.length).toBe(1)
});

test('POST /movies/:id/directors - Asignar directores a una pelicula', async () => {
    const director = await Director.create({ 
        first_name: 'David',
        last_name: 'Frankel',
        nationality: 'American',
        image: 'https://c8.alamy.com/comp/BK1MC1/david-frankel-the-devil-wears-prada-opening-night-los-angeles-film-BK1MC1.jpg',
        birthday: '1959-04-02' 
    })
    const res = await request(app).post(`/movies/${id}/directors`).send([director.id])
    expect(res.status).toBe(200)
    expect(res.body).toBeInstanceOf(Array)
    expect(res.body.length).toBe(1)
});

test('DELETE /movies/:id - Eliminar una pelicula por ID', async () => {
    const res = await request(app).delete(`/movies/${id}`)
    expect(res.status).toBe(204)
});
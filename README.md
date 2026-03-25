## 🎬 GalleryMovies Testing Project
A professional testing suite built with Jest, Supertest, Express, Sequelize, and PostgreSQL.
This project validates the functionality of the Movies API by implementing structured unit and integration tests across all CRUD endpoints and relationship assignments.

<img width="263" height="93" alt="image" src="https://github.com/user-attachments/assets/1d5c6173-ce0a-4a8f-afab-1dcf232a7c2b" />

---

## 🎯 Project Goals
This project was designed to:
- Implement a minimum of 19 tests covering CRUD operations for Actors, Genres, Directors, and Movies.
- Verify advanced endpoints that assign genres, actors, and directors to movies.
- Ensure API reliability by testing responses, status codes, and data integrity.
- Consolidate backend testing skills with Jest and Supertest.
- Provide professional documentation and reproducible test scripts for collaborative development.

---

## 🧪 Test Coverage
The following endpoints are tested:
## Actors
- `GET /actors` – Retrieve all actors
- `POST /actors` – Create a new actor
- `DELETE /actors/:id` – Delete an actor by ID
- `PUT /actors/:id` – Update an actor by ID
## Genres
- `GET /genres` – Retrieve all genres
- `POST /genres` – Create a new genre
- `DELETE /genres/:id` – Delete a genre by ID
- `PUT /genres/:id` – Update a genre by ID
## Directors
- `GET /directors` – Retrieve all directors
- `POST /directors` – Create a new director
- `DELETE /directors/:id` – Delete a director by ID
- `PUT /directors/:id` – Update a director by ID
## Movies
- `GET /movies` – Retrieve all movies
- `POST /movies` – Create a new movie
- `DELETE /movies/:id` – Delete a movie by ID
- `PUT /movies/:id` – Update a movie by ID
- `POST /movies/:id/actors` – Assign actors to a movie
- `POST /movies/:id/directors` – Assign directors to a movie
- `POST /movies/:id/genres` – Assign genres to a movie

---

## 📄 Scripts (package.json)
```bash
"scripts": {
  "dev": "node --watch --env-file=.env src/server.js",
  "start": "node src/server.js",
  "test": "node --env-file=.env ./node_modules/jest/bin/jest.js"
}
```

---

## 💻 Tech Stack
| Testing Tools | Backend       | Database     | Security & Middleware |
|---------------|---------------|--------------|-----------------------|
| Jest          | Node.js       | PostgreSQL   | Helmet                |
| Supertest     | Express       | Sequelize    | CORS                  |
| @swc/jest     | Morgan        | pg/pg-hstore |

---

## 🗂️ Project Structure

```bash
📁 MOVIES-APP-TESTING
|   ├── 📁 node_modules/
|   ├── 📁 src/
│   |   └── 📁 config/
│   |   |    └── env.js
│   |   └── 📁 controllers/
│   |   |    └── actor.controllers.js
│   |   |    └── director.controllers.js
│   |   |    └── genre.controllers.js
│   |   |    └── movie.controllers.js
│   |   └── 📁 db/
│   |   |    └── connect.js
│   |   └── 📁 middlewares/
│   |   |    └── catchError.js
│   |   |    └── errorHandler.js
│   |   └── 📁 models/
│   |   |    └── actor.model.js
│   |   |    └── director.model.js
│   |   |    └── genre.model.js
│   |   |    └── movie.model.js
│   |   └── 📁 routes/
│   |   |    └── actor.routes.js
│   |   |    └── director.routes.js
│   |   |    └── genre.routes.js
│   |   |    └── index.js
│   |   |    └── movies.test.js
│   |   └── app.js
│   |   └── server.js
|   ├── 📁 tests/
│   |   └── actors.test.js
│   |   └── directors.test.js
│   |   └── genres.test.js
│   |   └── movies.test.js
│   |   └── setup.js
|   └── .env
|   └── .gitignore
|   └── jest.config.js
|   └── package-lock.json
|   └── package.json
```
---

## ⚙️ Setup & Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/Clic-stack/MoviesApp-Testing.git
   ```
2. Install dependencies:
   ```bash
   npm i
   ```
3. Configure enviroment variables:
- Changes file name `.env.example` to `.env`
- Modify variable values.
- Example configuration:
  
  ```bash
  PORT=4000 
  DATABASE_URL=postgres://user:password@localhost:5432/your_database
  ```
4. Run local server to verify correct configurations
   ```bash
    npm run dev
   ```
5. Run tests
   - Run all tests:
   ```bash
   npm test
   ```
   
   - Run individual test:
   ```bash
   npm test name_file.test.js
   ```
---

## 🎨 Author
Developed by Clio Salgado as part of the Node.js & Backend module at Academlo, with the goal of consolidating skills in:
- API testing with Jest & Supertest
- Database modeling with Sequelize & PostgreSQL
- REST API design and validation
- Professional documentation and reproducible workflows

🔽 Versión en Español 🔽

## 🎬 Proyecto de Testing: GalleryMovies

Una suite de pruebas profesional construida con Jest, Supertest, Express, Sequelize y PostgreSQL. 
Este proyecto valida la funcionalidad de la API de Películas mediante la implementación de pruebas unitarias e integrales estructuradas en todos los endpoints CRUD y las asignaciones de relaciones.

<img width="263" height="93" alt="image" src="https://github.com/user-attachments/assets/b40773a0-d8dd-4fbc-b877-7112100a4029"/>

---

## 🎯 Objetivos del Proyecto
Este proyecto fue diseñado para:
- Implementar un mínimo de 19 pruebas que cubren las operaciones CRUD para Actores, Géneros, Directores y Películas.
- Verificar endpoints avanzados que asignan géneros, actores y directores a las películas.
- Garantizar la confiabilidad de la API mediante la prueba de respuestas, códigos de estado e integridad de los datos.
- Consolidar habilidades de testing en el backend con Jest y Supertest.
- Proveer documentación profesional y scripts de prueba reproducibles para el desarrollo colaborativo.

---

## 🧪 Cobertura de Pruebas
Se testearon los siguientes endpoints:
## Actores
- `GET /actors` – Obtener todos los actores
- `POST /actors` – Crear un nuevo actor
- `DELETE /actors/:id` – Eliminar un actor por ID
- `PUT /actors/:id` – Actualizar un actor por ID
## Géneros
- `GET /genres` – Obtener todos los géneros
- `POST /genres` – Crear un nuevo género
- `DELETE /genres/:id` – Eliminar un género por ID
- `PUT /genres/:id` – Actualizar un género por ID
## Directores
- `GET /directors` – Obtener todos los directores
- `POST /directors` – Crear un nuevo director
- `DELETE /directors/:id` – Eliminar un director por ID
- `PUT /directors/:id` – Actualizar un director por ID
## Películas
- `GET /movies` – Obtener todas las películas
- `POST /movies` – Crear una nueva película
- `DELETE /movies/:id` – Eliminar una película por ID
- `PUT /movies/:id` – Actualizar una película por ID
- `POST /movies/:id/actors` – Asiganr actores a una película
- `POST /movies/:id/directors` – Asignar directores a una película
- `POST /movies/:id/genres` – Asignar géneros a una película

---

## 📄 Scripts (package.json)
```bash
"scripts": {
  "dev": "node --watch --env-file=.env src/server.js",
  "start": "node src/server.js",
  "test": "node --env-file=.env ./node_modules/jest/bin/jest.js"
}
```

---

## 💻 Tech Stack
| Herramientas de Testing | Backend       | Base de Datos | Seguridad y Middleware |
|-------------------------|---------------|---------------|------------------------|
| Jest                    | Node.js       | PostgreSQL    | Helmet                 |
| Supertest               | Express       | Sequelize     | CORS                   |
| @swc/jest               | Morgan        | pg/pg-hstore  |

---

## 🗂️ Estructura de Proyecto

```bash
📁 MOVIES-APP-TESTING
|   ├── 📁 node_modules/
|   ├── 📁 src/
│   |   └── 📁 config/
│   |   |    └── env.js
│   |   └── 📁 controllers/
│   |   |    └── actor.controllers.js
│   |   |    └── director.controllers.js
│   |   |    └── genre.controllers.js
│   |   |    └── movie.controllers.js
│   |   └── 📁 db/
│   |   |    └── connect.js
│   |   └── 📁 middlewares/
│   |   |    └── catchError.js
│   |   |    └── errorHandler.js
│   |   └── 📁 models/
│   |   |    └── actor.model.js
│   |   |    └── director.model.js
│   |   |    └── genre.model.js
│   |   |    └── movie.model.js
│   |   └── 📁 routes/
│   |   |    └── actor.routes.js
│   |   |    └── director.routes.js
│   |   |    └── genre.routes.js
│   |   |    └── index.js
│   |   |    └── movies.test.js
│   |   └── app.js
│   |   └── server.js
|   ├── 📁 tests/
│   |   └── actors.test.js
│   |   └── directors.test.js
│   |   └── genres.test.js
│   |   └── movies.test.js
│   |   └── setup.js
|   └── .env
|   └── .gitignore
|   └── jest.config.js
|   └── package-lock.json
|   └── package.json
```
---

## ⚙️ Configuración e Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/Clic-stack/MoviesApp-Testing.git
   ```
2. Instala dependencias:
   ```bash
   npm i
   ```
3. Configura variables de estado:
- Cambia el nombre del archivo `.env.example` por `.env`
- Modifica los valores de las variables.
- Ejemplo de configuración:
  
  ```bash
  PORT=4000 
  DATABASE_URL=postgres://user:password@localhost:5432/your_database
  ```
4. Corre el servidor local para verificar que las configuraciones sean correctas
   ```bash
    npm run dev
   ```
5. Corre los tests
   - Corre todos los tests:
   ```bash
   npm test
   ```
   
   - Corre solo un test individualmente:
   ```bash
   npm test name_file.test.js
   ```
---

## 🎨 Autora
Desarrollado por Clio Salgado como parte del módulo de Node.js y Backend en Academlo, con el objetivo de consolidar habilidades en:
- Pruebas de API con Jest y Supertest.
- Modelado de bases de datos con Sequelize y PostgreSQL.
- Diseño y validación de APIs REST.
- Documentación profesional y flujos de trabajo reproducibles.

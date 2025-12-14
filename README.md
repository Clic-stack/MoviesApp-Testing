## 🎬 MoviesApp Testing Project
A professional testing suite built with Jest, Supertest, Express, Sequelize, and PostgreSQL.
This project validates the functionality of the Movies API by implementing structured unit and integration tests across all CRUD endpoints and relationship assignments.

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




⚙️ Setup & Installation
🔧 Backend Setup
- Clone this repository:
git clone https://github.com/Clic-stack/MoviesApp-FullStack-Project.git
- Navigate to the backend folder:
cd movies-app-backend
- Install dependencies:
npm install
- Configure environment variables:
- Rename .env.example to .env
- Modify variable values as needed:
PORT=4000
DATABASE_URL=postgres://user:password@localhost:5432/movies
CORS_ORIGIN=http://localhost:5173
- Run the server in development mode:
npm run dev
- Run the test suite:
npm test



📁 Project Structure
📁 movies-app-testing
│   └── 📁 src/
│   │    └── app.js
│   │    └── server.js
│   │    └── 📁 models/
│   │    └── 📁 routes/
│   │    └── 📁 controllers/
│   └── 📁 tests/
│        └── actors.test.js
│        └── genres.test.js
│        └── directors.test.js
│        └── movies.test.js
│   └── package.json
│   └── .env
│   └── .env.example



🎨 Author
Developed by Clio Salgado as part of the Node.js & Backend module at Academlo, with the goal of consolidating skills in:
- API testing with Jest & Supertest
- Database modeling with Sequelize & PostgreSQL
- REST API design and validation
- Professional documentation and reproducible workflows

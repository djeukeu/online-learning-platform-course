# Online Learning Platform Course Service

The online learning platform course service is a REST API developed using Node.js that provides **Course Management** services, while course management provides support with the retrieval and management of courses. All of this project's routes are protected and require an authorisation header. Authentication is handled by another service: the [Auth Service](https://github.com/djeukeu/online-learning-platform-auth).

## Requirements
* Docker Install
* Install the required node version as indicated in `.nvmrc` file

## Launch Project

1. Clone the repo
   ```
   git clone <repo_url>
   ```
2. Create `.env.development` file
   
   Create a `.env.development` file using [.env.example](.env.example) as template

3. Install dependencies
   ```
   yarn install
   ```
4. Launch Docker compose
   ```
   yarn docker-compose
   ```
5. Start the server
   ```
   yarn start:dev
   ```

## API Endpoints

| Method | Endpoint          | Description       |
| ------ | ----------------- | ----------------- |
| GET    | `/api/course`     | Get course list   |
| GET    | `/api/course/:id` | Get course by ID  |
| POST   | `/api/course`     | Create a course   |
| PATCH  | `/api/course`     | Update a course   |
| GET    | `health`          | healthcheck route |

## Scripts
* Launch the project after build: `yarn start`
* Launch the project in development: `yarn start:dev`
* Build the project: `yarn build`
* Prettify all project files: `yarn pretty` 
* Test for linting errors: `yarn lint` 
* Test for linting and fix automaticaly linting errors: `yarn lint:fix` 
* Launch docker compose: `yarn docker-compose`
* Generate migration and migrate them (use only in development environment): `yarn prisma:dev`
* Apply all pending migrations(use only in production environment): `yarn prisma:deploy`
    
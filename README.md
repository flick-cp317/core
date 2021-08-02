# Flick Core

Backend of the Flick application.

# Setup

The project uses `Node.JS` version `16.4.2`. Ensure that this version is installed on your computer, along with `NPM` (which installs by default with Node).

Once the repository is cloned, there are a couple steps needed to get going on your local machine:

1. Install the required dependencies through `npm i`
1. Create and run a locally-hosted PostgreSQL database
1. Create a file named `.env` at the root directory of the project
    1. The file must contain four variables
        1. `PGUSER`: The username used to access the database (Set when configuring the Postgres database)
        1. `PGHOST`: Where the database is hosted (should be `localhost`)
        1. `PGPASSWORD`: The password used to access the database (Set when configuring the Postgres database)
        1. `PGDATABASE`: The database name (Set when configuring the Postgres database)
        1. `ACCESSTOKEN`: Used for authentication, can be any random string of characters (Ex. `1234abcd`)
    1. Variables are denoted with the notation `TEST=1` (variable TEST is equal to 1) and should be on separate lines in the file

From here you should be able to run the project with `npm start`. The project is accessible on `http://localhost:8080/`.

# Scripts

There are some built-in scripts that make managing the database a bit easier:

1. `npm run clean`: Clears all info in the database
1. `npm run populate`: Populates the database with the following information
    1. Around 100 movies
    2. Five test users named `testuser0` through `testuser4`, all have the password `password123`

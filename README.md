# HiFi Employee Record Database

## Project Story

As a record store owner with multiple store locations, I would like a website where my employees can look up an album and see the stock count of each store.

As only employees will be able to access the record search, a password is required for logging in.

## Setup

After being added to the Github repository, use the following command to clone HiFi and initialize the app:

```
  git clone https://github.com/meatripoli/HiFi.git
  cd HiFi
  npm init
```

### Install Dependencies

Project dependencies

`npm install dotenv express express-session mysql2 passport passport-local sequelize`

Dev dependencies

`npm install chai chai-http eslint mocha prettier`

### Configure Environment Variables

The required environmental variables are contained in a `.env` file you must create at the **project root.** To do so, copy the `.env-sample` as `.env` and add your local configuration values.

Note: the MYSQL-\* envarrs do not require surrounding quote marks

- MYSQL_KEY=yourMySqlDbPassword
- MYSQL_DBNAME=yourMySqlDbName

### The requirements for Project #2 are as follows:

- [ ] Must use a Node and Express Web Server
- [ ] Must be backed by a MySQL Database with a Sequelize ORM
- [ ] Must have both GET and POST routes for retrieving and adding new data
- [ ] Must be deployed using Heroku (with Data)
- [ ] Must utilize at least one new library, package, or technology that we haven’t discussed
- [ ] Must have a polished frontend / UI
- [ ] Must have folder structure that meets MVC Paradigm
- [ ] Must meet good quality coding standards (indentation, scoping, naming)
- [ ] Must not expose sensitive API key information on the server,

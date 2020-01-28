- **The requirements for Project #2 are as follows:**

  - Must use a Node and Express Web Server

  - Must be backed by a MySQL Database with a Sequelize ORM

  - Must have both GET and POST routes for retrieving and adding new data

  - Must be deployed using Heroku (with Data)

  - Must utilize at least one new library, package, or technology that we haven’t discussed

  - Must have a polished frontend / UI

  - Must have folder structure that meets MVC Paradigm

  - Must meet good quality coding standards (indentation, scoping, naming)

  - Must not expose sensitive API key information on the server, see [Protecting-API-Keys-In-Node.md](../../../../01-Class-Content/10-nodejs/03-Supplemental/Protecting-API-Keys-In-Node.md)

## Configure Environment Variables

The required environmental variables are contained in a `.env` file you must create at the project root. To do so, copy the `.env-sample` as `.env` and add your local configuration values.

Note: the MYSQL-\* envarrs do not require surrounding quote marks

- MYSQL_KEY=yourMySqlDbPassword
- MYSQL_DBNAME=yourMySqlDbName

TODO: Update the auto generated sequelize `index.js` file to require `config.js` (instead of `config.json`)

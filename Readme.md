## Creating REST backend for DailyManager

## Resources 
- https://medium.com/infocentric/setup-a-graphql-api-with-apollo-2-0-sequelize-and-express-js-608d1365d776
- https://grokonez.com/frontend/vue-js/vue-js-nodejs-express-restapis-sequelize-orm-mysql-crud-example
- https://dev.to/teodeleanu/sequelize-orm-in-your-express-application-2oag

## Steps 

- First to install 
`npm i express cors sequelize mysql2 --save`
- Then developer packages
`npm i  sequelize-cli faker --save-dev`
- Create the DB
`CREATE DATABASE dailymngr_bktest CHARACTER SET utf8 COLLATE utf8_general_ci`
- add scripts
```
"scripts": {
    "sequelize-init": "node ./node_modules/sequelize-cli/lib/sequelize init"
  },
```
then add dailymngr_bktest db to config
- create user model as a test model
`node ./node_modules/sequelize-cli/lib/sequelize model:create --name User --attributes name:string,surname:string,email:string,password:string`

## Tips 

- altering table https://stackoverflow.com/questions/46357533/how-to-add-delete-new-columns-in-sequelize-cli

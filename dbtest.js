
/**@type {import('sequelize').ModelType} */
const User = require('./models').users

const faker = require('faker')

const body = {
    email: faker.internet.email(),
    password: faker.internet.password(),
    name: faker.name.firstName()
}

/* Test sequelize
let sequelize = require('./models').sequelize

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
*/
/*
const Sequelize = require('sequelize');
const sequelize = new Sequelize('dailymngr_bktest', 'root', null , {
  host: 'localhost',
  dialect: 'mysql'
});

const Notes = sequelize.define('notes' , {
  text: {
    type: Sequelize.STRING,
    allowNull: false
  },
  hint : Sequelize.STRING
}
)
*/

async function foo() {
  // await User.sync({ force: true })
  let newUser = await User.create(body)
  console.log(newUser.toJSON())
  // await sequelize.sync({ force: true })
  // let note = Notes.create({hint: 'ok' , text: 'okkk k'})
}
foo()
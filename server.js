const express = require("express");
const app = express();
const port = 8000;

// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

const faker = require('faker');  // import faker library

class User{
    constructor(){
        this.id = faker.datatype.uuid()
        this.firstname = faker.name.firstName()
        this.lastname = faker.name.lastName()
        this.phone = faker.phone.phoneNumber()
        this.email = faker.internet.email()
        this.password = faker.internet.password()
    }
}

class Company{
    constructor(){
        this.id = faker.datatype.uuid()
        this.firstname = faker.name.firstName()
        this.address = {
            streetAddress: faker.address.streetAddress(),

            city: faker.address.city(),

            state: faker.address.state(),

            zipCode: faker.address.zipCode(),

            country: faker.address.country()
        }
    }
}

app.get("/api/users/new", (req, res) =>{
    let  newUser =new User()
    res.json({
        data: newUser
    })
})

app.get("/api/companies/new", (req, res) =>{
    let  newCompany =new Company()
    res.json({
        data: newCompany
    })
})
app.get("/api/user/company", (req, res) =>{
    let  newUser =new User()
    let newCompany =new Company()
    res.json({
        data: [newUser, newCompany]
    })
})












// this needs to below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );
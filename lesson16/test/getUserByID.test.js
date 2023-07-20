const axios = require('axios')
const validator  = require('jsonschema')
const fakerestapiGETUserByID = require('../data/fakerestapiGETUserByID.v1.json')


describe('test suite for GET  user by ID endpoint of fakerestapi service', function(){
    let response;
    beforeAll(async () =>{
        response = await axios.get("https://fakerestapi.azurewebsites.net/api/v1/Users/3",{
            headers:{ 
                accept: 'accept: */*',
                
            },
        })
    })
    

    test('GET api Users by ID', async()=>{
        await expect(response.status).toEqual(200)
    })


    test('verifies JSON schema for GET user by ID request', async()=>{

        const result = await validator.validate(response.data, fakerestapiGETUserByID)
        await expect(result.valid).toEqual(true)
    })



})
const axios = require('axios')
const validator  = require('jsonschema')
const fakerestapiGETAllUsers = require('../data/fakerestapiGETAllUsers.v1.json')


describe('test suite for GET all users endpoint of fakerestapi service', function(){
    let response;
    beforeAll(async () =>{
        response = await axios.get("https://fakerestapi.azurewebsites.net/api/v1/Users/",{
            headers:{ 
                accept: 'text/plain; v=1.0',
                
            },
        })
    })
    
    test('GET All Users request which returns and massive of users', async()=>{
        await expect(response.status).toEqual(200)
    })

    test('verifies JSON schema for GET all Users request', async() =>{
    
        const result = await validator.validate(response.data, fakerestapiGETAllUsers )
        await expect(result.valid).toEqual(true)

    })

})
const axios = require('axios')
const validator  = require('jsonschema')
const fakerestapiPUTUserByID = require('../data/fakerestapiPUTUserByID.v1.json')


describe('test suite for PUT user details by ID endpoint of fakerestapi service', function(){
    let response
    const data = {
        id: 10,
        userName: 'User 55',
        password: 'PasswordPassword'
      }
    beforeAll(async () =>{
        response = await axios.put("https://fakerestapi.azurewebsites.net/api/v1/Users/4",data,{
            headers:{ 
                accept: '*/*',
                'Content-Type': 'application/json; v=1.0'
                
            },
        })
    })

    test('PUT Users', async()=>{
        await expect(response.status).toEqual(200)
        console.log(response)
    })



    test('verifies JSON schema for PUT user by ID request', async()=>{

        const result = await validator.validate(response.data, fakerestapiPUTUserByID)
        await expect(result.valid).toEqual(true)
    })


    test('verifies that data after PUT user is correct', async() =>{
        expect(response.data).toEqual(data)
    })

})
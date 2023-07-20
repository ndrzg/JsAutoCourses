const axios = require('axios')
const validator  = require('jsonschema')
const fakerestapiPOSTUser = require('../data/fakerestapiPOSTUser.v1.json')



describe('test suite for POST user endpoint of fakerestapi service', function(){
    let response;

    const data = {
        id: 10,
        userName: 'User 10',
        password: 'Password11'
      }

    beforeAll(async () =>{
        response = await axios.post("https://fakerestapi.azurewebsites.net/api/v1/Users/",data, {
            headers:{ 
                accept: '*/*',
                'Content-Type': 'application/json; v=1.0'
                
            },
        })
    })
    
    test('POST api Users', async () => {
        expect(response.status).toBe(200)
      })
      

      test('verifies JSON schema for Post user by ID request', async()=>{
        
        const result = await validator.validate(response.data, fakerestapiPOSTUser )
        await expect(result.valid).toEqual(true)
    })


    test('verifies that data after POST user is correct', async() =>{

        expect(response.data).toEqual(data)
        console.log(response)
    })



})

describe('test suite for POST user endpoint of fakerestapi service', function(){
    let response;

    const data = {
        id: 'a',
        userName: 'User 10',
        password: 'Password11'
      }

    beforeAll(async () =>{
        response = await axios.post("https://fakerestapi.azurewebsites.net/api/v1/Users/11",data, {
            headers:{ 
                accept: '*/*',
                'Content-Type': 'application/json; v=1.0'
                
            },
        })
    })
    
    test('POST api Users', async () => {
        console.log(response)
        expect(response.status).toBe(405)
      })
      
    

})
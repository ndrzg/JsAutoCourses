const axios = require('axios')

describe('test suite for DELETE User by ID endpoint of fakerestapi service', function(){
    let response;
        beforeAll(async () =>{
            response = await axios.delete("https://fakerestapi.azurewebsites.net/api/v1/Users/10",{
                headers:{ 
                    accept: '*/*',
                    
                },
            })
        })
    
      
      test('DELETE api Users', async()=>{
        await expect(response.status).toEqual(200)
      })
      

})
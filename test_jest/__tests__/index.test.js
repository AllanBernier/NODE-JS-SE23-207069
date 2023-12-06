const app = require("../index")
const supertest = require("supertest");
const request = supertest(app);

describe('Testing our endpoints', () => { 
    
    beforeAll( () => {
        // console.log("In before All")
    })
    beforeEach( () => {
        // console.log("In before Each")
        
    })

    afterAll( () => {
        // console.log("In After All")
        
    })
    afterEach( () => {
        // console.log("In After Each")        
    })

    it('should return Hello World on GET "/" ', () => { 
        request.get('/')
            .expect(200)
            .expect( (res) => {
                expect(res.body).toBe("Hello World !");
            })
    })
    
    it('should return message "Hello World" inside json on GET "/json"', async () => { 
        const response = await request.get("/json")
        expect(response.status).toBe(200)
        expect(response.body.message).toBe("Hello World !")
    })

})


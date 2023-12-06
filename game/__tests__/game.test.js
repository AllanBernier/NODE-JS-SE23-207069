const app = require("../index")
const supertest = require("supertest")
const request = supertest(app)

describe('Testing rock papers cisors', () => { 
    

    it('should update score when PUT on "/game/score/2/4/5"', async () => { 

        response = await request.put("/game/score/2/4/5");

        expect(response.status).toBe(200)
        expect(response.body.win).toBe(2)
        expect(response.body.lose).toBe(4)
        expect(response.body.tie).toBe(5)
        
    })

    it('should restart score to 0 when POST "/game/restart', async () => { 
        response = await request.post("/game/restart")

        expect(response.status).toBe(200)
        expect(response.body.win).toBe(0)
        expect(response.body.lose).toBe(0)
        expect(response.body.tie).toBe(0)
    })


    it('should send score when GET on "/game/score"', async () => {

        response = await request.get("/game/score")

        expect(response.status).toBe(200)
        expect(response.body.win).toBe(0)
        expect(response.body.lose).toBe(0)
        expect(response.body.tie).toBe(0)
    })

    it('response should contain my action when GET "/game/play/pierre"', async () => {

        response = await request.get("/game/play/pierre")

        expect(response.status).toBe(200)
        expect(response.text).toContain('pierre')
    })

    it('Should return win when send feuille and server play pierre', async () => {
        jest.spyOn(global.Math, 'random').mockReturnValue(0);

        response = await request.get("/game/play/feuille")

        expect(response.status).toBe(200)
        expect(response.text).toBe('Vous avez joué feuille, le serveur a joué pierre vous avez fait victoire')
    })

    it('Should return tie when send feuille and server play feuille', async () => {
        jest.spyOn(global.Math, 'random').mockReturnValue(0.5);

        response = await request.get("/game/play/feuille")

        expect(response.status).toBe(200)
        expect(response.text).toBe('Vous avez joué feuille, le serveur a joué feuille vous avez fait égalité')
    })


})

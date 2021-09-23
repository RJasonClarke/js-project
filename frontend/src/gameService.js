class GameService{

    constructor(endpoint){
        this.endpoint = endpoint
    }

    getGames(){
        fetch(`${this.endpoint}/games`)
        .then(resp => resp.json())
        .then(games => {
            for (const game of games){
                const g = new Game(game)
                g.toDom()
            }
        })
    }
}
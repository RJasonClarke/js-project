class Game{

    static all = []
    static gamesContainer = document.getElementById("games-container")

    constructor({id, title, details, genre, list_id}){
        this.id = id
        this.title = title
        this.details = details
        this.genre = genre
        this.list_id = list_id

        //will instantiate the element as an li when created 
        this.element = document.createElement('li')
        this.element.dataset.id = this.id
        this.element.id = `game-${this.id}`

        Game.all.push(this)
    }

    //sets up the layout for the games-container
    gameHTML(){
        this.element.innerHTML += `
            <div>
                <h3>${this.title}</h3>
                <p>${this.details}</p>
                <p>${this.genre}</p>
            </div>
        `
        return this.element
    }

    toDom(){
        Game.gamesContainer.append(this.gameHTML())
    }
}
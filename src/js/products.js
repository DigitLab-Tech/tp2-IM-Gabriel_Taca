
import { gamesList } from "./gamesList";

class GameManager {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.createHeader();
    }

    createHeader() {
        const header = document.createElement('div');
        header.className = 'flex flex-col items-center p-4 border-b border-lime-900 col-span-1 md:col-span-2 lg:col-span-3';

        const headerImage = document.createElement('img');
        headerImage.src = '/images/header_products.png'; 
        headerImage.alt = 'Header Image';
        headerImage.className = 'w-[15rem] h-[10rem] md:w-[33rem] md:h-[20rem] mb-4 row-start-1 col-start-1 ';

        const headerText = document.createElement('h2');
        headerText.className = 'text-2xl font-bold font-slikScreen text-center';
        headerText.textContent = 'Games List';

        header.appendChild(headerImage);
        header.appendChild(headerText);

        this.container.appendChild(header);
    }

    addGame(game) {
        const gameElement = game.createGamesElement();
        this.container.appendChild(gameElement);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const gameManager = new GameManager('screen_content-container-products');




    gamesList.forEach(game => {
        gameManager.addGame(game);
    });
});
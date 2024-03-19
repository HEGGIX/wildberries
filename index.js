import createHeader from "./components/header";
import createCarousel from "./components/carousel";
import addCards from "./components/cards";
import createSearch from "./components/search";
import createBasket from "./components/basket";


function createApp() {
    createHeader();
    createCarousel();
    addCards();
    createBasket();
    createSearch();
}
createApp();
import { Selector } from 'testcafe';

export default class IndexPage {
    constructor () {
        const addCityBtn = Selector('#add_city');
        const weatherWrapper = Selector('.city-card');

        this.counter   = counterWrapper.child('.city-card__image');
        this.increment = counterWrapper.child('.city-card__name');
        this.desrement = counterWrapper.child('.city-card__weather');
    }
}

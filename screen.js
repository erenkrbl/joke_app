class Screen {
    constructor(){
        this.jokeBringBtn = document.querySelector('.joke-bring-button');
        this.jokeBringBtn .addEventListener('click', ()=>this.jokeBring());
    }

    async jokeBring(){
        const randomPhoto = await new UnsplashApi().randomPhotoBring();
        const randomJoke = await new JokeApi().randomJokeBring();
        const translate = await new TranslateApi(randomJoke).translatedDid();
    }
}
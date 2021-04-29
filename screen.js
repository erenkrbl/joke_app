class Screen {
    constructor(){
        this.jokeBringBtn = document.querySelector('.joke-bring-button');
        this.jokeBringBtn .addEventListener('click', ()=>this.jokeBring());
    }

    async jokeBring(){
        console.log('click');
    }
}
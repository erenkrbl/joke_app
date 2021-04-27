class JokeApi {
    constructor() {
        this.baseURL = 'https://api.chucknorris.io';
        this.axiosObject = axios.create({
            baseURL: this.baseURL,
        });
    }

    async randomJokeBring(){
        const jokeResponse = await this.axiosObject.get('/jokes/random');
        console.log(jokeResponse.data.value);
        return jokeResponse.data.value;

    }
}
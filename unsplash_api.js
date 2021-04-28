class UnsplashApi {
    constructor() {
        this.baseURL = 'https://api.unsplash.com';
        this.clientID = 'Client-ID Hv8xpFm_IY_wWLr4siZu_t14GOTwm4scLfWECWLtfjk';
        this.axiosObject = axios.create({
            baseURL: this.baseURL,
            headers : {
                Authorization: this.clientID
            }
        });
    }

    async randomPhotoBring(){
        try {
            const photoResponse = await this.axiosObject.get('/photos/random');
        console.log(photoResponse.data.urls.regular);
        //return photoResponse.data.value;
        } catch (err) {
            console.log(err);
        }

    }
}

// Acces key: Hv8xpFm_IY_wWLr4siZu_t14GOTwm4scLfWECWLtfjk
// secret key: IyUsHQk6z0A2eToxOe9wl94spfCSNjlj4aCtXrexN2I
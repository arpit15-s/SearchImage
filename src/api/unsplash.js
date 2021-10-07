import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID VEtKBrdhNG1PxQv_QGPdICfFnSeLY5U7OlYdgZF09_0'
    }
})
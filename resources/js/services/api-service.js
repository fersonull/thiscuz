import axios from "axios";

class ApiService {
    constructor(baseURL = "http://localhost:8000/api") {
        this.api = axios.create({
            baseURL,
            withCredentials: true,
            headers: {
                Accept: "application/json",
            },
        });
    }

    async get(endpoint, params = {}) {
        return await this.api.get(endpoint, { params })
    }

    async post(endpoint, data = {}) {
        return await this.api.post(endpoint, data)
    }
}

export default new ApiService
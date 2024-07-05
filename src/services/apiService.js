import axios from "./axios.customize"

const createUserApi = (fullName, email, password, phone) => {
    const URL_BACKEND = "/api/v1/user"
    const data = {
        fullName,
        email,
        password,
        phone
    }
    return axios.post(URL_BACKEND, data)
}

const updateUserApi = (_id, fullName, phone) => {
    const URL_BACKEND = "/api/v1/user"
    const data = {
        _id,
        fullName,
        phone
    }
    return axios.put(URL_BACKEND, data)
}

const fetchAllUserApi = () => {
    const URL_BACKEND = "/api/v1/user"
    return axios.get(URL_BACKEND)
}

export {
    createUserApi,
    updateUserApi,
    fetchAllUserApi
}
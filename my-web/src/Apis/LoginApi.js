import axios from 'axios'

export default {
    login: (data) => axios.post("http://localhost:8080/api/account/login", data),
    register: (data) => axios.post("http://localhost:8080/api/account/register", data)
}
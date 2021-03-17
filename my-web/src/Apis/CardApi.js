import axios from 'axios'

export default {
    AddCard: (data) => axios.post("http://localhost:8080/api/card", data),
    Card: () => axios.get("http://localhost:8080/api/card"),
}
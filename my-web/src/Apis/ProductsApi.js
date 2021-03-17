import axios from 'axios'

export default {
    fetchProducts:(pagination) => axios.get(
        `http://localhost:8080/api/products?key=${pagination.key}&page=${pagination.page}&limit=${pagination.limit}`
        )
}
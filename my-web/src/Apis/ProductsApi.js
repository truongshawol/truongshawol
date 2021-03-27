import axios from 'axios'

export default {
    fetchProducts:(pagination) => axios.get(
        `http://localhost:8080/api/products?key=${pagination.key}&page=${pagination.page}&limit=${pagination.limit}`
        ),
    deleteProduct:(id) => axios.delete(`http://localhost:8080/api/products/${id}`),
    editProduct:(id) => axios.put(`http://localhost:8080/api/products/${id}`),
    addProduct:(data) => axios.post(`http://localhost:8080/api/products`, data)
}
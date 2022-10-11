import axios from 'axios';

const searchConsigment = (search) => {
    return axios.get(`http://localhost:4000/api/consignment/list?product_name=${search}`);
};

const getAllConsigment = () => {
    return axios.get('http://localhost:4000/api/consignment/list');
};

const getAllProducer = () => {
    return axios.get('http://localhost:4000/api/producer/list');
};
const createConsignment = (data) => {
    return axios.post('http://localhost:4000/api/consignment/create', data);
};
const updateConsignment = (id, data) => {
    return axios.post(`http://localhost:4000/api/consignment/update/${id}`, data);
};

const deleteConsignment = (id) => {
    return axios.delete(`http://localhost:4000/api/consignment/delete/${id}`);
};

const getConsignmentWithPaginate = (page) => {
    return axios.get(`http://localhost:4000/api/consignment/list?page=${page}`);
};

export {
    getAllConsigment,
    getAllProducer,
    deleteConsignment,
    updateConsignment,
    getConsignmentWithPaginate,
    searchConsigment,
    createConsignment,
};

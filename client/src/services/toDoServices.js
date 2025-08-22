import axios from 'axios';
import { getUserDetails } from '../utils/GetUser';

const SERVER_URL = 'http://localhost:5000/api/todo/';

const authHeaders = () => {
    let userToken = getUserDetails()?.token;
    if (!userToken) return {};
    return {
        headers: {
            'Authorization': userToken
        }
    };
};

const createToDo = (data) => {
    return axios.post(SERVER_URL, data, authHeaders());
};

const getAllToDos = (userId) => {
    return axios.get(SERVER_URL + userId, authHeaders());
};

const updateToDo = (id, data) => {
    return axios.put(`${SERVER_URL}${id}`, data, authHeaders());
};

const deleteToDo = (id) => {
    return axios.delete(`${SERVER_URL}${id}`, authHeaders());
};

const ToDoServices = {
    createToDo,
    getAllToDos,
    updateToDo,
    deleteToDo
};

export { ToDoServices };
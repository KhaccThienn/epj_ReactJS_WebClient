import * as http from "../commons/http";

const urlAPI = process.env.REACT_APP_URL_API;

const config = {
    headers: {
        "Access-Control-Allow-Origin": "https://localhost:7144",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        'Content-Type': 'multipart/form-data'
    }
};

export const getAll = async () => {
    try {
        const res = await http.get(`${urlAPI}/api/Employee`, config);
        return [res, null];
    } catch (error) {
        return [null, error];
    }
};


export const getAllByName = async (name) => {
    try {
        const res = await http.get(`${urlAPI}/api/Employee/search/${name}`, config);
        return [res, null];
    } catch (error) {
        return [null, error];
    }
};

export const post = async (data) => {
    try {
        const res = await http.post(`${urlAPI}/api/Employee`, data, config);
        return [res, null];
    } catch (error) {
        return [null, error];
    }
};

export const updatee = async (id, data) => {
    try {
        const res = await http.put(`${urlAPI}/api/Employee/${id}`, data, config);
        return [res, null];
    } catch (error) {
        return [null, error];
    }
};

export const getById = async (id) => {
    try {
        const res = await http.get(`${urlAPI}/api/Employee/${id}`, config);
        return [res, null];
    } catch (error) {
        return [null, error];
    }
};
export const removee = async (id) => {
    try {
        const res = await http.remove(`${urlAPI}/api/Employee/${id}`, config);
        return [res, null];
    } catch (error) {
        return [null, error];
    }
};
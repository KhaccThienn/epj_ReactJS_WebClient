import * as http from "../commons/http";

const urlAPI = process.env.REACT_APP_URL_API;

const config = {
    headers: {
        "Access-Control-Allow-Origin": "https://localhost:7144",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        'Content-Type': 'application/json'
    }
};

export const getAllDepartment = async () => {
    try {
        const res = await http.get(`${urlAPI}/api/Department`, config);
        return [res, null];
    } catch (error) {
        return [null, error];
    }
};

export const getAllDepartmentByName = async (name) => {
    try {
        const res = await http.get(`${urlAPI}/api/Department/search/${name}`, config);
        return [res, null];
    } catch (error) {
        return [null, error];
    }
};

export const post = async (data) => {
    try {
        const res = await http.post(`${urlAPI}/api/Department`, data, config);
        return [res, null];
    } catch (error) {
        return [null, error];
    }
};

export const updatee = async (id, data) => {
    try {
        const res = await http.put(`${urlAPI}/api/Department/${id}`, data, config);
        return [res, null];
    } catch (error) {
        return [null, error];
    }
};

export const getById = async (id) => {
    try {
        const res = await http.get(`${urlAPI}/api/Department/${id}`, config);
        return [res, null];
    } catch (error) {
        return [null, error];
    }
};
export const removee = async (id) => {
    try {
        const res = await http.remove(`${urlAPI}/api/Department/${id}`, config);
        return [res, null];
    } catch (error) {
        return [null, error];
    }
};
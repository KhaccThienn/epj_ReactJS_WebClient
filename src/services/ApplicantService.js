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
        const res = await http.get(`${urlAPI}/api/Applicant`, config);
        return [res, null];
    } catch (error) {
        return [null, error];
    }
};


export const getAllByName = async (vacancyNumber) => {
    try {
        const res = await http.get(`${urlAPI}/api/Applicant/search/${vacancyNumber}`, config);
        return [res, null];
    } catch (error) {
        return [null, error];
    }
};

export const post = async (data) => {
    try {
        const res = await http.post(`${urlAPI}/api/Applicant`, data, config);
        return [res, null];
    } catch (error) {
        return [null, error];
    }
};

export const updatee = async (id, data) => {
    try {
        const res = await http.put(`${urlAPI}/api/Applicant/${id}`, data, config);
        return [res, null];
    } catch (error) {
        return [null, error];
    }
};

export const getManyById = async (id) => {
    try {
        const res = await http.get(`${urlAPI}/api/Applicant/search/${id}`, config);
        return [res, null];
    } catch (error) {
        return [null, error];
    }
};

export const getById = async (id) => {
    try {
        const res = await http.get(`${urlAPI}/api/Applicant/${id}`, config);
        return [res, null];
    } catch (error) {
        return [null, error];
    }
};
export const removee = async (id) => {
    try {
        const res = await http.remove(`${urlAPI}/api/Applicant/${id}`, config);
        return [res, null];
    } catch (error) {
        return [null, error];
    }
};
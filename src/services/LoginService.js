import * as http from "../commons/http";

const urlAPI = process.env.REACT_APP_URL_API;

const config = {
    headers: {
        "Access-Control-Allow-Origin": "https://localhost:7144",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        'Content-Type': 'application/json'
    }
};

export const login = async (data) => {
    try {
        const res = await http.post(`${urlAPI}/api/auth/login`, data, config);
        return [res, null];
    } catch (error) {
        return [null, error];
    }
};
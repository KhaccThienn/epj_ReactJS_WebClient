import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://localhost:7144",
    headers: { 'Content-Type': 'application/json' },
});



//default url
export const get = async (url, config = {}) => {
    const res = await axiosInstance.get(url, config);
    return res.data;
};

export const post = async (url, data, config = {}) => {
    const res = await axiosInstance.post(url, data, config);
    return res.data;
};

export const put = async (url, data, config = {}) => {
    const res = await axiosInstance.put(url, data, config);
    return res.data;
};

export const remove = async (url, config = {}) => {
    const res = await axiosInstance.delete(url, config);
    return res.data;
};

export default axiosInstance;

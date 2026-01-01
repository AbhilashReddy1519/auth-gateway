import axios from "axios";

const api = axios.create({
	baseURL: `http://localhost:${import.meta.env.VITE_PORT || 8000}`,
	withCredentials: true,
});

export const googleAuth = (code: string) => api.get(`/google/?code=${code}`);

export default api;

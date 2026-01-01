import { useNavigate } from "react-router-dom";
import api from "../api/backendApi";
import { type ReactNode, useEffect } from "react";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
	const navigate = useNavigate();

	useEffect(() => {
		const auth = async () => {
			try {
				await api.get("/me");
			} catch (error) {
				console.log(error);
				navigate("/login");
			}
		};
		auth();
	}, [navigate]);

	return children;
};

export default ProtectedRoute;

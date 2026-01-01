import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "../pages/login";
import SignUp from "../pages/signup";
import Home from "../pages/home";
import ProtectedRoute from "../components/ProtectedRoute";

const ClientRoutes = () => {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={<Navigate to="/login" replace />}
					/>
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<SignUp />} />
					<Route
						path="/home"
						element={
							<ProtectedRoute>
								<Home />
							</ProtectedRoute>
						}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default ClientRoutes;

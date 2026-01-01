import { useGoogleLogin, type CodeResponse } from "@react-oauth/google";
import { googleAuth } from "../api/backendApi";
// import { useNavigate } from "react-router-dom";

export const useGoogleAuth = () => {
	const responseGoogle = async (authRequest: CodeResponse) => {
		try {
			const res = await googleAuth(authRequest.code);
			console.log(res);
		} catch (error) {
			console.error(authRequest, error);
		}
	};

	const googleLogin = useGoogleLogin({
		onSuccess: responseGoogle,
		onError: (error) => {
			console.error("Login Failed:", error);
		},
		flow: "auth-code",
	});

	return { googleLogin, responseGoogle };
};

import { Link } from "react-router-dom";
import { useGoogleAuth } from "../hooks/useGoogle";

const SignUp = () => {
  const { googleLogin } = useGoogleAuth();
  return (
		<div className="w-full h-screen flex-col flex justify-center items-center text-center">
			<div className="max-w-4xl border p-8 flex flex-col bg-yellow-300/80 text-green-900">
				<h1 className="text-2xl mb-4">Login</h1>
				<form
					className="space-y-3 flex flex-col items-start"
					method="POST">
					<div className="">
						<label htmlFor="name">Name:</label>
						<input
							type="name"
							name="name"
							id="name"
							className="border m-2 text-black py-1 px-1"
						/>
					</div>
					<div className="">
						<label htmlFor="email">Email:</label>
						<input
							type="email"
							name="email"
							id="email"
							className="border m-2 text-black py-1 px-1"
						/>
					</div>
					<div>
						<label htmlFor="password">Password:</label>
						<input
							type="password"
							name="password"
							id="password"
							className="border m-2 text-black py-1 px-1"
						/>
					</div>
					<button
						type="submit"
						className="w-full border-2 rounded-2xl bg-green-900 text-yellow-400 p-2 cursor-pointer">
						Login
					</button>
				</form>
				<div className="py-10">
					<button
						type="button"
						className="w-full bg-blue-500 text-white rounded-2xl p-2 border-2 border-dotted cursor-pointer"
						onClick={(e) => {
							e.preventDefault();
							googleLogin();
						}}>
						Login with google
					</button>
				</div>
        <Link to={'/login'}>login</Link>
			</div>
		</div>
  );
};

export default SignUp;

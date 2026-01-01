import { GoogleOAuthProvider } from '@react-oauth/google'
import './App.css'
import ClientRoutes from './routes/clientRoutes'

function App() {
  return (
		<>
			<GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID}>
				<ClientRoutes />
			</GoogleOAuthProvider>
		</>
  );
}

export default App

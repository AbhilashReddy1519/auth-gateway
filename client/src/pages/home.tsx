import api from '../api/backendApi';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <button className='bg-purple-500 text-pink-50 px-4 py-2 text-2xl rounded-[10px_20px] cursor-pointer transition-all duration-300 ease-in-out border-2 hover:border-dotted hover:rounded-full hover:border-red-500 hover:bg-white hover:text-black text-center' onClick={() => {
        api.post("/logout");
        navigate('/');
      }}>Logout</button>
    </div>
  )
}

export default Home;
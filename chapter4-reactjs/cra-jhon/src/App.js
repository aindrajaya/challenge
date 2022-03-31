import { data } from 'autoprefixer';
import { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Link,
  Navigate,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';
import { PostComponent } from './components/Post';
import Landing from './pages/Landing';
import { Login } from './pages/Login';
import { Team } from './pages/Team';
import Testimonial from './pages/Testimonial';

function App() {
  const auth = useAuth();
  // 1. Buat useState, bentuknya array
  const [post, setPost] = useState([]);

  const getPostData = async () => {
    try {
      //2. Panggil data json dengan fetch ('https://jsonplaceholder.typicode.com/users')
      const a = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await a.json();
      setPost(data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    //3. Jalankan getPostData()
    getPostData();
  }, []);

  // console.log(post)

  return (
    <BrowserRouter>
      {auth ? <Header /> : null}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/testimonial"
          element={
            <HalamanYangDiproteksi>
              <Testimonial />
            </HalamanYangDiproteksi>
          }
        />
        <Route path="/tim" element={<PrivateOutlet />}>
          <Route path="/tim" element={<Team />} />
        </Route>
        
        {/* //TAMBAHKAN SATU ROUTES KE HALAMAN POST COMPONENT */}
        <Route path="/user" element={<PrivateOutlet />}>
          <Route path="/user" element={<PostComponent data={post} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const Header = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
        <a className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-10 h-10 p-2 text-white bg-green-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Kampus Merdeka</span>
        </a>
        <nav className="flex flex-wrap items-center justify-center text-base md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400">
          <Link className="mr-5 hover:text-gray-900" to="/">
            Home
          </Link>
          <Link className="mr-5 hover:text-gray-900" to="/tim">
            Team
          </Link>
          <Link className="mr-5 hover:text-gray-900" to="/testimonial">
            Testimonial
          </Link>
          <Link className="mr-5 hover:text-gray-900" to="/user">
            Users
          </Link>
          {/* <Link className="mr-5 hover:text-gray-900" to="/users">Get Users</Link> */}
        </nav>
      </div>
    </header>
  );
};

function HalamanYangDiproteksi({ children }) {
  const auth = useAuth();
  return auth ? children : <Navigate to="/login" />;
}

function PrivateOutlet() {
  const auth = useAuth();
  return auth ? <Outlet /> : <Navigate to="/login" />;
}

function useAuth() {
  return true;
}

export default App;

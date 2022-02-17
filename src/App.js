import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import RequiredAuth from './pages/RequiredAuth';
import 'react-toastify/dist/ReactToastify.css';

const App = () => (
    <>
        <Router>
            <div className='container'>
                <Header />
                <Routes>
                    <Route path='/' element={<RequiredAuth />}>
                        <Route index element={<Dashboard />} />
                    </Route>
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                </Routes>
            </div>
        </Router>
        <ToastContainer />
    </>
);

export default App;
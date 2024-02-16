
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Registration from './Pages/Registration';
import Login from './Pages/Login';
import Service from './Pages/Service';
import Navbar from './Components/Navbar';
import Error from './Pages/Error';
import Footer from './Components/Footer';
import './Components/Footer.css'
import Logout from './Pages/Logout';
import AdminLayout from './Components/layouts/AdminLayout';
import AdminUsers from './Pages/AdminUsers';
import AdminContact from './Pages/AdminContact';
import AdminService from './Pages/AdminService';
import AdminUpdate from './Pages/AdminUpdate';


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/service' element={<Service />} />
        <Route path='/register' element={<Registration />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='*' element={<Error />} />
        <Route exact path='/admin' element={<AdminLayout />}>
          <Route exact path='users' element={<AdminUsers />} />
            {/* Add the route for editing a user */}
            <Route exact path='users/:id/edit' element={<AdminUpdate />} />
          <Route exact path='contacts' element={<AdminContact />} />
          <Route exact path='services' element={<AdminService />} />
        </Route>



      </Routes>
      <Footer />
    </>
  );
}

export default App;

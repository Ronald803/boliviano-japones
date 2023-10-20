import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import UserManagementPage from './pages/UserManagementPage';
import TestPage from './pages/TestPage';
import InfoTeachersPage from './pages/InfoTeachersPage';
import CreateTestPage from './pages/CreateTestPage';
import CoursesPage from './pages/CoursesPage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <div>
          <Routes>
              <Route path='/'               element={<HomePage/>}/>
              <Route path='/users'          element={<UserManagementPage/>}/>
              <Route path='/test'           element={<TestPage/>} />
              <Route path='/infoTeachers'   element={<InfoTeachersPage/>} />
              <Route path='/create-test'    element={<CreateTestPage/>}/>
              <Route path='/courses'        element={<CoursesPage/>}/>
          </Routes>
        </div>
      </BrowserRouter>
      <Footer/>    
    </div>
  );
}

export default App;

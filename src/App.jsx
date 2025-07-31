import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Dashboard from './components/dashboard';
import AdminDashboard from './components/Admin';
import ErrorPage from './components/error404';
import UploadDocumets from './components/UploadDocuments';
import ViewStatus from './components/ViewStatus';
import Enquire from './components/contact';
import ManageRegistration from './components/Manage';

function App() {
  return (
    <div className='dark:bg-gray-800 dark:text-white m-0'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<AdminDashboard  />} />
        <Route path='/documents' element={<UploadDocumets />} />
        <Route path='/status' element={<ViewStatus />} />
        <Route path='/contact' element={<Enquire />} />
        <Route path='/registrations' element={<ManageRegistration />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

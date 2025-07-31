import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Dashboard from './components/dashboard';
import AdminDashboard from './components/Admin';
import ErrorPage from './components/error404';
import UploadDocumets from './components/UploadDocuments';

function App() {
  return (
    <div className='dark:bg-gray-800 dark:text-white m-0'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<AdminDashboard  />} />
        <Route path='/documents' element={<UploadDocumets />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

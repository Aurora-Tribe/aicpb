import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Homepage } from '@/pages/Homepage';
import { CompanyPage } from '@/pages/CompanyPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/company/:slug" element={<CompanyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App

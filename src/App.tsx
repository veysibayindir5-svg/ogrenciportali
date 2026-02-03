import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Departments from './pages/Departments';
import DepartmentDetail from './pages/DepartmentDetail';
import Yurtlar from './pages/Yurtlar';
import Acil from './pages/Acil';
import Ulasim from './pages/Ulasim';
import KampusCevresi from './pages/KampusCevresi';
import UcuzYerler from './pages/UcuzYerler';
import EvTutma from './pages/EvTutma';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import './App.css';

import SEO from './components/SEO';

const App: React.FC = () => {
    return (
        <LanguageProvider>
            <Router>
                <SEO />
                <div className="app-container">
                    <Navbar />
                    <main className="main-content">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/bolumler" element={<Departments />} />
                            <Route path="/bolumler/:slug" element={<DepartmentDetail />} />
                            <Route path="/yurtlar" element={<Yurtlar />} />
                            <Route path="/kampus-cevresi" element={<KampusCevresi />} />
                            <Route path="/ucuz-yerler" element={<UcuzYerler />} />
                            <Route path="/ulasim" element={<Ulasim />} />
                            <Route path="/ev-tutma" element={<EvTutma />} />
                            <Route path="/acil" element={<Acil />} />
                            <Route path="/blog" element={<Blog />} />
                            <Route path="/blog/:slug" element={<BlogDetail />} />
                        </Routes>
                    </main>
                    <footer className="footer container">
                        <p>&copy; 2026 Kilis Öğrenci Portalı. Tüm hakları saklıdır.</p>
                    </footer>
                </div>
            </Router>
        </LanguageProvider>
    );
};

export default App;

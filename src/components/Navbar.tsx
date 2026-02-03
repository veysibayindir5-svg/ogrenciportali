import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, Globe, PhoneCall } from 'lucide-react';
import './Navbar.css';

const Navbar: React.FC = () => {
    const { language, setLanguage, t } = useLanguage();
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleLang = () => {
        setLanguage(language === 'tr' ? 'ar' : 'tr');
    };

    const navLinks = [
        { name: t('home'), path: '/' },
        { name: t('departments'), path: '/bolumler' },
        { name: t('dorms'), path: '/yurtlar' },
        { name: t('campus'), path: '/kampus-cevresi' },
        { name: t('blog'), path: '/blog' },
    ];

    return (
        <nav className="navbar glass">
            <div className="container nav-content">
                <Link to="/" className="logo">
                    <span className="logo-emoji">🎓</span>
                    <span className="logo-text">{t('title')}</span>
                </Link>

                <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </NavLink>
                    ))}

                    <Link to="/acil" className="nav-link acil-link" onClick={() => setIsOpen(false)}>
                        <PhoneCall size={18} />
                        {t('emergency_short')}
                    </Link>

                    <button onClick={toggleLang} className="lang-toggle">
                        <Globe size={18} />
                        {language === 'tr' ? 'العربية' : 'Türkçe'}
                    </button>
                </div>

                <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;

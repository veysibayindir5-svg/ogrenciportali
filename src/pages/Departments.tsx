import React, { useState } from 'react';
import departmentsData from '../data/bolumler.json';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { Search, Filter } from 'lucide-react';
import './Departments.css';

const Departments: React.FC = () => {
    const { language } = useLanguage();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedFaculty, setSelectedFaculty] = useState('All');

    const faculties = ['All', ...new Set(departmentsData.map(d => language === 'tr' ? d.faculty_tr : d.faculty_ar))];

    const filtered = departmentsData.filter(dept => {
        const name = language === 'tr' ? dept.name_tr : dept.name_ar;
        const matchesSearch = name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFaculty = selectedFaculty === 'All' || (language === 'tr' ? dept.faculty_tr : dept.faculty_ar) === selectedFaculty;
        return matchesSearch && matchesFaculty;
    });

    return (
        <div className="departments-page container">
            <header className="page-header">
                <h1>{language === 'tr' ? 'Bölümler' : 'الأقسام'}</h1>
                <p>{language === 'tr' ? 'Kilis’teki tüm fakülteler ve meslek yüksekokulları.' : 'جميع الكليات والمدارس المهنية في كيليس.'}</p>
            </header>

            <div className="filters glass">
                <div className="search-box">
                    <Search size={20} />
                    <input
                        type="text"
                        placeholder={language === 'tr' ? 'Bölüm ara...' : 'ابحث عن قسم...'}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="faculty-filter">
                    <Filter size={20} />
                    <select value={selectedFaculty} onChange={(e) => setSelectedFaculty(e.target.value)}>
                        {faculties.map(f => <option key={f} value={f}>{f}</option>)}
                    </select>
                </div>
            </div>

            <div className="departments-grid">
                {filtered.map(dept => (
                    <Link to={`/bolumler/${dept.slug}`} key={dept.id} className="card dept-card">
                        <div className="card-image">
                            <img src={dept.hero_image} alt={language === 'tr' ? dept.name_tr : dept.name_ar} loading="lazy" />
                            <div className="faculty-badge">{language === 'tr' ? dept.faculty_tr : dept.faculty_ar}</div>
                        </div>
                        <div className="card-content">
                            <h3>{language === 'tr' ? dept.name_tr : dept.name_ar}</h3>
                            <p>{language === 'tr' ? dept.description_tr : dept.description_ar}</p>
                            <div className="card-footer">
                                <span className="btn-text">{language === 'tr' ? 'Detaylı İncele' : 'عرض التفاصيل'}</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Google AdSense */}
            <div className="ad-placeholder ad-banner" style={{ marginTop: '3rem' }}>
                <span>Google AdSense - Banner (728x90)</span>
            </div>
        </div>
    );
};

export default Departments;

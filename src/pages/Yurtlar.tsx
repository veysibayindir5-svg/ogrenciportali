import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import yurtlarData from '../data/yurtlar.json';
import { MapPin, Info, Building2, Users, Coins } from 'lucide-react';
import './StudentLife.css';
import './Yurtlar.css';

const Yurtlar: React.FC = () => {
    const { language, t } = useLanguage();
    const [activeFilter, setActiveFilter] = useState<'all' | 'kyk' | 'ozel'>('all');

    const filteredYurts = yurtlarData.filter(yurt =>
        activeFilter === 'all' || yurt.type === activeFilter
    );

    const stats = [
        {
            icon: <Building2 size={28} />,
            value: '20+',
            label: language === 'tr' ? 'Toplam Yurt' : 'مجموع السكن'
        },
        {
            icon: <Users size={28} />,
            value: '5000+',
            label: language === 'tr' ? 'Öğrenci Kapasitesi' : 'سعة الطلاب'
        },
        {
            icon: <Coins size={28} />,
            value: '450 ₺',
            label: language === 'tr' ? 'Başlangıç Fiyat (KYK)' : 'السعر الابتدائي (KYK)'
        }
    ];

    return (
        <div className="life-page yurtlar-page">
            {/* Hero Section with Background */}
            <section className="yurtlar-hero">
                <div className="hero-pattern"></div>
                <div className="hero-shapes">
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                </div>
                <div className="container">
                    <header className="page-header animate-slide-up">
                        <h1>{t('dorms')}</h1>
                        <p>{language === 'tr' ? 'KYK ve özel yurt seçenekleri, fiyatlar ve ulaşım.' : 'خيارات KYK والسكن الخاص، الأسعار والمواصلات.'}</p>
                    </header>

                    {/* Stats */}
                    <div className="yurt-stats">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="stat-card glass animate-scale" style={{ animationDelay: `${idx * 0.1}s` }}>
                                <div className="stat-icon">{stat.icon}</div>
                                <div className="stat-value">{stat.value}</div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Filter Tabs - Animated Toggle */}
                    <div className="filter-tabs animate-fade-up">
                        <button
                            className={`filter-tab ${activeFilter === 'all' ? 'active' : ''}`}
                            onClick={() => setActiveFilter('all')}
                        >
                            <span>{language === 'tr' ? 'Tümü' : 'الكل'}</span>
                            <span className="count">{yurtlarData.length}</span>
                        </button>
                        <button
                            className={`filter-tab kyk-tab ${activeFilter === 'kyk' ? 'active' : ''}`}
                            onClick={() => setActiveFilter('kyk')}
                        >
                            <span>KYK</span>
                            <span className="count">{yurtlarData.filter(y => y.type === 'kyk').length}</span>
                        </button>
                        <button
                            className={`filter-tab ozel-tab ${activeFilter === 'ozel' ? 'active' : ''}`}
                            onClick={() => setActiveFilter('ozel')}
                        >
                            <span>{language === 'tr' ? 'Özel' : 'خاص'}</span>
                            <span className="count">{yurtlarData.filter(y => y.type === 'ozel').length}</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Yurtlar Grid */}
            <div className="container">
                <div className="life-grid">
                    {filteredYurts.map((yurt, idx) => (
                        <div key={yurt.id} className={`card life-card yurt-card ${yurt.type}-card animate-fade-up`} style={{ animationDelay: `${idx * 0.1}s` }}>
                            <div className="card-image">
                                <img src={yurt.image} alt={language === 'tr' ? yurt.name_tr : yurt.name_ar} loading="lazy" />
                                <div className={`type-badge ${yurt.type} pulse-badge`}>{yurt.type.toUpperCase()}</div>
                            </div>
                            <div className="card-content">
                                <h3>{language === 'tr' ? yurt.name_tr : yurt.name_ar}</h3>
                                <div className="info-row">
                                    <MapPin size={18} />
                                    <span>{yurt.distance}</span>
                                </div>
                                <div className="info-row">
                                    <Info size={18} />
                                    <span>{yurt.price_range}</span>
                                </div>
                                <div className="card-actions">
                                    <a href={yurt.location} target="_blank" rel="noreferrer" className={`btn btn-${yurt.type}`}>
                                        <MapPin size={18} />
                                        {language === 'tr' ? 'Konumu Görüntüle' : 'عرض الموقع'}
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredYurts.length === 0 && (
                    <div className="no-results">
                        <Info size={48} />
                        <p>{language === 'tr' ? 'Bu kategoride yurt bulunamadı' : 'لم يتم العثور على سكن في هذه الفئة'}</p>
                    </div>
                )}

                {/* Google AdSense */}
                <div className="ad-placeholder ad-banner" style={{ marginTop: '3rem' }}>
                    <span>Google AdSense - Banner (728x90)</span>
                </div>
            </div>
        </div>
    );
};

export default Yurtlar;

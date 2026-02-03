import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import mekanlarData from '../data/mekanlar.json';
import { MapPin } from 'lucide-react';
import './StudentLife.css';

const KampusCevresi: React.FC = () => {
    const { language, t } = useLanguage();
    const places = mekanlarData.filter(m => m.category === 'kampus-cevresi');

    return (
        <div className="life-page container">
            <header className="page-header">
                <h1>{t('campus')}</h1>
                <p>{language === 'tr' ? 'Kampüs çevresindeki önemli noktalar, dinlenme alanları ve kültürel mekanlar.' : 'النقاط المهمة حول الحرم الجامعي، مناطق الاستراحة والأماكن الثقافية.'}</p>
            </header>

            <div className="life-grid">
                {places.map(place => (
                    <div key={place.id} className="card life-card">
                        <div className="card-image">
                            <img src={place.image} alt={language === 'tr' ? place.name_tr : place.name_ar} loading="lazy" />
                        </div>
                        <div className="card-content">
                            <h3>{language === 'tr' ? place.name_tr : place.name_ar}</h3>
                            <p>{language === 'tr' ? place.description_tr : place.description_ar}</p>
                            <div className="card-actions">
                                <a href={place.maps_link} target="_blank" rel="noreferrer" className="btn btn-primary">
                                    <MapPin size={18} />
                                    {language === 'tr' ? 'Haritada Gör' : 'عرض على الخريطة'}
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default KampusCevresi;

import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import departmentsData from '../data/bolumler.json';
import { useLanguage } from '../context/LanguageContext';
import { Book, Briefcase, GraduationCap, MapPin, Home } from 'lucide-react';
import './DepartmentDetail.css';

const DepartmentDetail: React.FC = () => {
    const { slug } = useParams();
    const { language } = useLanguage();

    const dept = departmentsData.find(d => d.slug === slug);

    if (!dept) return <Navigate to="/bolumler" />;

    const content = language === 'tr' ? {
        name: dept.name_tr,
        faculty: dept.faculty_tr,
        desc: dept.description_tr,
        is_hard: dept.features_tr.is_hard,
        career: dept.features_tr.career,
        advantage: dept.features_tr.kilis_advantage,
        headings: {
            about: "Bölüm Nedir?",
            difficulty: "Dersler Zor Mu?",
            career: "Mezun Olunca Ne Olunur?",
            kilis: "Kilis Avantajları",
            life: "Yerleşim ve Ulaşım"
        }
    } : {
        name: dept.name_ar,
        faculty: dept.faculty_ar,
        desc: dept.description_ar,
        is_hard: dept.features_ar.is_hard,
        career: dept.features_ar.career,
        advantage: dept.features_ar.kilis_advantage,
        headings: {
            about: "ما هو هذا القسم؟",
            difficulty: "هل الدروس صعبة؟",
            career: "ماذا تصبح بعد التخرج؟",
            kilis: "مزايا كيليس",
            life: "السكن والمواصلات"
        }
    };

    return (
        <div className="dept-detail-page">
            <header className="dept-hero">
                <img src={dept.hero_image} alt={content.name} className="hero-img" />
                <div className="hero-overlay"></div>
                <div className="container hero-content">
                    <div className="faculty-name">{content.faculty}</div>
                    <h1>{content.name}</h1>
                </div>
            </header>

            <div className="container dept-grid">
                <aside className="dept-sidebar glass">
                    <div className="sidebar-section">
                        <h4><GraduationCap size={20} /> {content.headings.about}</h4>
                        <p>{content.desc}</p>
                    </div>
                    <div className="sidebar-section">
                        <h4><MapPin size={20} /> {content.headings.life}</h4>
                        <p>{language === 'tr' ? 'Kampüse 5dk yürüme mesafesinde. Yakınında KYK yurtları mevcut.' : 'على بعد 5 دقائق مشياً من الحرم الجامعي. تتوفر سكنات KYK قريبة.'}</p>
                    </div>
                </aside>

                <main className="dept-main">
                    <section className="info-card">
                        <div className="icon-circle"><Book /></div>
                        <h3>{content.headings.difficulty}</h3>
                        <p>{content.is_hard}</p>
                    </section>

                    <section className="info-card">
                        <div className="icon-circle"><Briefcase /></div>
                        <h3>{content.headings.career}</h3>
                        <p>{content.career}</p>
                    </section>

                    <section className="info-card highlighted">
                        <div className="icon-circle"><Home /></div>
                        <h3>{content.headings.kilis}</h3>
                        <p>{content.advantage}</p>
                    </section>

                    <div className="google-ads-mid">
                        <span>Google Advertisements</span>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default DepartmentDetail;

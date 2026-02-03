import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
    AlertCircle,
    BookOpen,
    Bus,
    GraduationCap,
    HelpCircle,
    Home as HomeIcon,
    Info,
    Key,
    MapPin,
    Newspaper,
    Utensils
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

// Counter Animation Hook
const useCountUp = (end: number, duration: number = 2000) => {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasStarted) {
                    setHasStarted(true);
                }
            },
            { threshold: 0.5 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, [hasStarted]);

    useEffect(() => {
        if (!hasStarted) return;

        let startTime: number;
        let animationFrame: number;

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            setCount(Math.floor(progress * end));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration, hasStarted]);

    return { count, elementRef };
};

const Home: React.FC = () => {
    const { t, language } = useLanguage();

    const studentCount = useCountUp(12000);
    const departmentCount = useCountUp(55);
    const facultyCount = useCountUp(12);
    const dormCount = useCountUp(20);

    const mainFeatures = [
        {
            icon: <BookOpen size={32} />,
            title: language === 'tr' ? 'Bölümler' : 'الأقسام',
            desc: language === 'tr' ? 'Tüm fakülte ve bölümler' : 'جميع الكليات والأقسام',
            path: '/bolumler',
            gradient: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)'
        },
        {
            icon: <HomeIcon size={32} />,
            title: language === 'tr' ? 'Yurtlar' : 'السكن',
            desc: language === 'tr' ? 'KYK ve özel yurtlar' : 'سكن KYK والخاص',
            path: '/yurtlar',
            gradient: 'linear-gradient(135deg, #3b82f6 0%, #0ea5e9 100%)'
        },
        {
            icon: <Newspaper size={32} />,
            title: language === 'tr' ? 'Rehber' : 'الدليل',
            desc: language === 'tr' ? 'Blog ve rehberler' : 'المدونة والأدلة',
            path: '/blog',
            gradient: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)'
        },
    ];

    const quickLinks = [
        { icon: <MapPin size={20} />, name: t('campus'), path: '/kampus-cevresi', gradient: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)' },
        { icon: <Utensils size={20} />, name: t('cheap_places'), path: '/ucuz-yerler', gradient: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)' },
        { icon: <Bus size={20} />, name: t('transport'), path: '/ulasim', gradient: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)' },
        { icon: <Key size={20} />, name: t('housing'), path: '/ev-tutma', gradient: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)' },
        { icon: <AlertCircle size={20} />, name: t('emergency'), path: '/acil', gradient: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)' },
    ];

    const stats = [
        {
            count: studentCount,
            value: '12,000+',
            label: language === 'tr' ? 'Öğrenci' : 'طالب',
            icon: '👨‍🎓'
        },
        {
            count: departmentCount,
            value: '55+',
            label: language === 'tr' ? 'Bölüm' : 'قسم',
            icon: '📚'
        },
        {
            count: facultyCount,
            value: '12',
            label: language === 'tr' ? 'Fakülte & MYO' : 'كلية ومدرسة',
            icon: '🏛️'
        },
        {
            count: dormCount,
            value: '20+',
            label: language === 'tr' ? 'Yurt' : 'سكن',
            icon: '🏠'
        },
    ];

    return (
        <div className="home-page">
            {/* Modern Hero Section */}
            <section className="hero-modern">
                <div className="hero-pattern"></div>
                <div className="hero-shapes">
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                    <div className="shape shape-3"></div>
                </div>
                <div className="container">
                    <div className="hero-content-modern">
                        <div className="hero-badge animate-fade-in">
                            <GraduationCap size={24} />
                            <span>{language === 'tr' ? 'Kilis 7 Aralık Üniversitesi' : 'جامعة كيليس 7 أراليك'}</span>
                        </div>
                        <h1 className="animate-slide-up">{language === 'tr' ? 'Öğrenci Portalı' : 'بوابة الطلاب'}</h1>
                        <p className="animate-slide-up delay-1">{language === 'tr'
                            ? 'Kilis\'te öğrenci hayatına dair ihtiyacınız olan her şey burada.'
                            : 'كل ما تحتاجه حول حياة الطلاب في كيليس هنا.'}</p>

                        {/* Stats with Counter Animation */}
                        <div className="stats-grid">
                            {stats.map((stat, idx) => (
                                <div key={idx} ref={stat.count.elementRef} className="stat-item animate-scale" style={{ animationDelay: `${idx * 0.1} s` }}>
                                    <div className="stat-icon">{stat.icon}</div>
                                    <div className="stat-value">
                                        {stat.count.count.toLocaleString()}{stat.value.includes('+') ? '+' : ''}
                                    </div>
                                    <div className="stat-label">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Features Section */}
            <section className="main-features container">
                <h2 className="section-title">
                    {language === 'tr' ? 'Hızlı Erişim' : 'وصول سريع'}
                </h2>
                <div className="features-grid">
                    {mainFeatures.map((feature, idx) => (
                        <Link key={idx} to={feature.path} className="feature-card" style={{ animationDelay: `${idx * 0.15} s` }}>
                            <div className="feature-gradient" style={{ background: feature.gradient }}></div>
                            <div className="feature-icon" style={{ background: feature.gradient }}>
                                {feature.icon}
                            </div>
                            <h3>{feature.title}</h3>
                            <p>{feature.desc}</p>
                            <span className="feature-arrow">→</span>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Quick Links Grid */}
            <section className="quick-links-section">
                <div className="container">
                    <h2 className="section-title">
                        {language === 'tr' ? 'Öğrenci Yaşamı' : 'حياة الطلاب'}
                    </h2>
                    <div className="quick-links-grid">
                        {quickLinks.map((link, idx) => (
                            <Link key={idx} to={link.path} className="quick-link-card">
                                <div className="quick-link-icon" style={{ background: link.gradient }}>
                                    {link.icon}
                                </div>
                                <span>{link.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="faq-section container">
                <h2 className="section-title">
                    {language === 'tr' ? 'Sıkça Sorulan Sorular' : 'الأسئلة الشائعة'}
                </h2>
                <div className="faq-grid">
                    {[
                        {
                            q_tr: "Kilis'te yurt imkanları nasıl?",
                            q_ar: "كيف هي مرافق السكن في كيليس؟",
                            a_tr: "KYK yurtları ve özel yurtlar mevcuttur. Kampüse yakın birçok seçenek bulunmaktadır.",
                            a_ar: "تتوفر مساكن KYK ومساكن خاصة. هناك العديد من الخيارات بالقرب من الحرم الجامعي."
                        },
                        {
                            q_tr: "Kampüse ulaşım kolay mı?",
                            q_ar: "هل المواصلات إلى الحرم الجامعي سهلة؟",
                            a_tr: "Evet, şehir merkezinden kampüse düzenli dolmuş ve otobüs seferleri vardır.",
                            a_ar: "نعم، هناك خدمات حافلات وحافلات صغيرة منتظمة من وسط المدينة إلى الحرم الجامعي."
                        },
                        {
                            q_tr: "Yemek fiyatları uygun mu?",
                            q_ar: "هل أسعار الطعام مناسبة؟",
                            a_tr: "Kilis öğrenci dostu bir şehirdir, uygun fiyata lezzetli yemek seçenekleri boldur.",
                            a_ar: "كيليس مدينة صديقة للطلاب، وتكثر فيها خيارات الطعام اللذيذ بأسعار معقولة."
                        },
                        {
                            q_tr: "Burs imkanları var mı?",
                            q_ar: "هل تتوفر منح دراسية؟",
                            a_tr: "Kilis Vakfı ve üniversitenin çeşitli başarı bursları öğrencilere sunulmaktadır.",
                            a_ar: "يتم تقديم منح مؤسسة كيليس ومنح التفوق المختلفة من الجامعة للطلاب."
                        }
                    ].map((item, idx) => (
                        <div key={idx} className="faq-card">
                            <div className="faq-icon-wrapper">
                                <HelpCircle size={24} />
                            </div>
                            <div className="faq-content">
                                <h3>{language === 'tr' ? item.q_tr : item.q_ar}</h3>
                                <p>{language === 'tr' ? item.a_tr : item.a_ar}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Info Section */}
            <section className="info-section container">
                <div className="home-info-card">
                    <Info size={32} className="info-icon" />
                    <div className="info-content">
                        <h3>{language === 'tr' ? 'Yeni mi Geldiniz?' : 'هل أنت جديد؟'}</h3>
                        <p>{language === 'tr'
                            ? 'Kilis\'e yeni gelen öğrenciler için kapsamlı rehberlerimizi inceleyin.'
                            : 'تحقق من أدلةنا الشاملة للطلاب الجدد القادمين إلى كيليس.'}</p>
                        <Link to="/blog" className="btn btn-gradient">
                            {language === 'tr' ? 'Rehberleri İncele' : 'راجع الأدلة'}
                        </Link>
                    </div>
                </div>
            </section>

            {/* Google AdSense - Bottom Banner */}
            <section className="container" style={{ marginBottom: '3rem' }}>
                <div className="ad-placeholder ad-banner">
                    <span>Google AdSense - Banner (728x90)</span>
                </div>
            </section>
        </div>
    );
};

export default Home;

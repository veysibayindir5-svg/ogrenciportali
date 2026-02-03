import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
    Bus,
    MapPin,
    CreditCard,
    Clock,
    TrendingUp,
    Info
} from 'lucide-react';
import './StudentLife.css';

const Ulasim: React.FC = () => {
    const { language } = useLanguage();

    const routes = [
        {
            id: '1',
            name_tr: '1. Güzergah',
            name_ar: 'الخط 1',
            route_tr: 'Söğütlüdere → Otogar → Hastane → Üniversite → Çarşı → Oylum',
            route_ar: 'سوغوتلوديره → محطة الحافلات → المستشفى → الجامعة → السوق → أويلوم',
            stops_tr: ['Söğütlüdere', 'Beşevler', 'Otogar', 'Hastane', 'Üniversite', 'TOKİ', 'Çarşı', 'Oylum'],
            stops_ar: ['سوغوتلوديره', 'بشيفلر', 'محطة', 'مستشفى', 'جامعة', 'توكي', 'سوق', 'أويلوم'],
            frequency: '10 dk',
            price: '7 TL',
            color: '#3b82f6'
        },
        {
            id: '2',
            name_tr: '2. Güzergah',
            name_ar: 'الخط 2',
            route_tr: 'Söğütlüdere → Çarşı → Otogar → Hastane → Üniversite → Oylum',
            route_ar: 'سوغوتلوديره → السوق → محطة الحافلات → المستشفى → الجامعة → أويلوم',
            stops_tr: ['Söğütlüdere', 'Beşevler', 'Çarşı', 'Otogar', 'Hastane', 'Üniversite', 'TOKİ', 'Oylum'],
            stops_ar: ['سوغوتلوديره', 'بشيفلر', 'سوق', 'محطة', 'مستشفى', 'جامعة', 'توكي', 'أويلوم'],
            frequency: '10 dk',
            price: '7 TL',
            color: '#10b981'
        }
    ];

    const transportOptions = [
        {
            icon: <Bus size={32} />,
            title_tr: 'Şehir İçi Dolmuşlar',
            title_ar: 'الحافلات الصغيرة',
            desc_tr: 'En yaygın ulaşım şekli, her 10 dakikada bir sefer',
            desc_ar: 'وسيلة النقل الأكثر شيوعاً، كل 10 دقائق',
            price: '₺7',
            color: '#3b82f6'
        },
        {
            icon: <CreditCard size={32} />,
            title_tr: 'Kart79 Ulaşım Kartı',
            title_ar: 'بطاقة كارت79',
            desc_tr: 'Temassız akıllı kart ile hızlı ve ekonomik ulaşım',
            desc_ar: 'النقل السريع والاقتصادي ببطاقة ذكية',
            price: '%10 İndirim',
            color: '#f59e0b'
        },
        {
            icon: <MapPin size={32} />,
            title_tr: 'Kampüs Servisleri',
            title_ar: 'حافلات الحرم الجامعي',
            desc_tr: 'Karataş ve Mercidabık kampüslerine ücretsiz servis',
            desc_ar: 'خدمة مجانية إلى حرم كاراتاش ومرجدابق',
            price: 'Ücretsiz',
            color: '#10b981'
        }
    ];

    const tips = [
        {
            title_tr: 'Kart79 Kullan',
            title_ar: 'استخدم كارت79',
            desc_tr: 'Ulaşım kartı kullanarak %10 tasarruf edin',
            desc_ar: 'وفر 10% باستخدام بطاقة النقل'
        },
        {
            title_tr: 'Yürüyüş Mesafesi',
            title_ar: 'مسافة المشي',
            desc_tr: 'Merkez kampüs şehir merkezine 2-3 km, yürünebilir',
            desc_ar: 'الحرم المركزي 2-3 كم من المركز، يمكن المشي'
        },
        {
            title_tr: 'Servis Saatleri',
            title_ar: 'ساعات الخدمة',
            desc_tr: 'Kampüs servisleri sabah 08:00-17:00 arası çalışıyor',
            desc_ar: 'حافلات الحرم تعمل من 08:00-17:00 صباحاً'
        }
    ];

    return (
        <div className="life-page container">
            <header className="page-header animate-slide-up">
                <h1>{language === 'tr' ? 'Ulaşım' : 'المواصلات'}</h1>
                <p>{language === 'tr'
                    ? 'Kilis\'te şehir içi ulaşım ve dolmuş hatları bilgisi'
                    : 'معلومات النقل داخل المدينة وخطوط الحافلات في كيليس'}</p>
            </header>

            <div className="life-hero-img-wrapper animate-fade-in">
                <img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1200" alt="Kilis Ulaşım" className="life-hero-img" />
            </div>

            {/* Transport Options */}
            <section className="transport-options">
                <div className="options-grid">
                    {transportOptions.map((option, idx) => (
                        <div key={idx} className="option-card glass animate-scale" style={{ animationDelay: `${idx * 0.1}s` }}>
                            <div className="option-icon" style={{ background: option.color }}>
                                {option.icon}
                            </div>
                            <div className="option-info-content">
                                <h3>{language === 'tr' ? option.title_tr : option.title_ar}</h3>
                                <p>{language === 'tr' ? option.desc_tr : option.desc_ar}</p>
                                <div className="option-price">{option.price}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Routes */}
            <section className="routes-section">
                <h2 className="section-title">{language === 'tr' ? 'Dolmuş Güzergahları' : 'خطوط الحافلات'}</h2>
                <div className="routes-grid">
                    {routes.map((route, idx) => (
                        <div key={route.id} className="route-card card animate-fade-up" style={{ animationDelay: `${idx * 0.15}s` }}>
                            <div className="route-header" style={{ borderLeftColor: route.color }}>
                                <div className="route-icon" style={{ background: route.color }}>
                                    <Bus size={24} />
                                </div>
                                <div>
                                    <h3>{language === 'tr' ? route.name_tr : route.name_ar}</h3>
                                    <p className="route-path">{language === 'tr' ? route.route_tr : route.route_ar}</p>
                                </div>
                            </div>

                            <div className="route-stops">
                                {(language === 'tr' ? route.stops_tr : route.stops_ar).map((stop, i) => (
                                    <div key={i} className="stop">
                                        <div className="stop-dot" style={{ background: route.color }}></div>
                                        <span>{stop}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="route-info">
                                <div className="info-item">
                                    <Clock size={16} />
                                    <span>{route.frequency}</span>
                                </div>
                                <div className="info-item">
                                    <TrendingUp size={16} />
                                    <span>{route.price}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Tips */}
            <section className="tips-section">
                <h2 className="section-title">{language === 'tr' ? 'Ulaşım İpuçları' : 'نصائح النقل'}</h2>
                <div className="tips-grid">
                    {tips.map((tip, idx) => (
                        <div key={idx} className="tip-card info-card glass animate-scale" style={{ animationDelay: `${idx * 0.1 + 0.3}s` }}>
                            <Info size={20} />
                            <div>
                                <h4>{language === 'tr' ? tip.title_tr : tip.title_ar}</h4>
                                <p>{language === 'tr' ? tip.desc_tr : tip.desc_ar}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Google AdSense */}
            <div className="ad-placeholder ad-banner" style={{ marginTop: '3rem' }}>
                <span>Google AdSense - Banner (728x90)</span>
            </div>
        </div>
    );
};

export default Ulasim;

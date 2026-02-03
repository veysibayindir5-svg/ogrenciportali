import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
    MapPin,
    ShoppingBag,
    Clock,
    Star,
    TrendingUp
} from 'lucide-react';
import './StudentLife.css';

const UcuzYerler: React.FC = () => {
    const { language } = useLanguage();

    const places = [
        {
            id: '1',
            name_tr: 'Palmiye Cafe',
            name_ar: 'كافيه بالميه',
            category_tr: 'Kafe & Pastane',
            category_ar: 'كافيه ومعجنات',
            desc_tr: 'Kahvaltı, pasta ve fast food çeşitleri sunan öğrenci dostu mekan',
            desc_ar: 'مكان صديق للطلاب يقدم الإفطار والمعجنات والوجبات السريعة',
            price: '₺₺',
            hours: '07:00 - 23:00',
            location: 'https://maps.google.com/?q=36.717,37.121',
            rating: 4.5,
            image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800',
            features_tr: ['Kahvaltı', 'Pasta', 'Wi-Fi'],
            features_ar: ['فطور', 'كعك', 'واي فاي']
        },
        {
            id: '2',
            name_tr: 'Şirinler Köy Evi',
            name_ar: 'منزل شيرينلر القروي',
            category_tr: 'Ev Yemekleri',
            category_ar: 'أطعمة منزلية',
            desc_tr: 'Zengin kahvaltılar ve ev yapımı gözleme, mantı',
            desc_ar: 'إفطار غني وجوزلمه ومانتي محلية الصنع',
            price: '₺₺',
            hours: '08:00 - 22:00',
            location: 'https://maps.google.com/?q=36.718,37.120',
            rating: 4.7,
            image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800',
            features_tr: ['Kahvaltı', 'Gözleme', 'Mantı'],
            features_ar: ['فطور', 'جوزلمه', 'مانتي']
        },
        {
            id: '3',
            name_tr: 'Eski Hammam Restoran',
            name_ar: 'مطعم الحمام القديم',
            category_tr: 'Yöresel Lezzetler',
            category_ar: 'نكهات محلية',
            desc_tr: 'Tarihi hammamda Kilis kebabı, içli köfte ve lahmacun',
            desc_ar: 'كباب كيليس وكفته محشوة ولحم بعجين في حمام تاريخي',
            price: '₺₺',
            hours: '11:00 - 23:00',
            location: 'https://maps.google.com/?q=36.716,37.119',
            rating: 4.8,
            image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800',
            features_tr: ['Kilis Kebabı', 'İçli Köfte', 'Lahmacun'],
            features_ar: ['كباب كيليس', 'كفتة محشوة', 'لحم بعجين']
        },
        {
            id: '4',
            name_tr: 'Yaren Taş Mekanlar',
            name_ar: 'يارين الحجري',
            category_tr: 'Kebap & Kahvaltı',
            category_ar: 'كباب وفطور',
            desc_tr: 'Kilis kebabı ve geleneksel kahvaltı ile ünlü',
            desc_ar: 'مشهور بكباب كيليس والإفطار التقليدي',
            price: '₺₺',
            hours: '06:30 - 00:00',
            location: 'https://maps.google.com/?q=36.719,37.122',
            rating: 4.6,
            image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&q=80&w=800',
            features_tr: ['Kebap', 'Kahvaltı', 'Tatlı'],
            features_ar: ['كباب', 'فطور', 'حلويات']
        },
        {
            id: '5',
            name_tr: 'Mado Kilis',
            name_ar: 'مادو كيليس',
            category_tr: 'Dondurma & Tatlı',
            category_ar: 'آيس كريم وحلويات',
            desc_tr: 'Dondurma, waffle ve tatlı çeşitleri',
            desc_ar: 'آيس كريم ووافل وحلويات متنوعة',
            price: '₺',
            hours: '10:00 - 23:00',
            location: 'https://maps.google.com/?q=36.717,37.120',
            rating: 4.4,
            image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=800',
            features_tr: ['Dondurma', 'Waffle', 'Tatlı'],
            features_ar: ['آيس كريم', 'وافل', 'حلويات']
        },
        {
            id: '6',
            name_tr: 'Coffee Time',
            name_ar: 'كوفي تايم',
            category_tr: 'Kafe',
            category_ar: 'كافيه',
            desc_tr: 'Modern kafe ortamında kahve ve tatlı keyfi',
            desc_ar: 'قهوة وحلويات في بيئة كافيه حديثة',
            price: '₺',
            hours: '08:00 - 23:00',
            location: 'https://maps.google.com/?q=36.718,37.121',
            rating: 4.3,
            image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=800',
            features_tr: ['Kahve', 'Wi-Fi', 'Çalışma Alanı'],
            features_ar: ['قهوة', 'واي فاي', 'منطقة دراسة']
        }
    ];

    const tips = [
        {
            icon: <TrendingUp size={24} />,
            title_tr: 'Öğrenci İndirimleri',
            title_ar: 'خصومات الطلاب',
            desc_tr: 'Birçok mekan öğrenci kartıyla %10-15 indirim sunuyor',
            desc_ar: 'العديد من الأماكن تقدم خصم 10-15% ببطاقة الطالب'
        },
        {
            icon: <Clock size={24} />,
            title_tr: 'Sabah Menüleri',
            title_ar: 'قوائم الصباح',
            desc_tr: 'Sabah saatlerinde kahvaltı menüle daha uygun fiyatlı',
            desc_ar: 'قوائم الإفطار صباحاً أكثر اقتصادية'
        },
        {
            icon: <ShoppingBag size={24} />,
            title_tr: 'Paket Servis',
            title_ar: 'خدمة التوصيل',
            desc_tr: 'Paket servisle hem ucuz hem pratik yemek',
            desc_ar: 'وجبات رخيصة وعملية مع خدمة التوصيل'
        }
    ];

    return (
        <div className="life-page container">
            <header className="page-header animate-slide-up">
                <h1>{language === 'tr' ? 'Ucuz Yerler' : 'أماكن رخيصة'}</h1>
                <p>{language === 'tr'
                    ? 'Öğrenci bütçesine uygun, lezzetli ve kaliteli mekanlar'
                    : 'أماكن لذيذة وعالية الجودة تناسب ميزانية الطلاب'}</p>
            </header>

            {/* Tips Section */}
            <section className="tips-section">
                <div className="tips-grid">
                    {tips.map((tip, idx) => (
                        <div key={idx} className="tip-card glass animate-scale" style={{ animationDelay: `${idx * 0.1}s` }}>
                            <div className="tip-icon">{tip.icon}</div>
                            <h3>{language === 'tr' ? tip.title_tr : tip.title_ar}</h3>
                            <p>{language === 'tr' ? tip.desc_tr : tip.desc_ar}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Places Grid */}
            <div className="life-grid">
                {places.map((place, idx) => (
                    <div key={place.id} className="card life-card animate-fade-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                        <div className="card-image">
                            <img src={place.image} alt={language === 'tr' ? place.name_tr : place.name_ar} loading="lazy" />
                            <div className="category-badge">{language === 'tr' ? place.category_tr : place.category_ar}</div>
                            <div className="price-badge">{place.price}</div>
                        </div>
                        <div className="card-content">
                            <div className="place-header">
                                <h3>{language === 'tr' ? place.name_tr : place.name_ar}</h3>
                                <div className="rating">
                                    <Star size={16} fill="currentColor" />
                                    <span>{place.rating}</span>
                                </div>
                            </div>
                            <p className="description">{language === 'tr' ? place.desc_tr : place.desc_ar}</p>

                            <div className="features">
                                {(language === 'tr' ? place.features_tr : place.features_ar).map((feature, i) => (
                                    <span key={i} className="feature-tag">{feature}</span>
                                ))}
                            </div>

                            <div className="info-row">
                                <Clock size={16} />
                                <span>{place.hours}</span>
                            </div>

                            <div className="card-actions">
                                <a href={place.location} target="_blank" rel="noreferrer" className="btn btn-primary">
                                    <MapPin size={18} />
                                    {language === 'tr' ? 'Konumu Gör' : 'عرض الموقع'}
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Google AdSense */}
            <div className="ad-placeholder ad-banner" style={{ marginTop: '3rem' }}>
                <span>Google AdSense - Banner (728x90)</span>
            </div>
        </div>
    );
};

export default UcuzYerler;

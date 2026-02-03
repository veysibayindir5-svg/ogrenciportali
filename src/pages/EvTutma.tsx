import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Home, ShieldCheck, CreditCard } from 'lucide-react';

const EvTutma: React.FC = () => {
    const { language, t } = useLanguage();

    const neighborhoods = [
        {
            name: language === 'tr' ? 'Ekrem Çetin Mahallesi' : 'حي أكرم شيتين',
            desc: language === 'tr' ? 'Yeni yapılar, geniş parklar ve üniversiteye yakınlığı ile en popüler bölge.' : 'أكثر المناطق شهرة بمبانيها الجديدة ومنتزهاتها الواسعة وقربها من الجامعة.',
            image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800'
        },
        {
            name: language === 'tr' ? 'Cumhuriyet Mahallesi' : 'حي الجمهورية',
            desc: language === 'tr' ? 'Şehir merkezine yakın, daha yerleşik ve sosyal imkanları yüksek bir mahalle.' : 'حي قريب من وسط المدينة، أكثر استقرارا وتتوفر فيه مرافق اجتماعية عالية.',
            image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800'
        },
        {
            name: language === 'tr' ? 'Beşevler Bölgesi' : 'منطقة بياشيفلير',
            desc: language === 'tr' ? 'Öğrenci evlerinin yoğun olduğu, kampüs girişine en yakın konumlardan biri.' : 'إحدى أقرب المناطق لمدخل الحرم الجامعي، حيث تكثر بيوت الطلاب.',
            image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=800'
        }
    ];

    return (
        <div className="life-page container">
            <header className="page-header">
                <h1>{t('housing')}</h1>
                <p>{language === 'tr' ? 'Kilis\'te ev tutarken dikkat etmeniz gerekenler ve mahalle önerileri.' : 'أشياء يجب الانتباه إليها عند استئجار منزل في كيليس وتوصيات الأحياء.'}</p>
            </header>

            <div className="dept-grid">
                <aside className="dept-sidebar glass">
                    <div className="sidebar-section">
                        <h4><ShieldCheck size={20} /> {language === 'tr' ? 'Güvenlik İpuçları' : 'نصائح السلامة'}</h4>
                        <p>{language === 'tr' ? 'Kiraladığınız evin deprem yönetmeliğine uygunluğunu ve sözleşme detaylarını kontrol edin.' : 'تحقق من امتثال المنزل الذي استأجرته للوائح الزلزال وتفاصيل العقد.'}</p>
                    </div>
                    <div className="sidebar-section">
                        <h4><CreditCard size={20} /> {language === 'tr' ? 'Ortalama Kiralar' : 'متوسط الإيجارات'}</h4>
                        <p>{language === 'tr' ? '1+1 daireler 8.000 - 12.000 TL, 2+1 daireler 12.000 - 16.000 TL bandındadır.' : 'تتراوح أسعار الشقق 1+1 بين 8000 - 12000 ليرة، و2+1 بين 12000 - 16000 ليرة.'}</p>
                    </div>
                </aside>

                <main className="dept-main">
                    <div className="neighborhoods-grid">
                        {neighborhoods.map((n, i) => (
                            <section key={i} className="card neighborhood-card">
                                <img src={n.image} alt={n.name} className="neighborhood-img" />
                                <div className="card-content">
                                    <h3>{n.name}</h3>
                                    <p>{n.desc}</p>
                                </div>
                            </section>
                        ))}
                    </div>

                    <section className="info-card highlighted">
                        <div className="icon-circle"><Home /></div>
                        <h3>{language === 'tr' ? 'Önemli Tavsiye' : 'نصيحة مهمة'}</h3>
                        <p>{language === 'tr' ? 'Evi tutmadan önce mutlaka ulaşım hatlarını (Kart79 durakları) kontrol edin.' : 'قبل استئجار المنزل، تأكد من مراجعة خطوط المواصلات (مواقف Kart79).'}</p>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default EvTutma;

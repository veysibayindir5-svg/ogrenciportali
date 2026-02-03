import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Clock } from 'lucide-react';

const Acil: React.FC = () => {
    const { language, t } = useLanguage();

    const numbers = [
        { name: '112', desc: language === 'tr' ? 'Tek Acil Çağrı (Polis, Ambulans, İtfaiye)' : 'مكالمة طوارئ واحدة (شرطة، إسعاف، إطفاء)' },
        { name: '153', desc: language === 'tr' ? 'Alo Zabıta / Beyaz Masa' : 'الشرطة البلدية / المكتب الأبيض' },
        { name: '182', desc: language === 'tr' ? 'MHRS (Hastane Randevu)' : 'MHRS (موعد المستشفى)' },
        { name: '175', desc: language === 'tr' ? 'Tüketici Danışma' : 'استشارات المستهلك' },
        { name: '444 79 79', desc: language === 'tr' ? 'Kilis 7 Aralık Üniversitesi' : 'جامعة كيليس 7 أراليك' },
    ];

    return (
        <div className="life-page container">
            <header className="page-header">
                <h1>{t('emergency')}</h1>
                <p>{language === 'tr' ? 'Nöbetçi eczaneler, hastaneler ve acil numaralar.' : 'صيدليات المناوبة والمستشفيات وأرقام الطوارئ.'}</p>
            </header>

            <div className="life-grid">
                <div className="card info-card">
                    <div className="card-content">
                        <h3>{language === 'tr' ? 'Nöbetçi Eczaneler' : 'صيدليات المناوبة'}</h3>
                        <p>{language === 'tr' ? 'Bugün Kilis\'te açık olan eczaneleri görün.' : 'شاهد الصيدليات المفتوحة اليوم في كيليس.'}</p>
                        <a href="https://www.eczaneler.gen.tr/nobetci-kilis" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                            <Clock size={18} /> {language === 'tr' ? 'Eczaneleri Gör' : 'مشاهدة الصيدليات'}
                        </a>
                    </div>
                </div>

                <div className="card info-card">
                    <div className="card-content">
                        <h3>{language === 'tr' ? 'Acil Numaralar' : 'أرقام الطوارئ'}</h3>
                        <div className="numbers-list" style={{ marginTop: '1rem' }}>
                            {numbers.map(n => (
                                <div key={n.name} className="info-row" style={{ justifyContent: 'space-between', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>
                                    <span style={{ fontWeight: 800, fontSize: '1.2rem' }}>{n.name}</span>
                                    <span>{n.desc}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Acil;

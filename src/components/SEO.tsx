import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useLocation } from 'react-router-dom';

const SEO: React.FC = () => {
    const { language, t } = useLanguage();
    const location = useLocation();

    useEffect(() => {
        const title = t('title');
        document.title = title;

        const path = location.pathname;

        // Meta description based on page
        const getMetaDescription = () => {
            if (path === '/') return language === 'tr'
                ? "Kilis'te öğrenci hayatına dair her şey: Bölümler, yurtlar, kampüs çevresi, ucuz yerler, ulaşım rehberi ve daha fazlası. | كل ما يخص حياة الطلاب في كيليس"
                : "كل ما يخص حياة الطلاب في كيليس: الأقسام، السكن، الحرم الجامعي، الأماكن الرخيصة، دليل المواصلات والمزيد.";
            if (path.startsWith('/bolumler')) return language === 'tr'
                ? "Kilis 7 Aralık Üniversitesi'ndeki tüm bölümler, fakülteler ve yüksekokullar hakkında detaylı bilgi, taban puanları ve akademik detaylar."
                : "معلومات تفصيلية حول جميع الأقسام والكليات والمعاهد في جامعة كيليس 7 أراليك، درجات القبول والتفاصيل الأكاديمية.";
            if (path === '/yurtlar') return language === 'tr'
                ? "Kilis'teki KYK yurtları, özel öğrenci yurtları, pansiyonlar ve apartlar hakkında bilgiler, fiyatlar ve konumlar."
                : "معلومات حول سكن KYK الحكومي، السكن الطلابي الخاص، البنسيونات والشقق في كيليس، الأسعار والمواقع.";
            if (path === '/kampus-cevresi') return language === 'tr'
                ? "Kilis 7 Aralık Üniversitesi kampüs çevresi, kafeler, kütüphane, spor tesisleri ve sosyal yaşam alanları."
                : "محيط الحرم الجامعي لجامعة كيليس 7 أراليك، المقاهي، المكتبة، المرافق الرياضية ومناطق الحياة الاجتماعية.";
            if (path === '/ucuz-yerler') return language === 'tr'
                ? "Kilis'te öğrenci bütçesine uygun yemek yerleri, alışveriş noktaları ve ekonomik aktivite önerileri."
                : "أماكن الطعام المناسبة لميزانية الطلاب في كيليس، نقاط التسوق ومقترحات الأنشطة الاقتصادية.";
            if (path === '/ulasim') return language === 'tr'
                ? "Kilis şehir içi ulaşım, dolmuş hatları, otogardan kampüse ulaşım ve şehirler arası seyahat rehberi."
                : "المواصلات الداخلية في كيليس، خطوط الحافلات الصغيرة، الوصول من الكراج إلى الحرم الجامعي ودليل السفر بين المدن.";
            if (path === '/ev-tutma') return language === 'tr'
                ? "Kilis'te kiralık ev arama süreci, öğrenci mahalleleri, kira fiyatları ve dikkat edilmesi gerekenler."
                : "عملية البحث عن منازل للاستئجار في كيليس، أحياء الطلاب، أسعار الإيجار والأمور التي يجب الانتباه إليها.";
            if (path === '/acil') return language === 'tr'
                ? "Kilis'teki hastaneler, eczaneler, polis ve jandarma gibi acil durum numaraları ve konumları."
                : "المستشفيات في كيليس، الصيدليات، أرقام الطوارئ مثل الشرطة والدرك ومواقعها.";
            if (path === '/blog') return language === 'tr'
                ? "Kilis öğrenci rehberi, güncel haberler, etkinlikler ve öğrenci yaşamına dair ipuçları."
                : "دليل طلاب كيليس، الأخبار الحالية، الفعاليات ونصائح حول حياة الطلاب.";

            return language === 'tr'
                ? "Kilis öğrenci portalı - Öğrenci hayatına dair kapsamlı rehber"
                : "بوابة طلاب كيليس - دليل شامل لحياة الطلاب";
        };

        // Meta keywords based on page
        const getMetaKeywords = () => {
            const commonKeywords = "Kilis, Kilis 7 Aralık Üniversitesi, öğrenci, üniversite, rehber, كيليس, جامعة كيليس, طلاب";
            if (path === '/') return `${commonKeywords}, öğrenci portalı, kampüs, yurtlar, bölümler, حياة الطلاب`;
            if (path.startsWith('/bolumler')) return `${commonKeywords}, bölümler, fakülteler, taban puanları, mühendislik, ilahiyat, أقسام, كليات`;
            if (path === '/yurtlar') return `${commonKeywords}, KYK yurdu, özel yurtlar, barınma, pansiyon, apartlar, سكن طلاب`;
            if (path === '/kampus-cevresi') return `${commonKeywords}, kampüs yaşamı, kütüphane, sosyal tesisler, kafeler, محيط الجامعة`;
            if (path === '/ucuz-yerler') return `${commonKeywords}, ucuz yemek, ekonomik, öğrenci dostu, alışveriş, أماكن رخيصة`;
            if (path === '/ulasim') return `${commonKeywords}, dolmuş, otogar, ulaşım rehberi, bilet, مواصلات`;
            if (path === '/ev-tutma') return `${commonKeywords}, kiralık daire, eşyalı ev, öğrenci mahallesi, emlak, بيوت للايجار`;
            if (path === '/acil') return `${commonKeywords}, hastane, nöbetçi eczane, emniyet, yardım, طوارئ`;
            if (path === '/blog') return `${commonKeywords}, haberler, rehber yazıları, güncel, blog, مدونة`;

            return commonKeywords;
        };

        // Update meta description
        let metaDesc = document.querySelector('meta[name="description"]');
        if (!metaDesc) {
            metaDesc = document.createElement('meta');
            metaDesc.setAttribute('name', 'description');
            document.head.appendChild(metaDesc);
        }
        metaDesc.setAttribute('content', getMetaDescription());

        // Update meta keywords
        let metaKeywords = document.querySelector('meta[name="keywords"]');
        if (!metaKeywords) {
            metaKeywords = document.createElement('meta');
            metaKeywords.setAttribute('name', 'keywords');
            document.head.appendChild(metaKeywords);
        }
        metaKeywords.setAttribute('content', getMetaKeywords());

        // Canonical link
        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.setAttribute('rel', 'canonical');
            document.head.appendChild(canonical);
        }
        canonical.setAttribute('href', `https://kilisogrenciportali.com.tr${location.pathname}`);

        // Open Graph tags
        const setOgTag = (property: string, content: string) => {
            let tag = document.querySelector(`meta[property="${property}"]`);
            if (!tag) {
                tag = document.createElement('meta');
                tag.setAttribute('property', property);
                document.head.appendChild(tag);
            }
            tag.setAttribute('content', content);
        };

        setOgTag('og:title', title);
        setOgTag('og:description', getMetaDescription());
        setOgTag('og:url', `https://kilisogrenciportali.com.tr${location.pathname}`);
        setOgTag('og:locale', language === 'tr' ? 'tr_TR' : 'ar_SY');

        // Hreflang tags
        const setHreflang = (lang: string, href: string) => {
            let link = document.querySelector(`link[hreflang="${lang}"]`);
            if (!link) {
                link = document.createElement('link');
                link.setAttribute('rel', 'alternate');
                link.setAttribute('hreflang', lang);
                document.head.appendChild(link);
            }
            link.setAttribute('href', href);
        };

        setHreflang('tr', `https://kilisogrenciportali.com.tr${location.pathname}`);
        setHreflang('ar-SY', `https://kilisogrenciportali.com.tr${location.pathname}`);
        setHreflang('x-default', `https://kilisogrenciportali.com.tr${location.pathname}`);

        // Breadcrumb Schema.org for all internal pages
        if (location.pathname !== '/') {
            const breadcrumbSchema = {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": language === 'tr' ? "Ana Sayfa" : "الصفحة الرئيسية",
                        "item": "https://kilisogrenciportali.com.tr/"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": document.title,
                        "item": `https://kilisogrenciportali.com.tr${location.pathname}`
                    }
                ]
            };

            let breadcrumbScript = document.querySelector('#breadcrumb-schema');
            if (!breadcrumbScript) {
                breadcrumbScript = document.createElement('script');
                breadcrumbScript.setAttribute('type', 'application/ld+json');
                breadcrumbScript.id = 'breadcrumb-schema';
                document.head.appendChild(breadcrumbScript);
            }
            breadcrumbScript.textContent = JSON.stringify(breadcrumbSchema);
        }
    }, [language, location, t]);

    return null;
};

export default SEO;


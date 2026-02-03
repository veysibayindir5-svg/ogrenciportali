import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useLocation } from 'react-router-dom';

const SEO: React.FC = () => {
    const { language, t } = useLanguage();
    const location = useLocation();

    useEffect(() => {
        const title = t('title');
        document.title = title;

        // Meta description based on page
        const getMetaDescription = () => {
            const path = location.pathname;
            if (path === '/') return language === 'tr'
                ? "Kilis'te öğrenci hayatına dair her şey: Bölümler, yurtlar, kampüs çevresi, ucuz yerler ve daha fazlası."
                : "كل ما يخص حياة الطلاب في كيليس: الأقسام، السكن، الحرم الجامعي والمزيد.";
            if (path.startsWith('/bolumler')) return language === 'tr'
                ? "Kilis 7 Aralık Üniversitesi'ndeki tüm bölümler ve fakülteler hakkında detaylı bilgi."
                : "معلومات تفصيلية حول جميع الأقسام والكليات في جامعة كيليس 7 أراليك.";
            if (path === '/yurtlar') return language === 'tr'
                ? "Kilis'teki KYK ve özel yurtlar hakkında bilgi, fiyatlar ve iletişim."
                : "معلومات حول السكن الجامعي الحكومي والخاص في كيليس والأسعار والتواصل.";
            if (path === '/blog') return language === 'tr'
                ? "Kilis'te öğrenci hayatı, barınma, ulaşım ve daha fazlası hakkında rehber yazıları."
                : "مقالات إرشادية حول حياة الطلاب في كيليس والإقامة والنقل والمزيد.";
            return language === 'tr'
                ? "Kilis öğrenci portalı - Öğrenci hayatına dair kapsamlı rehber"
                : "بوابة طلاب كيليس - دليل شامل لحياة الطلاب";
        };

        // Update meta description
        let metaDesc = document.querySelector('meta[name="description"]');
        if (!metaDesc) {
            metaDesc = document.createElement('meta');
            metaDesc.setAttribute('name', 'description');
            document.head.appendChild(metaDesc);
        }
        metaDesc.setAttribute('content', getMetaDescription());

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

        // Breadcrumb Schema.org for department pages
        if (location.pathname.startsWith('/bolumler/') && location.pathname !== '/bolumler') {
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
                        "name": language === 'tr' ? "Bölümler" : "الأقسام",
                        "item": "https://kilisogrenciportali.com.tr/bolumler"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
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

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import blogData from '../data/blog.json';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Blog.css';

const Blog: React.FC = () => {
    const { language, t } = useLanguage();

    return (
        <div className="blog-page container">
            <header className="page-header">
                <h1>{t('blog')}</h1>
                <p>{language === 'tr' ? 'Kilis rehberleri, haberler ve öğrenci hikayeleri.' : 'أدلة كيليس والأخبار وقصص الطلاب.'}</p>
            </header>

            <div className="blog-grid">
                {blogData.map(post => (
                    <Link to={`/blog/${post.slug}`} key={post.id} className="card blog-card">
                        <div className="card-image">
                            <img
                                src={post.image}
                                alt={language === 'tr' ? post.title_tr : post.title_ar}
                                loading="lazy"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&q=80&w=1200';
                                }}
                            />
                        </div>
                        <div className="card-content">
                            <div className="post-meta">
                                <span><Calendar size={14} /> {post.date}</span>
                                <span><User size={14} /> Admin</span>
                            </div>
                            <h3>{language === 'tr' ? post.title_tr : post.title_ar}</h3>
                            <p>{language === 'tr' ? post.summary_tr : post.summary_ar}</p>
                            <div className="card-footer">
                                <span className="btn-text">
                                    {t('read_more')} <ArrowRight size={16} />
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Google AdSense */}
            <div className="ad-placeholder ad-banner" style={{ marginTop: '3rem' }}>
                <span>Google AdSense - Banner (728x90)</span>
            </div>
        </div>
    );
};

export default Blog;

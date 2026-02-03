import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import blogData from '../data/blog.json';
import { Calendar, User, ArrowLeft, Tag, Clock } from 'lucide-react';
import './Blog.css';

const BlogDetail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const { language } = useLanguage();

    const post = blogData.find(p => p.slug === slug);

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    return (
        <div className="blog-detail-page container">
            <Link to="/blog" className="back-link">
                <ArrowLeft size={20} />
                {language === 'tr' ? 'Blog\'a Dön' : 'العودة إلى المدونة'}
            </Link>

            <article className="blog-post glass">
                <div className="post-header">
                    <div className="post-meta-top">
                        <span className="badge">{language === 'tr' ? 'Rehber' : 'دليل'}</span>
                        <span className="read-time">
                            <Clock size={16} />
                            {language === 'tr' ? post.reading_time_tr : post.reading_time_ar}
                        </span>
                    </div>

                    <h1>{language === 'tr' ? post.title_tr : post.title_ar}</h1>

                    <div className="post-meta">
                        <span><Calendar size={16} /> {post.date}</span>
                        <span><User size={16} /> {language === 'tr' ? post.author_tr : post.author_ar}</span>
                    </div>
                </div>

                <div className="post-image">
                    <img
                        src={post.image}
                        alt={language === 'tr' ? post.title_tr : post.title_ar}
                        onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = 'https://images.unsplash.com/photo-1523050335456-c38a89b7ed28?auto=format&fit=crop&q=80&w=1200'; // Fallback
                        }}
                    />
                </div>

                <div className="post-content">
                    <div className="markdown-content">
                        {(language === 'tr' ? post.content_tr : post.content_ar).split('\n').map((paragraph, idx) => {
                            if (paragraph.startsWith('## ')) {
                                return <h2 key={idx}>{paragraph.replace('## ', '')}</h2>;
                            }
                            if (paragraph.startsWith('- ')) {
                                return <li key={idx}>{paragraph.replace('- ', '')}</li>;
                            }
                            if (!paragraph.trim()) return <br key={idx} />;
                            return <p key={idx}>{paragraph}</p>;
                        })}
                    </div>
                </div>

                <div className="post-tags">
                    <Tag size={18} />
                    {(language === 'tr' ? post.tags_tr : post.tags_ar).map(tag => (
                        <span key={tag} className="tag">#{tag}</span>
                    ))}
                </div>
            </article>
        </div>
    );
};

export default BlogDetail;

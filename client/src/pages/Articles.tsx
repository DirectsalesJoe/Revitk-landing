import React from 'react';
import { Link } from 'wouter';

import { ArrowRight, Clock, Calendar, User } from 'lucide-react';
import { NavBar, Footer } from '@/components/NavBar';
import { BUTTON, Card, T } from '@/components/brand/ui';

const articles = [
  {
    id: 'building-a-sales-process',
    title: 'How to Build a Sales Process That Closes One in Two Prospects',
    description: 'A deep dive into the 5-stage framework that took a sales team from zero to £1.2M a month.',
    date: 'March 1, 2026',
    readTime: '9 min read',
    author: 'Joe Milnes',
    image: 'https://img.youtube.com/vi/r1wea1evlgk/maxresdefault.jpg',
  }
];

const Articles: React.FC = () => {
  return (
    <div className="min-h-screen bg-ss-ink text-white">


      <NavBar />

      <main className="pt-16 md:pt-24 pb-20 md:pb-24 px-6 max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16 text-center">
          <h1 className={`${T.h1} mb-6`}>Sales Strategy Articles</h1>
          <p className={`${T.lead} max-w-2xl mx-auto`}>
            Advanced frameworks and playbooks for founders building high-performance sales systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {articles.map((article) => (
            <Card key={article.id} className="overflow-hidden group flex flex-col">
              <div className="aspect-video overflow-hidden bg-black">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-ss-muted-paper mb-3">
                  <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-ss-biro" /> {article.date}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-ss-biro" /> {article.readTime}</span>
                </div>
                <div className={`${T.cardH3} mb-3 leading-tight group-hover:text-ss-biro transition-colors`}>
                  {article.title}
                </div>
                <div className={`${T.cardBody} line-clamp-3 mb-6`}>
                  {article.description}
                </div>
                <Link to={`/articles/${article.id}`} className={`${BUTTON} w-full`}>
                  Read Article <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Articles;

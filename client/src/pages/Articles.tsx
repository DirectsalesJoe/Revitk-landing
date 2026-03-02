import React from 'react';
import { Link } from 'wouter';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ArrowRight, Clock, Calendar, User } from 'lucide-react';
import { NavBar } from './NewHome';
import { Footer } from './NewHome';

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
    <div className="min-h-screen bg-[#0F1923] text-[#F5F0EB] font-sans">


      <NavBar />

      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-serif mb-6 text-white">Sales Strategy Articles</h1>
          <p className="text-xl text-[#F5F0EB]/70 max-w-2xl mx-auto">
            Advanced frameworks and playbooks for founders building high-performance sales systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Card key={article.id} className="bg-[#16222E] border-[#C5A572]/20 hover:border-[#C5A572]/50 transition-all duration-300 overflow-hidden group">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardHeader className="p-6">
                <div className="flex items-center gap-4 text-sm text-[#C5A572] mb-3">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {article.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {article.readTime}</span>
                </div>
                <CardTitle className="text-2xl font-serif text-white mb-3 leading-tight group-hover:text-[#C5A572] transition-colors">
                  {article.title}
                </CardTitle>
                <CardDescription className="text-[#F5F0EB]/60 line-clamp-3 mb-6">
                  {article.description}
                </CardDescription>
                <Link to={`/articles/${article.id}`}>
                  <Button variant="outline" className="w-full border-[#C5A572] text-[#C5A572] hover:bg-[#C5A572] hover:text-[#0F1923] group">
                    Read Article <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardHeader>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Articles;

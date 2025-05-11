
import React from 'react';

interface NewsMarqueeProps {
  news: string[];
}

const NewsMarquee: React.FC<NewsMarqueeProps> = ({ news }) => {
  return (
    <div className="bg-primary text-white py-2 overflow-hidden">
      <div className="flex whitespace-nowrap animate-slide">
        {news.map((item, index) => (
          <React.Fragment key={index}>
            <span className="mx-4">{item}</span>
            <span className="mx-4">•</span>
          </React.Fragment>
        ))}
        {/* Duplicate news items to create seamless loop */}
        {news.map((item, index) => (
          <React.Fragment key={`dup-${index}`}>
            <span className="mx-4">{item}</span>
            <span className="mx-4">•</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default NewsMarquee;

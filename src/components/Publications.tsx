
import React from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Publication {
  title: string;
  journal: string;
  year: string;
  authors: string[];
  link: string;
  description: string;
}

const publications: Publication[] = [
  {
    title: "Do What You Say—Computing Personal Values Associated with Professions Based on the Words They Use",
    journal: "Algorithms",
    year: "2025",
    authors: ["Jha, A.", "Gloor, P.A."],
    link: "https://doi.org/10.3390/a18020072",
    description: "This paper explores the relationship between the language used by professionals and their underlying personal values, creating a framework to align career choices with personality traits."
  }
];

const Projects: React.FC = () => {
  return (
    <section id="publications" className="py-20 bg-portfolio-background">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Publications & Projects</h2>
        
        <div className="grid grid-cols-1 gap-12">
          {/* Publications */}
          <div className="animate-slide-up">
            <h3 className="flex items-center text-xl font-semibold text-portfolio-primary mb-4">
              <BookOpen className="h-5 w-5 mr-2" />
              Academic Publications
            </h3>
            
            <div className="space-y-6">
              {publications.map((pub, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="text-lg font-semibold text-portfolio-primary mb-2">
                    {pub.title}
                  </h4>
                  
                  <div className="flex flex-wrap items-center text-sm text-portfolio-muted mb-3 gap-x-2">
                    <span className="font-medium">{pub.journal}</span>
                    <span>•</span>
                    <span>{pub.year}</span>
                    <span>•</span>
                    <span>{pub.authors.join(", ")}</span>
                  </div>
                  
                  <p className="text-portfolio-text mb-4">
                    {pub.description}
                  </p>
                  
                  <a href={pub.link} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="mt-2 text-sm h-8">
                      View Publication <ExternalLink className="ml-2 h-3 w-3" />
                    </Button>
                  </a>
                </div>
              ))}
            </div>
          </div>
          
          {/* Projects */}
          <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-xl font-semibold text-portfolio-primary mb-4">Notable Projects</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h4 className="text-lg font-semibold text-portfolio-primary mb-2">
                  ChatScribe - Web Chat Application & PDF Chatbot
                </h4>
                <p className="text-sm text-portfolio-muted mb-3">May 2023</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Created room-based chat app for multiple users with JWT authentication and sharing of media and PDFs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Built a responsive UI with ReactJS and Bootstrap enabling real-time message updates for users via Node.js and Socket.IO</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Leveraged OpenAI and Elasticsearch to enable PDF text extraction, indexing, summary generation, and query handling</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h4 className="text-lg font-semibold text-portfolio-primary mb-2">
                  Social Media Analytics using Hawkes Process
                </h4>
                <p className="text-sm text-portfolio-muted mb-3">Term Project under Prof. Adway Mitra, Nov 2023</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Implemented Hawkes Intensity Process to predict the popularity of online videos based on daily shares and tweets</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Processed a dataset of over 81.9 million videos mentioned in 1.06 billion tweets, generating virality and maturity scores</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Created an endo-exo map, reducing errors by 28.6% compared to MLR, analyzing external promotion and content factors</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h4 className="text-lg font-semibold text-portfolio-primary mb-2">
                  Bitcoin Trading Strategy - Zelta Labs
                </h4>
                <p className="text-sm text-portfolio-muted mb-3">Jan 2024</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Implemented LSTM-GRU ensemble for Bitcoin forecasting from Jan 2018 to Jan 2022, frequencies of 6 hours to 3 minutes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Formulated a trading strategy with 400% returns using RSI, MACD, and ADX indicators, with stop-loss and take-profit</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Achieved a model with a Sharpe Ratio of 1.52, Risk-Reward Ratio of 1.13, and Max Drawdown of 3.67 after backtesting</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;


import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin,
  ExternalLink
} from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  link?: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "Agentic Intern",
    company: "Nethermind",
    location: "Remote",
    period: "Jan 2025 - Present",
    description: [
      "Built an AI agent in ElizaOS for theorem proving, integrating Lean 4 and LeanDojo for tactic generation and validation",
      "Implemented Google OAuth2 for authentication and integrated Apache Libcloud for cloud-agnostic workflow deployment",
      "Developed real-time log streaming system using Kafka, Flask-SocketIO, & MongoDB, enabling constant monitoring in UI"
    ],
    link: "https://nethermind.io/"
  },
  {
    title: "Quantitative Research Consultant",
    company: "WorldQuant LLC",
    location: "Remote",
    period: "Oct 2024 - Present",
    description: [
      "Developed 20+ trading alphas with Sharpe ratio > 1.25 and fitness > 1 using price action data across US & China markets",
      "Engineered 15+ trading criteria for portfolio optimization with turnover less than 70% across 5 years of market conditions"
    ],
    link: "https://www.worldquant.com/"
  },
  {
    title: "Backend Developer Intern - CX Division",
    company: "Piramal Capital and Housing Finance Ltd.",
    location: "Bangalore",
    period: "May 2024 - Jul 2024",
    description: [
      "Reduced API latency by 200%, implementing cache annotation library using Spring AOP and Redis, used as a dependency",
      "Deployed AWS custom caching service using Jenkins CI/CD with centralized and in-memory caching and data consistency",
      "Architected AWS service monitoring system using Boto3 and Lambda enabling health-checks and hierarchical visualization",
      "Applied 90% Fuzzy Match to resolve service name inconsistencies and provided alternate up dev environments information"
    ],
    link: "https://www.piramalfinance.com/"
  },
  {
    title: "Research Intern",
    company: "Massachusetts Institute of Technology",
    location: "Remote",
    period: "Dec 2023 - Jan 2025",
    description: [
      "Built a profession prediction model with 85% precision and 0.77 F1 score using BERT and Bi-LSTM for text classification",
      "Designed a personality-based framework ("Beeflow", "Antflow", and "Leechflow") to align careers with personality traits",
      "Transcribed 80,000 words from media & blogs with Whisper AI, applying clustering and SHAP for model interpretability"
    ],
    link: "https://www.mit.edu/"
  },
  {
    title: "Research Intern",
    company: "IIIT Hyderabad",
    location: "Remote",
    period: "May 2023 - Jul 2023",
    description: [
      "Conducted regret analysis and performance comparisons of Multiarm Bandit algorithms for Dynamic Pricing applications",
      "Optimized RL methods such as UCB and Thompson Sampling, researching on Gittin's Index in various bandit scenarios"
    ],
    link: "https://www.iiit.ac.in/"
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-portfolio-background">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="experience-entry animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-portfolio-primary">{exp.title}</h3>
                  <div className="flex items-center">
                    <Briefcase className="h-4 w-4 text-portfolio-secondary mr-1" />
                    <span className="text-portfolio-secondary font-medium">{exp.company}</span>
                    {exp.link && (
                      <a 
                        href={exp.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center ml-2 text-portfolio-accent hover:text-portfolio-primary transition-colors"
                      >
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
                
                <div className="flex flex-wrap mt-2 md:mt-0 gap-4">
                  <div className="flex items-center text-sm text-portfolio-muted">
                    <Calendar className="h-4 w-4 mr-1" />
                    {exp.period}
                  </div>
                  <div className="flex items-center text-sm text-portfolio-muted">
                    <MapPin className="h-4 w-4 mr-1" />
                    {exp.location}
                  </div>
                </div>
              </div>
              
              <ul className="mt-3 space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex">
                    <span className="mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

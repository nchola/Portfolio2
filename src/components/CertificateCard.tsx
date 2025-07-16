
import React from 'react';
import { Award } from 'lucide-react';
import SpotlightCard from '@/Animations/SpotlightCard/SpotlightCard';
import DecryptedText from '@/Animations/DecryptedText/DecryptedText';

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  link?: string;
  image?: string;
}

interface CertificateCardProps {
  certificate: Certificate;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ certificate }) => {
  return (
    <SpotlightCard
      className="h-full bg-static-white dark:bg-void-black border border-quantum-gray/20 dark:border-static-white/20 rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl"
      spotlightColor="rgba(193, 154, 107, 0.3)"
    >
      <div className="p-6 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gilded-parchment/20 rounded-full flex items-center justify-center">
            <Award className="w-5 h-5 text-gilded-parchment" />
          </div>
          <div className="flex-1">
            <span className="text-sm font-medium text-gilded-parchment uppercase tracking-wide">
              {certificate.issuer}
            </span>
            <div className="text-xs text-quantum-gray/60 dark:text-static-white/60">
              {certificate.date}
            </div>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-void-black dark:text-static-white mb-3 leading-tight">
          {certificate.title}
        </h3>

        {/* Description */}
        <div className="flex-1 mb-4">
          <DecryptedText
            text={certificate.description}
            speed={25}
            maxIterations={6}
            animateOn="view"
            className="text-sm text-quantum-gray/80 dark:text-static-white/80 leading-relaxed"
          />
        </div>

        {/* Action Button */}
        <div className="mt-auto">
          {certificate.link ? (
            <a
              href={certificate.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full px-4 py-2 bg-gilded-parchment/10 hover:bg-gilded-parchment/20 text-gilded-parchment rounded-lg text-sm font-medium transition-all duration-300 hover:scale-[1.02]"
            >
              {/\.(png|jpe?g|webp|gif)$/i.test(certificate.link) ? "View Image" : "View Certificate"}
            </a>
          ) : (
            <button
              className="inline-flex items-center justify-center w-full px-4 py-2 bg-quantum-gray/10 text-quantum-gray/60 rounded-lg text-sm font-medium cursor-not-allowed"
              disabled
            >
              No Link Available
            </button>
          )}
        </div>
      </div>
    </SpotlightCard>
  );
};

export default CertificateCard;

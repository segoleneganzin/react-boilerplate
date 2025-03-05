import React from 'react';

interface I_SectionLayoutProps {
  sectionId: string;
  children: React.ReactNode;
  title?: string;
}

const SectionLayout: React.FC<I_SectionLayoutProps> = ({
  sectionId,
  title,
  children,
}) => {
  return (
    <section id={sectionId} className='section-layout'>
      {title && <h3>{title}</h3>}
      {children}
    </section>
  );
};

export default SectionLayout;

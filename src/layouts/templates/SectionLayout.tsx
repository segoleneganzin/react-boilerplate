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
      {title && <h3 className='section-layout__title bold'>{title}</h3>}
      <div className='section-layout__content'>{children}</div>
    </section>
  );
};

export default SectionLayout;

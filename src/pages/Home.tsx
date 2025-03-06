import Hero from '../layouts/Hero';
import PageLayout from '../layouts/templates/PageLayout';
import SectionLayout from '../layouts/templates/SectionLayout';
import ErrorBoundary from '../components/ErrorBoundary';
import { homeSections } from '../utils/sections';

const Home = () => {
  return (
    <ErrorBoundary>
      <PageLayout mainClassName='home'>
        <>
          <Hero />
          {homeSections.map((section) => (
            <SectionLayout
              key={section.id}
              sectionId={section.id}
              title={section.title}
            >
              <p>{section.content}</p>
            </SectionLayout>
          ))}
        </>
      </PageLayout>
    </ErrorBoundary>
  );
};

export default Home;

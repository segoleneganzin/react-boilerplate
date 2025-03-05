import { useEffect, useState } from 'react';
import ScrollUp from '../../components/ScrollUp';
import Footer from '../Footer';
import Header from '../Header';

interface I_PageLayoutProps {
  children: React.ReactNode;
  mainClassName?: string;
}

const PageLayout: React.FC<I_PageLayoutProps> = ({
  children,
  mainClassName = '',
}) => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const showScrollButtonThreshold = 200;

  const handleScroll = () => {
    setShowScrollButton(window.scrollY > showScrollButtonThreshold);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='page-layout'>
      <Header />
      <main className={`main ${mainClassName}`}>{children}</main>
      {showScrollButton && <ScrollUp />}
      <Footer />
    </div>
  );
};

export default PageLayout;

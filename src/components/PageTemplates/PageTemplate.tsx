import React, { ReactNode } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './styles.module.css'


import { Pacifico} from 'next/font/google'
const inter = Pacifico ({
  subsets: ['latin'],
  weight: '400'
})



interface PageTemplateProps {
  children: ReactNode;
}

const PageTemplate: React.FC<PageTemplateProps> = ({ children }) => {
  return (
    <div className={`${styles.wrapper} ${inter.className}`}>
      <Header />
      <div className={styles.main}>
      {children}
      </div>
      <Footer />
    </div>
  );
};

export default PageTemplate;


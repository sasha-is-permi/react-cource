import Header from './Header';
import Footer from './Footer';
import ProgressBar from './ProgressBar';
import styles from './Layout.module.css';

function Layout({ children }) {
  return (
    <div className={styles.root}>
      <ProgressBar />
      <Header />

      {children}
      <Footer />
    </div>
  );
}

export default Layout;


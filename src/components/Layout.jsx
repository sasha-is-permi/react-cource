import Header from './Header';
import Footer from './Footer';
import ProgressBar from './ProgressBar';

function Layout({ children }) {
  return (
    <div className="page">
      <ProgressBar />
      <Header />

      {children}
      <Footer />
    </div>
  );
}

export default Layout;


import { useEffect, useState } from 'react';

function ProgressBar() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      
      if (docHeight === 0) {
        setWidth(0);
        return;
      }

      const scrollPercent = (scrollTop / docHeight) * 100;
      setWidth(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: `${width}%`,
        height: '5px',
        backgroundColor: 'red',
        zIndex: 9999,
        transition: 'width 0.1s',
      }}
    />
  );
}

export default ProgressBar;


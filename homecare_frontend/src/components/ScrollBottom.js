import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// ==============================|| NAVIGATION - SCROLL TO TOP ||============================== //

const ScrollBottom = ({ children }) => {
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        left: 0,
        behavior: 'smooth'
      });
    }, 100);
  }, [pathname]);

  return children || null;
};

ScrollBottom.propTypes = {
  children: PropTypes.node
};

export default ScrollBottom;

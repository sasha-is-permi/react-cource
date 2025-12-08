import classNames from 'classnames';
import { useTheme } from '../../contexts/ThemeContext';
import styles from './Button.module.css';

function Button({ children, className, onClick, disabled, ...props }) {
  const { theme } = useTheme();

  return (
    <button
      className={classNames(styles.root, styles[theme], className)}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;


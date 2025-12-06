import classNames from 'classnames';
import styles from './Button.module.css';

function Button({ children, className, onClick, disabled, ...props }) {
  return (
    <button
      className={classNames(styles.root, className)}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;


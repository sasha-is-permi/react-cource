import { useSelector } from 'react-redux';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import { selectCartTotalAmount } from '../store/slices/cartSlice';
import Button from './Button';
import styles from './Header.module.css';

function Header() {
  const { toggleTheme } = useTheme();
  const { user, login, logout } = useAuth();
  const totalAmount = useSelector(selectCartTotalAmount);

  return (
    <header className={styles.root}>
      <h1 className={styles.title}>Рестораны</h1>
      <div className={styles.controls}>
        <Button onClick={toggleTheme}>Сменить тему</Button>
        {user ? (
          <>
            <span>{user.name}</span>
            <span>Cart: {totalAmount}</span>
            <Button onClick={logout}>Выйти</Button>
          </>
        ) : (
          <Button onClick={login}>Войти</Button>
        )}
      </div>
    </header>
  );
}

export default Header;


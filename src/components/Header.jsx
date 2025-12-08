import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import Button from './Button';
import styles from './Header.module.css';

function Header() {
  const { toggleTheme } = useTheme();
  const { user, login, logout } = useAuth();

  return (
    <header className={styles.root}>
      <h1 className={styles.title}>Рестораны</h1>
      <div className={styles.controls}>
        <Button onClick={toggleTheme}>Сменить тему</Button>
        {user ? (
          <>
            <span>{user.name}</span>
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


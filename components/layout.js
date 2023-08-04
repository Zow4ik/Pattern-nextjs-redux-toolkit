import styles from './styles/wrapper.module.scss';

export default function Layout({ children }) {
   return (
      <div className={styles.wrapper}>
         {children}
      </div>
   );
}
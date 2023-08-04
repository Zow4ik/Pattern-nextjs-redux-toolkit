import styles from '../components/styles/main.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectCount, dec, inc } from '../redux/actions/countSlice';

export default function Main() {
   const dispatch = useDispatch();
   const num = useSelector(selectCount);
   return (
      <div>
         <h1>ШАБЛОН</h1>
         <ul>
            <li>проверка стилей</li>
            <li>проверка стилей</li>
            <li>проверка стилей</li>
            <li>проверка стилей</li>
         </ul>
         <p className={styles.p}>ВНИМАНИЕ GIT НЕ УСТАНОВЛЕН</p>
         <p>это шаблон для next, react, scss</p>
         <h2>!!! ПЕРЕД РАБОТОЙ ОБНОВИТЬ package-lock.json ПОЛЕ name 2 строка</h2>
         <div>
            <button onClick={() => dispatch(inc())} className={styles.button}>+</button>
            <button onClick={() => dispatch(dec())} className={styles.button}>-</button>
            <p className={styles.p2}>{num}</p>
         </div>
         <p>не скачан IMMER</p>
         <p>скачаны REDUX-TOOLKIT и REDUX-REACT</p>
      </div>
   );
}
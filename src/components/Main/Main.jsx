import styles from './Main.module.scss';

import Cardspace from './Cardspace/Cardspace';
import Search from './Search/Search';

export default function Main(props) {
  return (
    <main className={styles.main}>
      <Search/>
      <Cardspace appBodyRef={props.appBodyRef}/>
    </main>
  );
}

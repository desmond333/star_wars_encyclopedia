import React, {useRef} from 'react';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

export default function AppWrapper() {
  //с помощью хука useRef создаем ссылку на контейнер всего приложения
  const appBodyRef = useRef();

  return (
    <div className="appbody" ref={appBodyRef}>
      <Header />

      <Main appBodyRef={appBodyRef} />

      <Footer />
    </div>
  );
}

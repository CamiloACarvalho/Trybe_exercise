import { useState } from 'react';
import Form from './components/form/Form';
import Aside from './components/aside/Aside';
import Modal from './components/modal/Modal';
import styles from './app.module.css';

function App() {
  const [modalOn, setModalOn] = useState(false);

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>,
  ) => {
    e.preventDefault();
    setModalOn((state) => !state);
  };

  return (
    <>
      { modalOn && <Modal handleSubmit={ handleSubmit } />}
      <main className={ modalOn ? styles.modalBlur : styles.container }>
        <Aside />
        <Form handleSubmit={ handleSubmit } />
      </main>
    </>
  );
}

export default App;

import './App.css';
import DesenvolvimentoWeb from './components/Desenvolvimento-Web';
import HelloWorld from './components/HelloWorld';
import calculateAge from './components/CalculateAge';

function App() {
  const person = {
    name: 'Camilo',
    birthDate: '04/08/1990',
  };

  calculateAge('20/10/1993'); // 30

  return (
    // Essas tags [<>] vazias são chamadas de fragment
    // Porque de regra, só pode retornar uma única tag, poderia ser uma div
    // Dentro dessa tag você pode criar diversas outras, mas para retornar tem que ser apenas uma
    <>
      <div>Work in progress</div>
      <DesenvolvimentoWeb />
      <HelloWorld />

      <h1>{`My name is ${person.name}`}</h1>
      <h2>
        I'm
        {calculateAge(person.birthDate)}
        {' '}
        years old
      </h2>
    </>
  );
}

export default App;

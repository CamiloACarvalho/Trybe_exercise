import './App.css';
import DesenvolvimentoWeb from './components/Desenvolvimento-Web';
import HelloWorld from './components/HelloWorld';

function App() {
  

  return (
    // Essas tags [<>] vazias são chamadas de fragment
    // Porque de regra, só pode retornar uma única tag, poderia ser uma div
    // Dentro dessa tag você pode criar diversas outras, mas para retornar tem que ser apenas uma
    <> 
      <div>Work in progress</div>
      <DesenvolvimentoWeb />
      <HelloWorld />
    </>
  );
}

export default App;

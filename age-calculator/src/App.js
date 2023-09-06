import './index.css';
import Form from './components/Form';
import Result from './components/Result';

function App() {
  return (
    <div className="App w-full h-screen flex bg-accent items-center justify-center">
      <div className="p-10 bg-white w-[700px] h-[500px] rounded-br-max rounded-xl">
        <Form />
        <Result />
      </div>
    </div>
  );
}

export default App;

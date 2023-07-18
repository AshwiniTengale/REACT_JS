import logo from './logo.svg';
import './App.css';
import Message from './Components/Message';
import Counter from './Components/Counter';
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';
function App() {
  return (
    <div className="App">
      <FunctionClick/>
<ClassClick/>
         {/* <Counter></Counter>
         <Message></Message> */}


    </div>
  );
}
export default App;
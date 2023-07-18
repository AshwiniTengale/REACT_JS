import logo from './logo.svg';
import './App.css';
import Message from './Components/Message';
import Counter from './Components/Counter';
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';
import EventBind from './Components/EventBind';
function App() {
  return (
    <div className="App">
      <EventBind/>
      {/* <FunctionClick/>
      <ClassClick/> */}
         {/* <Counter></Counter>
         <Message></Message> */}


    </div>
  );
}
export default App;
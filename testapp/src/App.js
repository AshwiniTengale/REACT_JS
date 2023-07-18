import logo from './logo.svg';
import './App.css';
import Message from './Components/Message';
import Counter from './Components/Counter';
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';
import Usergreeting from './Components/Usergreeting';
function App() {
  return (
    <div className="App">
<Usergreeting/>
      {/* <ParentComponent/> */}
      {/* <EventBind/> */}
      {/* <FunctionClick/>
      <ClassClick/> */}
         {/* <Counter></Counter>
         <Message></Message> */}


    </div>
  );
}
export default App;
import logo from './logo.svg';
import './App.css';
import Message from './Components/Message';
import Counter from './Components/Counter';
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';
import Usergreeting from './Components/Usergreeting';
import NameList from './Components/NameList';
import Stylesheet from './Components/Stylesheet';
import Inline from './Components/Inline';
import './appStyle.css'
import styles from './appStyles.module.css'

function App() {
  return (
    <div className="App">
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
      <Inline/>
      {/* <Stylesheet primary={true}/> */}
      {/* <NameList/> */}
      {/* <Usergreeting/> */}
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
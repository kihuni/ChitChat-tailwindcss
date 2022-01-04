import "./App.css";
import {AiFillWechat} from 'react-icons/ai';


function App() {
  return (
    <div className="App">
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-x-4">
         <AiFillWechat className="w-12 h-12" />
        <div className="chat-notification-content">
          <h4 className="text-xl font-medium text-black">ChitChat</h4>
          <p className="">You have a new message!</p>
        </div>
      </div>
    </div>
  );
}

export default App;

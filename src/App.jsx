import React from 'react';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import ChatRoomsList from './components/ChatRoomList';
import Register from './components/Register';
import Login from './components/Login';

const App = () => {
  return (
    <div>
     <Router>
      <Routes>
        <Route path="/" element={<ChatRoomsList />} />
        <Route path="*" element={<Register/>} />
        <Route path='*' element={<Login/>} />

      </Routes>
     </Router>
    </div>
  );
};

export default App;
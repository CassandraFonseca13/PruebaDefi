import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from "./components/Navbar/Navbar.tsx";
import Tablero from './components/Tablero/Tablero.tsx';
import ChatWebSocket from './components/ChatWebSocket/ChatWebSocket.tsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Navbar/>
        <section>

        </section>
        <section>
          <Tablero/>
        </section> */}

        <ChatWebSocket/>
      </header>
    </div>
  );
}

export default App;

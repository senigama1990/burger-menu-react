import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';

function App() {
    const [toggle, setToggle] = useState(false)
    
    return (
        <div className="App">
            <Navbar toggle={toggle}/>
            <button onClick={() => setToggle(!toggle)} type='button'>
                <span className={toggle ? "menu_active" : ''}></span>
                <span className={toggle ? "menu_active2" : ''}></span>
                <span className={toggle ? "menu_active3" : ''}></span>
            </button>
        </div>
    );
}

export default App;

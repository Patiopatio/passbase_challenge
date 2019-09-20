import React from 'react';
import './App.css';
import { Link } from "react"
import Location from "./pages/location"

function App() {
  return (
    <div className="App">
      <div>
        {<nav>
          <ul>
            <li>
              <Link to="./location/">Location</Link>
            </li>
          </ul>
        </nav>

        }

      </div>
    </div>
  );
}

export default App;

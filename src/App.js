import logo from './logo.svg';
import './App.css';
import {Navbar} from './components/Navbar.js'
import {Form} from './components/Form.js'

export function App() {
  return (
    <div className="container">
      <Navbar />
      <Form />
    </div>
  );
}


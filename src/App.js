import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js'
import Form from './components/Form.js'
import Meme from './components/Meme.js'

function App() {
  return (
    <div className="container">
      <Navbar />
      <Form />
      <Meme />
    </div>
  );
}

export default App;

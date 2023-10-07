import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
    <>
      <Navbar title="Textutils" aboutText="About Textutils"/>
      <div className="container">
        <TextForm heading="Enter text to analyze below"/>
      </div>
    </>
  );
}

export default App;

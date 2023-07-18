import './App.css';
import Section1 from './components/Section1';
import Section2 from './components/section2';
import Navbar from './navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Section1 />
      <Section2 />
    </div>
  );
}

export default App;

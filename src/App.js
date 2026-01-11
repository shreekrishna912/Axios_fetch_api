import logo from './logo.svg';
import './App.css';
import UserList from './components/UserList';
import FAQ from './components/faq';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Simple React + Axios Demo</h1>
      </header>

      <main>
        <FAQ />
      </main>
    </div>
  );
}

export default App;

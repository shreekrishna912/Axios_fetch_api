import logo from './logo.svg';
import './App.css';
import UserList from './components/UserList';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Simple React + Axios Demo</h1>
      </header>

      <main>
        <UserList />
      </main>
    </div>
  );
}

export default App;

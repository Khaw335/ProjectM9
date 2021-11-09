import logo from './logo.svg';
import './App.css';

import Facebook from './components/Facebook';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Facebook Auth</h1>
      </header>
      <p className="App-intro">
        Get start
      </p>
      <Facebook />
    </div>
  );
}

export default App;

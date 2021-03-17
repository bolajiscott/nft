import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="Navbar">
      <header className="App-header">
        <ul>
          <li>
            <a href="#">Browse</a>
          </li>
          <li>
            <a href="#">Activity</a>
          </li>
          <li>
            <a href="#">Ranking</a>
          </li>
          <li>
            <a href="#">BLOG</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
          <li>
            <a href="#">Create</a>
          </li>
          </ul>
          <input type="text" id="mySearch" onkeyup="myFunction()" placeholder="Search items, collections,accounts" title="Type in a category"></input>
      </header>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import passport from './passport.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
   <div> <h1>Welcome to react snippet</h1>
   </div>
          <header className="App-header">
         <img src={passport} className='maria-passport' alt='passport-photo'/>
      </header>
      <footer><b>Hello world</b></footer>
      <div><p></p></div>
    </div>
  );
}

export default App;

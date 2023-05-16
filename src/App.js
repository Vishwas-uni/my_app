import './App.css';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="demo-app_container">
     <Header title={"Welcome to React Session 8"}/>
     <Body/>
     <Footer/>
    </div>
  );
}

export default App;

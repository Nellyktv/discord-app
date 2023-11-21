import './App.css';
import Header from './components/header/Header';
import  AuthenticationForm from './pages/authentication/AuthenticationForm';


function App(props) {
  return (
    <div className="App">
      <Header img={props.img}/>
      {/* <AuthenticationForm /> */}
      
    </div>
  );
}

export default App;

import logo from './logo.svg';
import Customise from './components/customise/Customise';
import Navbar from "./components/navbar/Navbar";
import Feed from './Feed';
import Login from './Login';
import Signup from './Signup';
// import Brief from "./Brief";
// import Login from './Login';
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import './App.css';

function App() {
  return (
    <>
      {/* <Customise/> */}
      {/* <Login/> */}
      {/* <Signup/> */}
      <Navbar />
      <Feed />
    </>
  );
}

export default App;


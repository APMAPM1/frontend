import Footer from './Components/Footer';
import MainBody from './Components/MainBody';
import StickyNavbar from './Components/StickyNavbar';
import Scheme from './Components/Scheme';
import About from './Components/About Us';
import Table from './Components/govschme.component';
import Form from './Components/govschemegeneration';
import Login from './Components/orgLogin';
import Verification from './Components/varification.component';
import AadharVerification from './Components/AadharVerification.component';

function App() {
  return (
    <div className="App">
      <StickyNavbar />
      <MainBody />
      <About Us />
      <Scheme />
      <Footer />
      <Table />
      <Form />
      <Login />
      <Verification />
      <AadharVerification />
      
    </div>
  );
}

export default App;
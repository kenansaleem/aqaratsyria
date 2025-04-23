// import logo from './logo.svg';
import './App.css';
//react-router-dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Footer, Header } from './Sections';
import { Content } from './Sections/index';
import { Home, Sell, Rent, PropertyCardDetails } from './Pages/index';


function App() {
  return (
    <Router>
      <Header />
      <Content>
        <Routes>
          <Route path='/aqaratsyria' element={<Home />} />
          <Route path='/aqaratsyria/sell' element={<Sell />} />
          <Route path='/aqaratsyria/rent' element={<Rent />} />
          <Route path='/aqaratsyria/:category/:propertyId' element={
            <PropertyCardDetails />
          } />
        </Routes>
      </Content>
      <Footer />
    </Router>
  );
}

export default App;


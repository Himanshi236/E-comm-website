import ProductPage from './productPage/ProductPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
    {/* <ProductPage/> */}
    <Router>
      <Routes>
        <Route path="/" element={<ProductPage/>}/>
          {/* <Route path="/noFound" element={<ProductPage />} /> */}

      </Routes>
    </Router>
      
    
    </>
    
        
  );
}

export default App;

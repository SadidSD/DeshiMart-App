import Products from './Pages/products';
import Home from './Pages/home';
import Tasks from './Pages/Tasks';
import Analytics from './Pages/Analytics';
import SoldItems from './Pages/SoldItems';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [soldItems, setSoldItems] = useState([]);
  return (
<div>
<Router>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="inventory" element={<Products setSoldItems={setSoldItems}/>} />
    <Route path="soldItems" element={<SoldItems soldItems={soldItems}/>} />
    <Route path="tasks" element={<Tasks />} />
    <Route path="analytics" element={<Analytics />} />

  </Routes>
</Router>
</div>
   );
}

export default App;

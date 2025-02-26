import './App.css';
import Card from './Components/card';
import Inventory from './Images/Inventory.png'
import Logo from './Images/DeshiMart Logo.png'
import Tasks from './Images/tasks.png'
import Analytics from './Images/analytics.png'
import Sold from './Images/sold.png'

function App() {
  return (
    <div className="App flex flex-col justify-center items-center h-screen gap-7 bg-[#efe5db]"> 
    <img className='h-[300px] w-auto' src={Logo} alt="" />
      <div className='flex gap-7'>
        <Card name="Inventory" image={Inventory}/>
        <Card name="sold Items" image={Sold}/>
      </div>
      <div className='flex  gap-7'>
        <Card name="Tasks" image={Tasks}/>
        <Card name="Analytics" image={Analytics}/>
      </div>


 
    </div>
  );
}

export default App;

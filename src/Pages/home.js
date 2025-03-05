import Card from '../Components/card';
import Inventory from '../Images/Inventory.png'
import Logo from '../Images/DeshiMart Logo.png'
import Tasks from '../Images/tasks.png'
import Analytics from '../Images/analytics.png'
import Sold from '../Images/sold.png'
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <div className="App flex flex-col justify-center items-center sm:h-screen gap-7 bg-[#efe5db] p-6"> 
    <img className="h-[200px]  lg:h-[300px] w-auto" src={Logo} alt="Logo" />
    <div className='flex flex-col gap-7 sm:flex-row'> 
        <Card name="Inventory" image={Inventory} onClick={()=>navigate("/inventory")}/>
        <Card name="sold Items" image={Sold} onClick={()=> navigate("/soldItems")}/>
      </div>
    <div className='flex flex-col gap-7 sm:flex-row'> 
        <Card name="Tasks" image={Tasks} onClick={()=>navigate("/tasks")}/>
        <Card name="Analytics" image={Analytics} onClick={()=>navigate("/analytics")}/>
    </div>
    </div>
   );
}

export default Home;

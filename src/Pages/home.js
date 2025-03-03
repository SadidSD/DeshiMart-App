import Card from '../Components/card';
import Inventory from '../Images/Inventory.png'
import Logo from '../Images/DeshiMart Logo.png'
import Tasks from '../Images/tasks.png'
import Analytics from '../Images/analytics.png'
import Sold from '../Images/sold.png'

function home() {
  return (
    <div className="App flex flex-col justify-center items-center sm:h-screen gap-7 bg-[#efe5db] p-6"> 
    <img className="h-[200px]  lg:h-[300px] w-auto" src={Logo} alt="Logo" />
    <div className='flex flex-col gap-7 sm:flex-row'> 
        <Card name="Inventory" image={Inventory}/>
        <Card name="sold Items" image={Sold}/>
      </div>
    <div className='flex flex-col gap-7 sm:flex-row'> 
        <Card name="Tasks" image={Tasks}/>
        <Card name="Analytics" image={Analytics}/>
    </div>
    </div>
   );
}

export default home;

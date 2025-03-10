import React from 'react'
import AnalyticsCard from '../Components/AnalyticsCard'
import Investment from '../Images/analytics.png'



function Analytics({}) {
  return (
    <div className='flex flex-col items-center h-screen justify-center bg-[#efe5db]'>
    <AnalyticsCard  image={Investment} head="Investment" amount="299"/>
    <AnalyticsCard  image={Investment} head="Revenue" amount="299"/>
    <AnalyticsCard  image={Investment} head="Profit" amount="299"/>
    </div>
  )
}

export default Analytics

import { useState } from 'react'
import './App.css'
import { RevenueCard } from './Components/RevenueCard'
import { NavBar } from './Components/NavBar'
import { OverviewCard } from './Components/OverviewCard'
import { TransactionCard } from './Components/TransactionCard'
import { ButtonCard } from './Components/ButtonCard'
import { TableTop } from './Components/TableTop'
import { TableHeadCard } from './Components/TableHeadCard'
import { Footer } from './Components/Footer'
import { Sidebar } from './Components/SideBar'
import { BlueCard } from './Components/BlueCard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-gray-900 pr-5'>
    <Sidebar/>
    <NavBar className='bg-white'/>
    <OverviewCard/>
    <div class="grid grid-cols-1 bg-white-500 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 sm:pl-64">
      <BlueCard title={"Next payout"} amount={"₹ 2,312.23"} orderCount={"23"} Date={"Today, 04:00 PM"}/>
      <RevenueCard title={"Amount Pending"} amount={"₹ 92,312.20"} orderCount={"13"} />
      <RevenueCard title={"Amount Processed"} amount={"₹ 23,92,312.19"} />
    </div>
    <TransactionCard/>
    <ButtonCard/>
    <div className='bg-white mr-2 ml-2 sm:ml-64'>
      <TableTop/>
      <TableHeadCard/>
    </div>
    <Footer/>
    </div>
  )
}

export default App

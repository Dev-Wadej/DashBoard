import React, {  } from 'react';

import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { Tooltip } from '@mui/material';
import {Navbar,Footer,Sidebar,ThemeSettings} from './components'
import {Ecommerce,Orders,Calendar,Employees,Pyramid,Line,Customers,Kanban,Area,Bar,Pie,Financial,Stacked,ColorMapping,ColorPicker,Editor} from './pages'
import { useStateContext } from './contexts/ContextProvider';



const App: React.FC = () => {
  const {activeMenu}=useStateContext()
  return (
    <div>
      <BrowserRouter>
      <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <Tooltip title="Settings" placement='bottom' >
                <button type='button' className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
                style={{backgroundColor:'blue',borderRadius:'50%'}}
                >
                  <FiSettings />
                </button>
            </Tooltip>
          </div>
          { activeMenu ? (
           <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
           </div>
          ): 
          (<div className='w-0 dark:bg-secondary-dark-bg'>
              <Sidebar/>
             </div>)}
            <div className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            } >
              <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
                <Navbar />
              </div>
  
              <Routes>




                {/* Dashboard  */}
                <Route path='/' element={<Ecommerce/>}></Route>
                <Route path='/ecommerce' element={<Ecommerce/>}></Route>





                {/* Pages */}
                <Route path='/orders' element={<Orders/>}></Route>
                <Route path='/employees' element={<Employees/>}></Route>
                <Route path='/customers' element={<Customers/>} ></Route>




                {/* Apps */}
                <Route path='/kanban' element={<Kanban/>}></Route>
                <Route path='/editor' element={<Editor/>}></Route>
                <Route path='/calendar' element={<Calendar/>}></Route>
                <Route path='/color-picker' element={<ColorPicker/>}></Route>

                  


                {/* Chart  */}
                <Route path='/line' element={<Line/>}></Route>
                <Route path='/area' element={<Area/>}></Route>
                <Route path='/barchart' element={<Bar/>}></Route>
                <Route path='/piechart' element={<Pie/>}></Route>
                <Route path='/financial' element={<Financial/>}></Route>
                <Route path='/color-mapping' element={<ColorMapping/>}></Route>
                <Route path='/pyramid' element={<Pyramid/>}></Route>
                <Route path='/stacked' element={<Stacked/>}></Route>

              </Routes>
            </div>
        </div>
      </BrowserRouter>  
    </div>
  )
}

export default App;

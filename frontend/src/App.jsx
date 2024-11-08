import React from 'react'
import {Routes,Route} from 'react-router-dom'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vm] md:px-[7vm] 1g:px-[9vm]'>
      
      <Routes>
        <Route>
          <Route path='/' element={<Home/>}/>
        </Route>
       
      </Routes>
    </div>
  )
}

export default App

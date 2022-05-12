import {PostForm, HomePage, NotFoundPage,ListaPost} from './pages/index.js'
import {Routes, Route} from 'react-router-dom'

import {PostProvider} from './context/postContext'
import {Toaster }from 'react-hot-toast'


import logo from './img/logoSona.gif'
import foto from './img/cordoba.jpg'


function App (){
  return(
   <div className='bg-gray-100 min-h-screen'>
    <img className="h-12 px-4" src={logo} alt="logo"/>
    <img className=" mt-6 rounded-md 
      shadow-xl sm:mt-8 sm:h-32 sm:w-full sm:object-cover object-center" src={foto} alt="foto"/>
    
    <div className="mt-4 px-10 rounded-md bg-gray-100 container m-auto">      
      <PostProvider>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/new' element={<PostForm/>} />
          <Route path='/posts/:id' element={<PostForm/>} />
          <Route path='/*' element={<NotFoundPage/>} />
          <Route path='/lista' element={<ListaPost/>} />
        </Routes>
        <Toaster />
      </PostProvider>
    
      </div>
    
    
    </div>
    
  )
}

export default App



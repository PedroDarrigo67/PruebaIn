import {PostForm, HomePage, NotFoundPage} from './pages/index.js'
import {Routes, Route} from 'react-router-dom'
import logo from './img/logoSona.gif'
import foto from './img/cordoba.jpg'
import {PostProvider} from './context/postContext'
import {Toaster }from 'react-hot-toast'



function App (){
  return(
   <div className='bg-gray-100 min-h-screen'>
    <img className="h-10 px-4" src={logo} alt="logo"/>
    <img className="mt-6 rounded-md 
      shadow-xl sm:mt-8 sm:h-32 sm:w-full sm:object-cover object-center" src={foto} alt="foto"/>
    
    <div className="mt-4 px-10 rounded-md bg-gray-300 container m-auto">      
      <PostProvider>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/new' element={<PostForm/>} />
          <Route path='/*' element={<NotFoundPage/>} />
        </Routes>
        <Toaster />
      </PostProvider>
    
      </div>
    
    
    </div>
    
  )
}

export default App



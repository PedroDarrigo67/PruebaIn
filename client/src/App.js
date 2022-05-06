import {PostForm, HomePage, NotFoundPage} from './pages/index.js'
import {Routes, Route} from 'react-router-dom'

function App (){
  return(
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/new' element={<PostForm/>} />
      <Route path='/*' element={<NotFoundPage/>} />
      
    </Routes>
  )
}

export default App



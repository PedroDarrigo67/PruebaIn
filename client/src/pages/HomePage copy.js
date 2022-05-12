import {usePosts} from '../context/postContext'
import {VscEmptyWindow} from 'react-icons/vsc'
import {Link} from 'react-router-dom'
import {PostCard} from '../components/PostCard'


export function HomePage() {
  
  const {posts} = usePosts()

  if (posts.length === 0) return (
    <div className="flex flex-col justyfy-center items-center">
      <Link to="/new">
        Crear nuevo post
      </Link>
      
      
      <VscEmptyWindow className="w-48 h-48"/>
      
    

      <h1 className="text-2xl"> No hay publicaciones aun</h1>
    </div>
  )

   return (


    <div className=''> 
      <header className="flex justify-between py-1"> 
        <h1 className="text-xl text-gray-600 font-bold"> Publicaciones ({posts.length})</h1>
          <Link to="/new" className="px-3 py-2 text-lg rounded-md bg-indigo-600 hover:bg-indigo-700
          text-gray-300 file:font-semibold">
            Crear nueva publicacion
          </Link>
      </header>
    
      <div className = "grid grid-row-end:1">
        <div className="my-2">
          {posts.map(post => (
          <PostCard post={post} key={post._id}/>
          ))}
      </div>
      </div>
     

     

     </div>
    
    
  
    
    
     
  )
}
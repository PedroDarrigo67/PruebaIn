import {usePosts} from '../context/postContext'
import {VscEmptyWindow} from 'react-icons/vsc'
import {Link} from 'react-router-dom'
import {PostCard} from '../components/PostCard'


export function HomePage() {
  
  const {posts} = usePosts()

  if (posts.length === 0) return (
    <div className="flex flex-col justyfy-center items-center">
      <VscEmptyWindow className="w-48 h-48"/>
      <h1 className="text-2xl"> No hay publicaciones aun</h1>
    </div>
  )

   return (
    <div> 
    <Link to="/new">
        Crear nuevo post
      </Link>
    
        <div className='grid grid-cols-3 gap-2'> 
          {posts.map(post => (
          <PostCard post={post} key={post._id}/>
          ))}
        
        
        </div>
     

     

     </div>
    
    
  
    
    
     
  )
}
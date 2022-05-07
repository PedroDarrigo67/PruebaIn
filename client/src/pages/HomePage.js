import {usePosts} from '../context/postContext'
import {VscEmptyWindow} from 'react-icons/vsc'


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
     {posts.map(post => (
        <div key={post._id}>
        {post.title}
     </div>
     ))}
     </div>
    

  
    
    
     
  )
}
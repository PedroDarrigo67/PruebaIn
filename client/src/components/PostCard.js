import toast from 'react-hot-toast'
import {usePosts} from '../context/postContext'

export function PostCard({post}) {

  const{deletePost} = usePosts()

  const handleDelete = (_id) => { 
    toast((t) => (
      <div> 
        <p className="text-white"> quiere eliminar post? <strong>{_id} 
        </strong></p>
        <div> 
          <button className="bg-red-400 hover:bg-red-600 px-3 py-2
            text-white rounded-sm mx-2" onClick={() => {
              deletePost(_id);
              toast.dismiss(t.id);
            }
            
            } >Borrar</button>


          <button className="bg-slate-400 hover:bg-slate-500 px-3 py-2
            text-white rounded-sm mx-2" onClick={() => toast.dismiss(t.id)}>Cancelar</button>
        </div>
      </div>
    ), {
      style: {
        background:"#202020"
      }
    }
    )
  }

  return(
    <div className='bg-zinc-400 text-white rounded-sm 
      shadow-md shadow-black hover:bg-zinc-600 hover:cursor-pointer'>
      
     <div className='px-4 py-7'> 
        <div className='flex justify-between'>
          <h3>
            {post.title}
          </h3>
          <button className="inline-block px-5 py-3 
              drop-shadow-lg rounded-lg bg-red-600 text-white 
              tracking-wider font-semibold text-sm sm:text-base" 
              onClick={() => handleDelete(post._id)}>





              Eliminar Post
            </button>
        </div>


        <p> 
            {post.description}
        </p>


        


     </div>
      
    </div>
  )
}
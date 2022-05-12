import toast from 'react-hot-toast'
import {usePosts} from '../context/postContext'
import {useNavigate} from 'react-router-dom'

export function PostCard({post}) {
  const{deletePost} = usePosts()
  const navigate = useNavigate()

  const handleDelete = (id) => {
    toast(
      (t) => (
        <div classname='my-2'>
          <p className="text-white">
            Quiere eliminar publicacion<strong>{id}</strong>?
          </p>
          <div>
            <button
              className="bg-red-500 hover:bg-red-400 px-3 py-2 text-sm text-white rounded-sm mx-2"
              onClick={(e) => {
                deletePost(id);
                toast.dismiss(t.id);
              }}
            >
              Eliminar
            </button>
            <button
              className="bg-slate-400 hover:bg-slate-500 px-3 py-2 text-white rounded-sm mx-2"
              onClick={() => toast.dismiss(t.id)}
            >
              Cancel
            </button>
          </div>
        </div>
      ),
      {
        duration: "4000",
        style: {
          background: "#202020"
        }
      }
    );
  };
  return (
    <div
      className="bg-zinc-200 text-indigo rounded-md shadow-md shadow-black 
      hover:bg-zinc-300 hover:cursor-pointer"
      onClick={() => navigate(`/posts/${post._id}`)}
    >
      <div className="px-4 py-7">
        <div className="flex justify-between items-center">
          <h3 className="text-md font-semibold">{post.title}</h3>
          <button
            className="inline-block px-5 py-2 drop-shadow-lg rounded-lg bg-red-400 hover:bg-red-600 text-white 
              tracking-wider font-semibold text-sm sm:text-base"
            onClick={(e) => {
              e.stopPropagation();
              handleDelete(post._id);
            }}
          >
            Eliminar
          </button>
        </div>
        <p className="text-gray-600">{post.description}</p>
        
        <div className="my-2 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-1">
          {post.image && <img src={post.image.url} alt={post.title} className='h-20 w-20 '/>}
          {post.image && <img src={post.image.url} alt={post.title} className='h-20 w-20 '/>}      
          {post.image && <img src={post.image.url} alt={post.title} className='h-20 w-20 '/>}
        </div>
      </div>
      
    </div>
  );
}
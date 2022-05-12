


export function PostCard2({ post }) {
  


  
  return (
    <div
      className="bg-zinc-200 text-indigo rounded-md shadow-md shadow-black 
      hover:bg-zinc-300 hover:cursor-pointer"
      
    >
      <div className="px-4 py-7">

      <h3 className="text-md font-semibold">{post.title}</h3>

      <p classname="">{post.description}</p>
        <div className="flex justify-between items-center">
        
          {post.image && <img src={post.image.url} alt={post.title} className="h-20 w-20"/>}
          {post.image && <img src={post.image.url} alt={post.title} className="h-20 w-20"/>}
          {post.image && <img src={post.image.url} alt={post.title} className="h-20 w-20"/>}
          
        </div>
        

        


      </div>
      
    </div>
  );
}
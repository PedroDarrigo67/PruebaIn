import {useState, createContext, useContext, useEffect} from 'react'
import { getPostsRequest, createPostsRequest, deletePostsRequest } from '../api/pots'



const postContext = createContext()

export const usePosts = () => {
  const context = useContext(postContext)
  return context
}

export const PostProvider = ({children}) => {
   
  const [posts, setPosts] = useState([])

  const getPosts = async () => {
    const res = await getPostsRequest()
    setPosts(res.data)
  };


  const createPost = async (post) => {
    const res = await createPostsRequest(post)
    setPosts([...posts, res.data])
  };

  const deletePost = async id => {
    const res = await deletePostsRequest(id)
    if (res.status === 204) {
      setPosts(posts.filter(post => post._id !== id));
    }
    
  };

  useEffect(() => {
    getPosts()
    }, [])
  
  return <postContext.Provider value={{
    posts,
    getPosts,
    createPost,
    deletePost
  }}>
    {children}
  </postContext.Provider>
}
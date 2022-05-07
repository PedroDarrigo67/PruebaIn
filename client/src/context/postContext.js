import {useState, createContext, useContext, useEffect} from 'react'
import { getPostsRequest, createPostsRequest } from '../api/pots'



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
  }


  const createPost = async (post) => {
    const res = await createPostsRequest(post)
    setPosts([...posts, res.data])

  }



  useEffect(() => {
    getPosts()
    }, [])
  
  return <postContext.Provider value={{
    posts,
    getPosts,
    createPost
  }}>
    {children}
  </postContext.Provider>
}
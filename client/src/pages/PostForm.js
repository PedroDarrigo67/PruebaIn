import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {usePosts} from '../context/postContext'
import {useNavigate, useParams, Link} from 'react-router-dom'
import { useEffect, useState } from 'react'
import {AiOutlineLoading3Quarters} from 'react-icons/ai'


export function PostForm() {
  const {createPost, getPost, updatePost} = usePosts();
  const navigate = useNavigate();
  const params = useParams();
  const [post, setPost] = useState({
    title: "",
    description: "",
    image: null,
  });

  

  useEffect(() => {
    (async () => {
      if (params.id) {
        const post = await getPost(params.id);
        setPost({
          title: post.title,
          description: post.description,
        });
      }
    })();
  }, [params.id, getPost]);
  

  return (
    <div className='bg-gray-200 flex 
      justifi-center px-3'> 
    <div
      classname=''> 
    <header className='flex justify-between items-center text-bold text-blue-700'> 
      <h3 classname='text-xl'> Nueva Publicacion </h3>
      <Link 
        to='/'
        classname='px-3 py-2 text-lg rounded-md bg-indigo-600 hover:bg-indigo-700
          text-gray-300 file:font-semibold'
        > Volver </Link>      
    </header>

    

    <Formik
          initialValues={post}
          enableReinitialize
            validationSchema={Yup.object({
              title: Yup.string().required("Titulo requerido"),
              description: Yup.string().required("Descripcion es requerida"),              
            })

            }
            onSubmit={async (values, actions) => {
              if (params.id) {
                await updatePost(params.id, values);
              } else {
                await createPost(values);
              }
              actions.resetForm();
              actions.setSubmitting(false);
              navigate("/");
            }}
            
          >
        
          {({ setFieldValue, isSubmitting, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <label 
                htmlFor='title' 
                className='text-sm block font-bold text-blue-600'
              >Title</label>
              <Field 
                name='title' 
                placeholder='title' 
                className='px-3 py-2 focus:outline-none rounded bg-gray-100 text-gray-600 w-full'/>                
              <ErrorMessage 
                component='p' 
                className='text-red-400 text-sm' 
                name='title' />
               <label 
                htmlFor='Description' 
                className='text-sm block font-bold text-blue-600'
              >Descripcion</label>
              <Field 
                component = 'textarea'
                name='description' 
                placeholder='description' 
                className='px-3 py-2 focus:outline-none rounded 
                bg-gray-100 text-gray-600 w-full'
                  rows={3}/>
              <ErrorMessage 
                component='p' 
                className='text-red-400 text-sm'
                name='description' />

<label
                htmlFor="image"
                className="text-sm block font-bold text-blue-600"
              >
                Image
              </label>
              <input
                type="file"
                name="image"
                className="px-3 py-2 focus:outline-none rounded bg-gray-300 text-gray-600 w-full"
                onChange={(e) => setFieldValue("image", e.target.files[0])}
                
              />
              <ErrorMessage
                component="p"
                name="image"
                className="text-red-400 text-sm"
              />
            


            <button type='submit' onSubmit={handleSubmit} className="my-2 py-3 inline-block px-5
              drop-shadow-lg rounded-lg bg-indigo-500 hoover:bg-indigo-100 focus:outline-none
              text-white "
              disabled = {isSubmitting}
              > 
              {isSubmitting ? (
                <AiOutlineLoading3Quarters className="animate-spin h-5 w-5"/>
                ) : 'Guardar'}
              
            </button>
            
          </Form>
          )}



      </Formik>
    
    
    
    
    </div>        
    </div>
  )
}
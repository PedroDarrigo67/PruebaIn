import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {usePosts} from '../context/postContext'
import {useNavigate} from 'react-router-dom'

export function PostForm() {
  const {createPost} = usePosts()
  const navigate = useNavigate()

  return (
    <div className='bg-gray-300 min-h-screen'> 

      <Formik
          initialValues={{
            title:'',
            description: ''
          }}
            validationSchema={Yup.object({
              title: Yup.string().required("Titulo requerido"),
              description: Yup.string().required("Descripcion es requerida")
            })

            }
            onSubmit={ async(values, actions) => {
            await createPost(values)
            navigate('/');
            }}
          >
        
          {(handleSubmit) => (
            <Form>
              <Field name='title' placeholder='title' className='my-2 px-3 py-2 
                focus:outline-none rounded bg-gray-400 text-white w-full'/>
              <ErrorMessage component='p' className='text-red-400 text-sm' name='title' />
              <Field name='descrition' placeholder='description' className='my-2 px-3 py-2 
                focus:outline-none rounded bg-gray-400 text-white w-full'/>
              <ErrorMessage component='p' className='text-red-400 text-sm'name='description' />
            


            <button type='submit' onSubmit={handleSubmit} className="my-2 py-2 inline-block px-5 py-3 
              drop-shadow-lg rounded-lg bg-indigo-500 text-white 
              tracking-wider font-semibold text-sm sm:text-base"> 
              Guardar
            </button>
          </Form>
          )}



      </Formik>      


    </div>
  )
}
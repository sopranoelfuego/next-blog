import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import { SubmitHandler, useForm } from "react-hook-form"
import Layout from '../../components/Layout'
import createPostCss from "../../styles/createPost.module.css"
interface postValue{
    title: string
    content:string
}
function createPostPage() {
    const {register,handleSubmit} = useForm<postValue>()

    const router=useRouter()
    const registerPost:SubmitHandler<postValue>=async(values)=>{
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/post`,{
          method:'POST',
          headers:{'Content-type':'/application/json'},
          body:JSON.stringify(values)
      })
      router.push('/posts')
    }
  return (
      <Layout>
          <Head>
              create-post
          </Head>
         <div className={createPostCss.container}>
          <div>createPostPage</div>
          <div className={createPostCss.formWrapper}>
              <form onSubmit={handleSubmit(registerPost)}>
                  <div className={createPostCss.singleForm}>

                  <label>title</label>
                  <input type="text"  {...register('title')}/>
                  </div>
                  <div className={createPostCss.singleForm}>
                      <label>content</label>
                <textarea {...register('content')}/> 
                  </div>
                  <div className={createPostCss.singleForm}>

                  <input type='submit'/>
                  </div>

              </form>
          </div>
          </div>
      </Layout>
  )
}

export default createPostPage
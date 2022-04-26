import React, { useEffect } from 'react'
import {useRouter} from "next/router"
import Layout from '../../components/Layout'
import { IPost } from '../../lib/types'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { loadData } from '../../lib/db'
import Head from 'next/head'



function productByCategory({post}:InferGetStaticPropsType<typeof getStaticProps>) {
    const router=useRouter()   
    useEffect(() => {
      let subscriber:boolean=true
      const deletePost=async()=>{
        const posts= await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post/${router.query.id}`,{
          method:'DELETE'
        })
      }
     subscriber && deletePost()
    }, [])
    const deletePost=async()=>{
       await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/post/${router.query.id}`,{
        method:'DELETE'
      })
      router.push('/posts')
    }
  return (
    <Layout>
      <Head>{post.title}</Head>
        Post Category 
        <ul>
          <li >
            <h3>{post?.title}<span><button onClick={deletePost}>delete</button></span></h3>
            <p>{post?.content}</p>
          </li>
        </ul>
        
        <button onClick={()=>router.push('/')}>back home</button>
    </Layout>
  )
}
export const getStaticPaths:GetStaticPaths=async ()=>{
  const posts=await loadData('Post')
  return {
       paths:posts.map(p=>({params:{id:`${p.id}`}})),
       fallback:true
  }

}

export const getStaticProps:GetStaticProps<{post:IPost}> = async (context) => {
  const id=typeof context.params?.id === 'string'?context.params?.id:undefined
  const posts= typeof id ==='string'? await loadData('Post',parseInt(id)):undefined
  if(!posts)throw new Error(`post with id ${context.params?.id} is undefined...`);

  return {props:{post:posts[0]}}
}
export default productByCategory


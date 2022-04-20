import { InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import Layout from '../../components/Layout'
import { IPost } from '../../lib/types'

function index() {
    const router = useRouter()

  return (
      <Layout>
    <div>Post index</div>
      
        <button onClick={()=>router.push('/')}>back home</button>

      </Layout>
  )
}

export default index

export const getStaticProps=async ()=>{
  const result=await fetch(`http://localhost:3000/posts`)
  const posts:IPost[]= await result.json()
  console.log("posts here",posts)
  return {props:{posts}}
}
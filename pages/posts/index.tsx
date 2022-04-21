import { InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import Layout from '../../components/Layout'
import { loadPosts } from '../../lib/loadPosts'

function index(props:InferGetStaticPropsType<typeof getStaticProps>) {
    const router = useRouter()

  return (
      <Layout>
    <div>Post index</div>
        <ul>{props.posts.map(p=>(<li key={p.id}>{p.title}</li>))}</ul>
        <button onClick={()=>router.push('/')}>back home</button>

      </Layout>
  )
}

export default index

export const getStaticProps=async ()=>{
    const posts= await loadPosts()
  return {props:{posts}}
}
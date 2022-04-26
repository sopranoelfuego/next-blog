import { InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import postCss from '../../styles/postCss.module.css'
import Layout from '../../components/Layout'
import { loadData } from '../../lib/db'
import { loadPosts } from '../../lib/loadPosts'
import Link from 'next/link'

function index(props:InferGetStaticPropsType<typeof getStaticProps>) {
    const router = useRouter()

  return (
      <Layout>
    <div>Post index:</div>
        <ul>{props.posts.map(p=>(<li className={postCss.li} key={p.id}><Link href="/posts/[id]" as={`/posts/${p.id}`} >{p.title}</Link></li>))}</ul>
        <button onClick={()=>router.push('/')}>back home</button>

      </Layout>
  )
}

export default index

export const getStaticProps=async ()=>{
    const posts= await loadData('Post')
  return {props:{posts}}
}
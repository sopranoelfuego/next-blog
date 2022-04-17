import { useRouter } from 'next/router'
import React from 'react'
import Layout from '../../components/Layout'

function index() {
    const router = useRouter()
  return (
      <Layout>
    <div>Product index</div>
        <button onClick={()=>router.push('/')}>back home</button>

      </Layout>
  )
}

export default index
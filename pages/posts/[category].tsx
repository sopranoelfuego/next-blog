import React from 'react'
import {useRouter} from "next/router"
import Layout from '../../components/Layout'

function productByCategory() {
    const router=useRouter()
  return (
    <Layout>
        product Category {router.query.category}
        <button onClick={()=>router.push('/')}>back home</button>
    </Layout>
  )
}

export default productByCategory
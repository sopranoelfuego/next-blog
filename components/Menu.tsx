import React from 'react'
import Link from 'next/link'
import menuCss from "../styles/menu.module.css"

function Menu() {
  return (
    <div className={menuCss.container}>
        <ul className={menuCss.menu}>
          <li>
            <Link href="/posts">
              Posts
            </Link>

          </li>
           <li>
             <Link href='/posts/create-post'>
               Create Post
             </Link>
           </li>
          <li>
            <Link href="/api/post">
              Post api

            </Link>
          </li>
        </ul>
    </div>
  )
}

export default Menu
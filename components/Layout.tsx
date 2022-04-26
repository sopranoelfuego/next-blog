import React from 'react'
import Menu from './Menu'
import layoutCss from '../styles/layout.module.css'
import Footer from './Footer'

const Layout:React.FC = ({children}) => {
  return (
    <div className={layoutCss.container}>
        <div className={layoutCss.wrapper}>

        <Menu/>
        {children}
        </div>
        <footer><Footer/></footer>
    </div>
  )
}

export default Layout
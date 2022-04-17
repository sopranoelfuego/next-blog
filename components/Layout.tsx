import React from 'react'
import Menu from './Menu'
import layoutCss from './layout.module.css'

const Layout:React.FC = ({children}) => {
  return (
    <div className={layoutCss.container}>
        <div className={layoutCss.wrapper}>

        <Menu/>
        {children}
        </div>
    </div>
  )
}

export default Layout
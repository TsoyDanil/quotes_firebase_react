import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './Layout.css'

const Layout: React.FunctionComponent = (): React.ReactElement => {


    return (
        <div>
            <div className='Layout'>
                <p><strong>COOL ICON</strong></p>
                <div>
                    <nav className='NavLink__container'>
                        <NavLink className={'NavLink'} to={'/'}>HOME</NavLink>
                        <NavLink className={'NavLink'} to={'/quotes/all'}>QUOTES</NavLink>
                        <NavLink className={'NavLink'} to={'/add-form'}>ADD NEW QUOTE</NavLink>
                    </nav>
                </div>
            </div>
            <Outlet/>
        </div>
    )
}

export default Layout
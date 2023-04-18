import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './QuotesLayout.css'

const QuotesLayout: React.FunctionComponent = (): React.ReactElement => {

    return(
        <div className='QuotesContainer'>
                <nav className='QuotesLayout'>
                    <NavLink className={'NavLink__category'} to={'/quotes/all'}>All</NavLink>
                    <NavLink className={'NavLink__category'} to={'/quotes/star-wars'}>Star wars</NavLink>
                    <NavLink className={'NavLink__category'} to={'/quotes/famous-people'}>Famous people</NavLink>
                    <NavLink className={'NavLink__category'} to={'/quotes/saying'}>Saying</NavLink>
                    <NavLink className={'NavLink__category'} to={'/quotes/humor'}>Humor</NavLink>
                    <NavLink className={'NavLink__category'} to={'/quotes/motivational'}>Motivational</NavLink>
                </nav>
            <div className='Outlet__container'>
                <Outlet/>
            </div>
        </div>
    )
}

export default QuotesLayout
import { Avatar } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './Sidebar.css';

function Sidebar() {
    const user = useSelector(selectUser);
    const recentItem = (topic) => (
        <div className='sidebar__recentItem'>
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
    )
  return (
    <div className='sidebar'>
        <div className='sidebar__top'>
            <img src='https://images.unsplash.com/photo-1614850715649-1d0106293bd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGxpbmtlZGluJTIwY292ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' alt='' />
            <Avatar src={user.photoUrl} className='sidebar__avatar' >{user.email[0]}</Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>

        <div className='sidebar__stats'>
            <div className='sidebar__stat'>
                <p>Who Viewed You</p>
                <p className='sidebar__statNumber'>2,543</p>
            </div>
            <div className='sidebar__stat'>
            <p>Views on post</p>
            <p className='sidebar__statNumber'>2,448</p>
            </div>
        </div>

        <div className='sidebar__bottom'>
            <p>Recent</p>
            {recentItem('reactjs')}
            {recentItem('programming')}
            {recentItem('softwareEngineering')}
            {recentItem('design')}
            {recentItem('developer')}
        </div>
    </div>
  )
}

export default Sidebar
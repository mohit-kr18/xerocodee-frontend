import { Outlet, Navigate } from 'react-router-dom';
import classes from './Layout.module.css';
import Sidebar from '../sidebar/Sidebar';
import Header from '../header/Header';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {axios} from '../../api'

const Layout = () =>{

    const token = useSelector(state => state.auth.token)

    useEffect(()=> {
        if(token){
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }
        else{
            delete axios.defaults.headers.common['Authorization'];
        }
    },[token])

    if(!token){
        return <Navigate to='/login'/>
    }

    return (
        <div className={classes.layout}>
            <div className={classes.sidebar_wrapper}>
                <Sidebar />
            </div>
            <div className={classes.header_wrapper}>
                <Header/>
            </div>
            <div className={classes.main_wrapper}>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {axios} from '../api'


  
const useAuth = () => {
    const token = useSelector(state => state.auth.token)
    const navigate = useNavigate()

    useEffect(() => {
		if (token) {
			axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
			navigate('/');
        }
	}, [token]);
}

export default useAuth
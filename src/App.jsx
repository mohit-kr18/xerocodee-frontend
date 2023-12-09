import { BrowserRouter,Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/layout/Layout'
import Dashboard from './components/dashboard/Dashboard'
import Signup from './components/auth/Signup'
import Login from './components/auth/Login'
import GithubLogin from './components/auth/GithubLogin'
import Preferences from './components/auth/Preferences'
import DevelopmentOption from './components/auth/DevelopmentOption'

function App() {
  
  

  return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route element={<Dashboard />} path="/" />
				</Route>
				<Route element={<Signup />} path="/signup" />
				<Route element={<Login />} path="/login" />
				<Route element={<GithubLogin />} path="/auth/github/callback" />
        <Route element = {<Preferences/>} path="/preferences"/>
        <Route element = {<DevelopmentOption/>} path='/option'/>
			</Routes>
		</BrowserRouter>
  );
}

export default App

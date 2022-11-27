import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import User from './components/User';
import UserList from './components/UserList'
import Container from "react-bootstrap/Container"
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import NavBar from "./components/Navbar";
// import { Container } from '@mui/material'
export default function App() {
  return (

    <BrowserRouter>
    <NavBar/>
      <Container>
        <Routes>
          <Route path='/' element={<UserList />} />
          <Route path='/user/new' element={<User/>} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}
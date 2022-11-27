// import { useEffect, useState } from "react"; // use state es para poder crear una variable o un estado 
// import {useNavigate} from 'react-router-dom' 
import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'



export default function UserList() {
  const [usuarios, setUsuarios] = useState([])
  const Navigate = useNavigate()

  const cargarUsuario = async () => {
    const response = await fetch('http://localhost:4000/')
    const data = await response.json()
    setUsuarios(data)
   }

  const borrarUsuario = async (id) => {
    await fetch(`http://localhost:4000/usuario/${id}`, {
      method: "DELETE",
    })
    setUsuarios(
      usuarios.filter(usuario => usuario.id !== id) ) 
    }

   

useEffect(()=>{
  cargarUsuario()
})

  return (

    <>
      <h1>Usuarios</h1>
      {
        usuarios.map((user) => (
          <Card className='estiloCard'  key={user.id}>
            <Card.Body>

              <Card.Title>Usuario numero: {user.id}</Card.Title>

              <Card.Text>Nombre y apellido: {user.nombre}, {user.apellido}</Card.Text>

              <Card.Text>Fecha de nacimiento: {user.fechadenacimiento}</Card.Text>

              <Card.Text>E-mail: {user.email}</Card.Text>

              <Card.Text>Pais y provincia: {user.pais}, {user.provinia}</Card.Text>

              <Button variant="primary" onClick={()=>Navigate(`/usuario/${user.id}/edit`)}  >Editar</Button>
              <Button variant="primary" onClick={() => borrarUsuario(user.id)}>Eliminar</Button>

              </Card.Body>

          </Card>
        )

        )
      }

    </>

  )
}
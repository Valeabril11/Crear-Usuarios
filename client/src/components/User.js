import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';

export default function User() {

    const [user, setUser] = useState({
        nombre: '',
        apellido: '',
        fechaDeNacimiento: '',
        email: '',
        pais: '',
        provinia: '',

    })
    const [editing, setEditing] = useState(false)
    const Navigate = useNavigate()
    const params = useParams()

    const handleSubmit = async (e) => {
        e.preventDefautlt();

        if (editing) {
            const response = await fetch(`http://localhost:4000/usuario/${params.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user)
            })
            const data = await response.json();

        } else {
            const res = await fetch('http://localhost:4000/usuario', {
                method: 'POST',
                body: JSON.stringify(user),
                headers: { 'Content-Type': 'application/json' },
            })
        }
        Navigate('/')
    }
    const handleChange = (e) =>
        setUser({ ...user, [e.target.name]: e.target.value });

    const loadUsuarios = async (id) => {
        const res = await fetch(`http://localhost:4000/usuario/${id}`)
        const data = await res.json();
        setUser({ nombre: data.nombre, apellido: data.apellido, fechaDeNacimiento: data.fechaDeNacimiento, email: data.email, pais: data.pais, provinia: data.provinia })
        setEditing(true)
    }
    useEffect(() => {
        if (params.id)
            loadUsuarios(params.id);
    }, [params.id])

    return (
        <div className='entorno'>
            <Form>
                <Form>{editing ? 'Modificar usuario' : 'Agregar Usuario'}</Form>
                <form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="Nombre">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="¿Cómo te llamas?" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="Apellido">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control type="text" placeholder="Apellido" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="fechaDeNacimiento">
                        <Form.Label>Fecha de nacimiento</Form.Label>
                        <Form.Control type="date" placeholder="fecha de nacimiento" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control type="email" placeholder="E-mail" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="pais">
                        <Form.Label>Pais</Form.Label>
                        <Form.Control type="pais" placeholder="pais" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="pronvincia">
                        <Form.Label>Provincia</Form.Label>
                        <Form.Control type="pronvincia" placeholder="pronvincia" />
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>


                    <Button className='button' variant="primary" type="submit" onClick={handleSubmit}>
                        Submit
                    </Button>
                </form>
            </Form>
        </div>
    );
}


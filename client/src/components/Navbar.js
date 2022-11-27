import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';






export default function NavBar() {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <div className='Nav'>
    <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
      
      <NavDropdown title="Usuario" id="nav-dropdown" className='ClasNav' >
        <NavDropdown.Item >Agregar</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Buscar</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Eliminar</NavDropdown.Item>
  
     
      </NavDropdown>
    </Nav>
    </div>
  );
}

// render(<NavDropdownExample />);

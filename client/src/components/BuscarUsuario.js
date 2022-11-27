import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function User() {
    return (
        <Form>

            <Form.Group className="mb-3" controlId="email">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" placeholder="E-mail" />
            </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>


            <Button className='button' variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default User;
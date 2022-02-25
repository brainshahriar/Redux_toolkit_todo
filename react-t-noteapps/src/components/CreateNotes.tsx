import * as React from 'react';
import { Alert, Button, Form } from 'react-bootstrap';

interface ICreateNotesProps {
}

const CreateNotes: React.FunctionComponent<ICreateNotesProps> = (props) => {
  return (
    <Form className="mt-3 mb-3">
    <Form.Group className="mb-3" controlId="formBasicTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter Title for the Note" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Text</Form.Label>
        <Form.Control placeholder="Enter your notes" as="textarea" rows={3} />
    </Form.Group>
    <Form.Group className="mb-3">
        <Form.Label htmlFor="colorInput">Notes Color</Form.Label>
        <Form.Control type="color" id="colorInput" defaultValue="#dfdfdf" title="Choose your color" />
    </Form.Group>
    <Button type="submit" variant="primary">Submit</Button>
</Form>
  );
};

export default CreateNotes;

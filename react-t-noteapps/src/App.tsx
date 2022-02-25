import React , { useState } from 'react';
import { Container, Row ,Col} from 'react-bootstrap';
import './App.css';
import Header from './components/Header';
import NotesList from './components/NotesList';
import {Note} from './models/note.models'


function App() {
  const [notes,setNotes] = useState<Note[]>([{
    id: (new Date).toString(),
    title : "Meetings",
    text: "Schedule Meetingh with ui & ux team",
    color:"#dfdfdf",
    date:(new Date).toString()
  }]);
  return (
    <>
    <Header/>
    <Container className='mt-5'>
      <Row>
        <Col>
          <NotesList notes={notes}/>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default App;

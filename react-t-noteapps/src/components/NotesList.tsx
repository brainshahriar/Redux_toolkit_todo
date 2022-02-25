import * as React from 'react';
import { Note } from '../models/note.models';

interface INotesListProps {
    notes:Note[],
}

const NotesList: React.FC<INotesListProps> = (notes) => {
  return (
      <>
        <h2 className='mt-3'>NotesList</h2>
      </>
  );
};

export default NotesList;

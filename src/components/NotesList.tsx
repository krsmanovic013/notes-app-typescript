import * as React from "react";
import { Note } from "../models/note.model";
import NoteCard from "./NoteCard";

interface INotesListProps {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const NotesList: React.FC<INotesListProps> = ({ notes, setNotes }) => {
  const handleDelete = (id: string) => {
    setNotes(notes.filter((a) => a.id !== id));
  };

  return (
    <>
      <h2 className="mt-3">Notes</h2>
      <div>
        {notes.map((a) => (
          <NoteCard key={a.id} note={a} handleDelete={handleDelete} />
        ))}
      </div>
    </>
  );
};

export default NotesList;

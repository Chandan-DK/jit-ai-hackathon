// src/components/Notes.js
import React from "react";
import "./Notes.css"; // Adjust the path based on your folder structure
import { FaFilePdf } from "react-icons/fa"; // Import the PDF icon

const notesData = [
  {
    id: 1,
    subject: "Mathematics",
    teacher: "Mr. Johnson",
    chapter: "Algebra",
    noteTitle: "Introduction to Algebra",
    noteLink: "https://example.com/algebra-notes.pdf",
  },
  {
    id: 2,
    subject: "Physics",
    teacher: "Ms. Smith",
    chapter: "Mechanics",
    noteTitle: "Newton's Laws of Motion",
    noteLink: "https://example.com/mechanics-notes.pdf",
  },
  // Add more notes as needed
];

const Notes = () => {
  return (
    <div className="notes-container">
      <h2>Notes</h2>
      {notesData.map((note) => (
        <div key={note.id} className="note-card">
          <div className="note-header">
            <h3>{note.subject}</h3>
            <p>{`Teacher: ${note.teacher}`}</p>
            <p>{`Chapter: ${note.chapter}`}</p>
          </div>
          <div className="note-details">
            <span>{note.noteTitle}</span>
            <a
              href={note.noteLink}
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <FaFilePdf className="pdf-icon" />
              Download PDF
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Notes;

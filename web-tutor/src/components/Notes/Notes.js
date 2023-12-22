import React, { useState } from "react";
import { FaFilePdf } from "react-icons/fa";
import "./Notes.css";

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
  const [uploadedNotes, setUploadedNotes] = useState([]);
  const [fileInput, setFileInput] = useState(null);

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];

    if (uploadedFile) {
      const uploadedNote = {
        id: uploadedNotes.length + 1,
        noteTitle: uploadedFile.name,
        noteLink: URL.createObjectURL(uploadedFile),
      };

      setUploadedNotes([...uploadedNotes, uploadedNote]);
    }
  };

  return (
    <div className="notes-container">
      <h2>Notes</h2>
      <input
        type="file"
        accept=".pdf"
        onChange={handleFileUpload}
        ref={(input) => setFileInput(input)}
        style={{ display: "none" }}
      />
      <button onClick={() => fileInput.click()}>Upload Notes</button>

      {[...notesData, ...uploadedNotes].map((note) => (
        <div key={note.id} className="note-card">
          <div className="note-header">
            <h3>{note.subject || "Notes"}</h3>
            <p>{`Teacher: ${note.teacher || "Prof. Nagraj"}`}</p>
            <p>{`Chapter: ${note.chapter || "CO"}`}</p>
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

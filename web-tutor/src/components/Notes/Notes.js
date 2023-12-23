import React, { useState, useEffect } from "react";
import { FaFilePdf } from "react-icons/fa";
import "./Notes.css";

const hardcodedData = {
  subjects: [
    {
      name: "Mathematics",
      teacher: "Mr. Johnson",
      chapters: [
        {
          name: "Algebra",
          resources: [
            {
              type: "Introduction to Algebra",
              file: "https://drive.google.com/drive/folders/1DTZfqRulZ5lsb5-iyfRNa7YBew9bnKAP",
            },
          ],
        },
      ],
    },
    {
      name: "Physics",
      teacher: "Ms. Smith",
      chapters: [
        {
          name: "Mechanics",
          resources: [
            {
              type: "Newton's Laws of Motion",
              file: "https://drive.google.com/drive/folders/1I9S-MXtBMHaNFKnq2M26M68Cv1ywuZFw",
            },
          ],
        },
      ],
    },
    {
      name: "Computer Organization",
      teacher: "Prof. Nagraj",
      chapters: [
        {
          name: "CO",
          resources: [
            {
              type: "AI-Geospatial",
              file: "https://drive.google.com/drive/folders/1I9S-MXtBMHaNFKnq2M26M68Cv1ywuZFw",
            },
          ],
        },
      ],
    },
  ],
};

const Notes = () => {
  const [uploadedNotes, setUploadedNotes] = useState([]);
  const [fileInput, setFileInput] = useState(null);
  const [fetchedNotes, setFetchedNotes] = useState([]);

  useEffect(() => {
    // Set the state with the hardcoded data
    setFetchedNotes(hardcodedData.subjects);
  }, []); // Run the effect only once on component mount

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

      {[
        ...fetchedNotes,
        ...uploadedNotes.map((uploadedNote) => ({
          // Map the uploaded notes to have a similar structure to fetchedNotes
          name: "Science",
          teacher: "Prof. Nagraj", // You may customize this as needed
          chapters: [
            {
              name: "Bio", // You may customize this as needed
              resources: [
                {
                  type: uploadedNote.noteTitle, // You may customize this as needed
                  file: uploadedNote.noteLink,
                },
              ],
            },
          ],
        })),
      ].map((subject, subjectIndex) => (
        <div key={subjectIndex} className="note-card">
          <div className="note-header">
            <h3>{subject.name || "Notes"}</h3>
            <p>{`Teacher: ${subject.teacher || "Prof. Nagraj"}`}</p>
            {subject.chapters &&
              subject.chapters.map((chapter, chapterIndex) => (
                <div key={chapterIndex}>
                  <p>{`Chapter: ${chapter.name || "CO"}`}</p>
                  {chapter.resources &&
                    chapter.resources.map((resource, resourceIndex) => (
                      <div key={resourceIndex} className="note-details">
                        <span>{resource.type}</span>
                        <a
                          href={resource.file}
                          target="_blank"
                          rel="noopener noreferrer"
                          download
                        >
                          <FaFilePdf className="pdf-icon" />
                          Download PDF
                        </a>
                      </div>
                    ))}
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Notes;
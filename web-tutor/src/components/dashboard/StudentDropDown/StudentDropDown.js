import React, { useState } from 'react';

function StudentDropdown({ students, onSelectStudent }) {
  const [selectedStudent, setSelectedStudent] = useState('');

  const handleSelectChange = (e) => {
    setSelectedStudent(e.target.value);
    onSelectStudent(e.target.value);
  };

  return (
    <div>
      <label>Select Student:</label>
      <select value={selectedStudent} onChange={handleSelectChange}>
        <option value="">Select a student</option>
        {students.map((student) => (
          <option key={student.id} value={student.id}>
            {student.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default StudentDropdown;

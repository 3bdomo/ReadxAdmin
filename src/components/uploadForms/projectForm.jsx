import React, { useState } from 'react';
import "./styleForms.css";
import { X } from 'react-bootstrap-icons';
import uploadInstance from '../../Api/uploads';

const ProjectForm = ({ setShow }) => {
  const [name, setName] = useState("");
  const [output, setOutput] = useState("");
  const [field, setField] = useState("");
  const [description, setDescription] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [teamMember1, setTeamMember1] = useState("");
  const [teamMember2, setTeamMember2] = useState("");
  const [teamMember3, setTeamMember3] = useState("");
  const [teamMember4, setTeamMember4] = useState("");
  const [teamMember5, setTeamMember5] = useState("");
  const [teamMember6, setTeamMember6] = useState("");
  const [teamMember7, setTeamMember7] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let f = await uploadInstance.uploadProject(
        name,
        output,
        field,
        description,
        year, // Replacing studentId with year
        technologies,
        teamMember1,
        teamMember2,
        teamMember3,
        teamMember4,
        teamMember5,
        teamMember6,
        teamMember7
      );

      setShow(false);
      if (f) alert("Project uploaded successfully!");
    } catch (error) {
      alert("Error uploading project: " + error.message);
    }
  };

  // Define the range of years you want to display
  const startYear = 2015;
  const endYear = new Date().getFullYear() + 2;
  const years = [];

  for (let i = startYear; i <= endYear; i++) {
    years.push(i);
  }

  return (
    <div className="allpage">
      <div className='form formbok'>
        <div className='x' onClick={() => setShow(false)}>
          <X />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Output"
              value={output}
              onChange={(e) => setOutput(e.target.value)}
              required
            />
          </div>
          <div className="row">
            <input
              type="text"
              placeholder="Field"
              value={field}
              onChange={(e) => setField(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Technologies"
              value={technologies}
              onChange={(e) => setTechnologies(e.target.value)}
              required
            />
          </div>
          <div className="row">
            <input
              type="text"
              placeholder="Team Member 1"
              value={teamMember1}
              onChange={(e) => setTeamMember1(e.target.value)}
              required
            />
            <select
              id="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              required
            >
              <option value="">Select Year</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          <div className="row">
            <input
              type="text"
              placeholder="Team Member 2"
              value={teamMember2}
              onChange={(e) => setTeamMember2(e.target.value)}
            />
            <input
              type="text"
              placeholder="Team Member 3"
              value={teamMember3}
              onChange={(e) => setTeamMember3(e.target.value)}
            />
          </div>
          <div className="row">
            <input
              type="text"
              placeholder="Team Member 4"
              value={teamMember4}
              onChange={(e) => setTeamMember4(e.target.value)}
            />
            <input
              type="text"
              placeholder="Team Member 5"
              value={teamMember5}
              onChange={(e) => setTeamMember5(e.target.value)}
            />
          </div>
          <div className="row">
            <input
              type="text"
              placeholder="Team Member 6"
              value={teamMember6}
              onChange={(e) => setTeamMember6(e.target.value)}
            />
            <input
              type="text"
              placeholder="Team Member 7"
              value={teamMember7}
              onChange={(e) => setTeamMember7(e.target.value)}
            />
          </div>
          <div className="inputDetails">
            <textarea
              className="inputDetails"
              placeholder="Project Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="row">
            <button type="submit">Create Project</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectForm;

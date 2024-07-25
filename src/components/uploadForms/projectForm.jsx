import React, { useState } from 'react';
import "./styleForms.css";
import { X } from 'react-bootstrap-icons';
import uploadInstance from '../../Api/uploads';

const ProjectForm = ({ setShow }) => {
  const [name, setName] = useState("");
  const [output, setOutput] = useState("");
  const [field, setField] = useState("");
  const [description, setDescription] = useState("");
  const [studentId, setStudentId] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [teamMember1, setteamMember1] = useState("");
  const [teamMember2, setteamMember2] = useState("");
  const [teamMember3, setteamMember3] = useState("");
  const [teamMember4, setteamMember4] = useState("");
  const [teamMember5, setteamMember5] = useState("");
  const [teamMember6, setteamMember6] = useState("");
  const [teamMember7, setteamMember7] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

     let f= await uploadInstance.uploadProject(
        name,
        output,
        field,
        description,
        studentId,
        technologies,
        teamMember1,
        teamMember2,
        teamMember3,
        teamMember4,
        teamMember5,
        teamMember6,
        teamMember7, 
      );

      setShow(false);
      if(f)
      alert("Project uploaded successfully!");
    } catch (error) {
      alert("Error uploading project: " + error.message);
    }
  };

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
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="row">
            <input
              type="text"
              placeholder="Student ID"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
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
              onChange={(e) => setteamMember1(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Team Member 2"
              value={teamMember2}
              onChange={(e) => setteamMember2(e.target.value)}
              required
            />
          </div>

          <div className="row">
            <input
              type="text"
              placeholder="Team Member 3"
              value={teamMember3}
              onChange={(e) => setteamMember3(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Team Member 4"
              value={teamMember4}
              onChange={(e) => setteamMember4(e.target.value)}
              required
            />
          </div>
          <div className="row">
            <input
              type="text"
              placeholder="Team Member 5"
              value={teamMember5}
              onChange={(e) => setteamMember5(e.target.value)}
              
            />
            <input
              type="text"
              placeholder="Team Member 6"
              value={teamMember6}
              onChange={(e) => setteamMember6(e.target.value)}
              
            />
          </div>
          <div className="row">
            <input
              type="text"
              placeholder="Team Member 7"
              value={teamMember7}
              onChange={(e) => setteamMember7(e.target.value)}
              
            />
          
          </div>
       
        

          <div className="row" >
            <button type="submit">Create Project</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectForm;

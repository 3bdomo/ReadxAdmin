import React, { useState } from 'react';
import { X } from 'react-bootstrap-icons';
import './newproject.css';
import { updateProject } from '../../Api/updateProject';
import { Link } from 'react-router-dom';

const NewProject = ({ p, setShow, setEdited, Edited, isNew }) => {
    const [edit, setEdit] = useState(false);
    const [details, setDetails] = useState(p.description);
    const [output, setOutput] = useState(p.output);
    const [technologies, setTechnologies] = useState(p.used_technologies);
    const [teamMember1, setTeamMember1] = useState(p.teamMember1);
    const [teamMember2, setTeamMember2] = useState(p.teamMember2);
    const [teamMember3, setTeamMember3] = useState(p.teamMember3);
    const [teamMember4, setTeamMember4] = useState(p.teamMember4);
    const [teamMember5, setTeamMember5] = useState(p.teamMember5);
    const [teamMember6, setTeamMember6] = useState(p.teamMember6);
    const [teamMember7, setTeamMember7] = useState(p.teamMember7);

    const handleSave = async () => {
        try {
            await updateProject(p.id, {
                ...p,
                description: details,
                output,
                used_technologies: technologies,
                teamMember1,
                teamMember2,
                teamMember3,
                teamMember4,
                teamMember5,
                teamMember6,
                teamMember7,
            });
            setEdited(!Edited);
            setEdit(false);
        } catch (error) {
            console.error('Error updating project:', error);
        }
    };

    const teamMembers = [
        p.teamMember1,
        p.teamMember2,
        p.teamMember3,
        p.teamMember4,
        p.teamMember5,
        p.teamMember6,
        p.teamMember7
    ].filter(member => member); // Filter out any null or empty values

    return (
        <div className='allpage'>
            <div className="projectttt">
                <div className='x' onClick={() => setShow(false)}>
                    <X />
                </div>

                <div className='pName'>
                    <h1>{p.name}</h1>
                </div>

                {isNew && (
                    <Link to={`/checkplagiarism/${p.id}/${p.description}/${p.name}`}>
                        <div className='chckP'>
                            <h5>Check Plagiarism</h5>
                        </div>
                    </Link>
                )}

                <div className="lineinfo">
                    <h5>Status</h5>
                    <h4>{p.status}</h4>
                </div>
                <div className="lineinfo">
                    <h5>Field</h5>
                    <h4>{p.field}</h4>
                </div>
                <div className="lineinfo">
                    <h5>Date</h5>
                    <h4>{p.year}</h4>
                </div>
                <div className="lineinfo">
                    <h5>Technologies Used</h5>
                    <h4>{technologies}</h4>
                </div>
                <div className="lineinfo">
                    <h5>Faculty</h5>
                    <h4>{p.faculty}</h4>
                </div>

                <div className="Projectdetails">
                    <h3>Project Details</h3>
                    <div className="btns">
                        <button onClick={() => setEdit(true)}>Edit</button>
                        <button onClick={handleSave}>Save</button>
                    </div>
                </div>
                <div className="inputDetails">
                    <textarea
                        disabled={!edit}
                        id="inptDetails"
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                    />
                </div>

                <div className="teamMembers">
                    <h5>Team Members</h5>
                    <div className="teamMembersRow">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="teamMember">
                                {member}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewProject;

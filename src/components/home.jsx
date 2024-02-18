import React, { useState } from 'react';
import style from '../styles/home.module.css';

function HomePage() {
  const [activeSection, setActiveSection] = useState(null);
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [dob, setDOB] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [company, setCompany] = useState('');
  const [experience, setExperience] = useState('');
  const [address, setAddress] = useState('');
  const [declarationText, setDeclarationText] = useState('');

  const showForm = (section) => {
    setActiveSection(section);
  };

  const handleSubmitPersonalInformation = (event) => {
    event.preventDefault();
  };

  const handleSubmitExperience = (event) => {
    event.preventDefault();
  };

  const handleSubmitAddress = (event) => {
    event.preventDefault();

  };

  const handleSubmitDeclaration = (event) => {
    event.preventDefault();
    setDeclarationText(`Name: ${name}, Contact: ${contact}, DOB: ${dob}, Job Title: ${jobTitle}, Company: ${company}, Experience: ${experience}, Address: ${address}`);
    setActiveSection('declaration');
  };

  const renderForm = () => {
    switch (activeSection) {
      case 'personalInformation':
        return (
          <form onSubmit={handleSubmitPersonalInformation}>
            <fieldset className={style.personal}>
              <legend><h3>Personal Information</h3></legend>
              <br />
              <label htmlFor='name'>Full Name: </label>
              <input type="text" id='name' value={name} onChange={(e) => setName(e.target.value)} />
              <br />
              <br />
              <br />
              <label htmlFor='contact'>Contact: </label>
              <input type="text" id='contact' value={contact} onChange={(e) => setContact(e.target.value)} />
              <br />
              <br />
              <br />
              <label htmlFor='dob'>DOB: </label>
              <input type="date" id='dob' value={dob} onChange={(e) => setDOB(e.target.value)} />
              <br />
              <br />
              <br />
              <button type="submit">Submit</button>
            </fieldset>
          </form>
        );
      case 'experience':
        return (
          <form onSubmit={handleSubmitExperience}>
            <fieldset className={style.personal}>
              <legend><h3>Work Experience</h3></legend>
              <br />
              <label htmlFor='job'>Job Title: </label>
              <input type="text" id='job' value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
              <br />
              <br />
              <br />
              <label htmlFor='company'>Company: </label>
              <input type="text" id='company' value={company} onChange={(e) => setCompany(e.target.value)} />
              <br />
              <br />
              <br />
              <label htmlFor='exp'>Years of Experience: </label>
              <input type="number" id='exp' value={experience} onChange={(e) => setExperience(e.target.value)} />
              <br />
              <br />
              <br />
              <button type="submit">Submit</button>
            </fieldset>
          </form>
        );
      case 'address':
        return (
          <form onSubmit={handleSubmitAddress}>
            <fieldset className={style.personal}>
              <legend><h3>Add Your Address</h3></legend>
              <label htmlFor='add'>Address :</label>
              <input type="text" id='add' value={address} onChange={(e) => setAddress(e.target.value)} />
              <br />
              <br />
              <br />
              <button type="submit">Submit</button>
            </fieldset>
          </form>
        );
      case 'declaration':
        return (
          <form onSubmit={handleSubmitDeclaration}>
            <fieldset className={style.personal}>
              <legend><h3>Declaration</h3></legend>
              <p>{declarationText}</p>
              <br />
              <button type="submit">Submit</button>
            </fieldset>
          </form>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div className={style.header}>
        <h1><em>Welcome to CV maker</em></h1>
      </div>

      <div className={style.side}>
        <h4 onClick={() => showForm('personalInformation')} className={activeSection === 'personalInformation' ? style.active : ''}>
          Personal Information
        </h4>
        <h4 onClick={() => showForm('experience')} className={activeSection === 'experience' ? style.active : ''}>
          Experience
        </h4>
        <h4 onClick={() => showForm('address')} className={activeSection === 'address' ? style.active : ''}>
          Address
        </h4>
        <h4 onClick={() => showForm('declaration')} className={activeSection === 'declaration' ? style.active : ''}>
          Declaration
        </h4>
      </div>

      <div className={style.forms}>
        {renderForm()}
      </div>
    </div>
  );
}

export default HomePage;

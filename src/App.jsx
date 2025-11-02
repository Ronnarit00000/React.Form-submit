import { useState } from "react";

export default function App() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastname]   = useState("");
  const [email, setEmail]         = useState("");
  const [contact, setContact]     = useState("");
  const [gender, setGender]       = useState("male");
  const [subjects, setSubjects]   = useState({ english: true, math: false, physics: false });
  const [resume, setResume] = useState("");
  const [url, setUrl] =       useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [about, setAbout]   = useState(""); 

  const handleCheckbox = (sub) => {
    setSubjects((prev) => ({
      ...prev, 
      [sub]: !prev[sub]
    }))
  };

  const handleReset = () => {
    setFirstName("");
    setLastname("");
    setEmail("");
    setContact("");
    setGender("");
    setSubjects({ english: true, math: false, physics: false });
    setResume("");
    setUrl("");
    setSelectedOption("");
    setAbout("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      firstname,
      lastname,
      email,
      contact,
      gender,
      subjects,
      resume,
      url,
      selectedOption,
      about
    })
  };

  return (
    <main className="GContainer">
      <form className="CForm" onSubmit={handleSubmit}>
        <h2 className="CForm__CForm-head">Form in React</h2>

        {/* Firstname */}
        <section className="CForm__Form-input">
          <h4>Firstname</h4>
          <input 
            required
            type="text" 
            name="firstname" 
            id="firstname" 
            placeholder="Enter Firstname" 
            value={firstname} 
            onChange={(e) => setFirstName(e.target.value)}/>
        </section>

        {/* Lastname */}
        <section className="CForm__Form-input">
          <h4>Lastname</h4>
          <input 
            required
            type="text" 
            name="lastname" 
            id="lastname" 
            placeholder="Enter Lastname" 
            value={lastname} 
            onChange={(e) => setLastname(e.target.value)}/>
        </section>

        {/* Email */}
        <section className="CForm__Form-input">
          <h4>Email</h4>
          <input 
            required
            type="email" 
            name="email" 
            id="email" 
            placeholder="Enter Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}/>
        </section>

        {/* Contact phone number */}
        <section className="CForm__Form-input">
          <h4>Contact</h4>
          <input 
            required
            type="number" 
            name="contact" 
            id="contact" 
            placeholder="Enter Phone number" 
            value={contact} 
            onChange={(e) => setContact(e.target.value)}/>
        </section>

        {/* Gender */}
        <section className="CForm__Form-radio">
          <h4>Gender</h4>
          <label htmlFor="male">
            <input
              required
              type="radio" 
              name="gender" 
              id="gender" 
              value="male"
              checked={gender === "male"}
              onChange={(e) => setGender(e.target.value)}/>
            male
          </label>

          <label htmlFor="female">
            <input 
              required
              type="radio" 
              name="gender" 
              id="gender" 
              value="female"
              checked={gender === "female"}
              onChange={(e) => setGender(e.target.value)}/>
            female
          </label>

          <label htmlFor="other">
            <input 
              required
              type="radio" 
              name="gender" 
              id="gender" 
              value="other"
              checked={gender === "other"}
              onChange={(e) => setGender(e.target.value)}/>
            other
          </label>
        </section>

        {/* Subject */}
        <section className="CForm__Form-checkbox">
          <h4>Your best Subject</h4>
          <label htmlFor="english">
            <input 
              type="checkbox" 
              name="english" 
              id="english" 
              value="english"
              checked={subjects.english === true}
              onChange={() => handleCheckbox("english")}
              />
              english
          </label>

          <label htmlFor="math">
            <input 
              type="checkbox" 
              name="math" 
              id="math" 
              value="math"
              checked={subjects.math === true}
              onChange={() => handleCheckbox("math")}
              />
              math
          </label>

          <label htmlFor="physics">
            <input 
              type="checkbox" 
              name="physics" 
              id="physics" 
              value="physics"
              checked={subjects.physics === true}
              onChange={() => handleCheckbox("physics")}
              />
              physics
          </label>
        </section>

        {/* Resume */}
        <section className="CForm__Form-input">
          <h4>Upload Resume</h4>
          <input 
            required
            type="file"
            name="file"
            id="file"
            placeholder="Enter Upload File"
            onChange={(e) => setResume(e.target.files[0])}
          />
        </section>

        {/* Resume */}
        <section className="CForm__Form-input">
          <h4>Enter URL</h4>
          <input 
            required
            type="url"
            name="url"
            id="url"
            placeholder="Enter url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </section>

        {/* select */}
        <section className="CForm__Form-select">
          <h4>Select your choice</h4>
          <select
            name="select"
            id="select"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)} >
            <option>Select your Ans</option>
            <optgroup label="Beginers">
              <option value="HTML">HTML</option>
              <option value="CSS">CSS</option>
              <option value="JavaScript">JavaScript</option>
            </optgroup>
            <optgroup label="Advance">
              <option value="React">React</option>
              <option value="Node">Node</option>
              <option value="Express">Express</option>
              <option value="MongoDB">MongoDB</option>
            </optgroup>
          </select>
        </section>

        {/* about */}
        <section className="CForm__Form-select">
          <h4>Select your About</h4>
          <textarea
              name="about"
              id="about"
              cols="30"
              rows="10"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              placeholder="About your self"
              required></textarea>
        </section>

        <div className="CForm-submit">
          <input type="button" value="Reset" onClick={handleReset}/>
          <input type="submit" value="submit" />
        </div> 
      </form>
    </main>
  )
}
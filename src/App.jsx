import { useState } from "react"
import {
  Form, 
  Input,
  Select,
  Textarea
} from "./components/Form"

export default function App() {
  const [firstname, setFirstname] = useState("");
  const [lastname,  setLastname] = useState("");
  const [email,     setEmail] = useState("");
  const [contact,   setContact] = useState("");
  const [gender,    setGender] = useState("male");
  const [subjects,  setSubjects] = useState(["english"]);
  const [resume,    setResume] = useState("");
  const [url,       setUrl] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [about, setAbout] = useState("");

  function handleCheckBox(e){
    let target = e.target;
    let name   = target.name;
    let isSubjects = subjects.some((item) => item === name);

    // create toggle add and delete subject
    if(!isSubjects){
      setSubjects((prev) => [...prev, name])
    }else{
      setSubjects((prev) => prev.filter((item) => item != name))
    }
  };

  function handleReset(){
    setFirstname("");
    setLastname("");
    setEmail("");
    setContact("");
    setGender("male");
    setSubjects(["english"]);
    setResume("");
    setUrl("");
    setSelectedOption("");
    setAbout("");
  };

  function handleSubmit(e){
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
    });
  };

  return (
    <main className="GContainer">
      <Form className="CForm" onSubmit={handleSubmit}>
        <h2 className="CForm__CForm-head">Form in React</h2>
        <Input 
          type="text"
          name={{ 
            className: "CForm__Form-input",
            id: "firstname", 
            name: "firstname", 
            label: "Firstname", 
            placeholder: "Enter Your Firstname" }} 
          action={{ 
            value: firstname, 
            onChange: (e) => setFirstname(e.target.value) }}
        />

        <Input 
          type="text"
          name={{ 
            className: "CForm__Form-input", 
            id: "lasttname", 
            name: "lastname", 
            label: "Lastname", 
            placeholder: "Enter Your Lastname" }} 
          action={{ 
            value: lastname, 
            onChange: (e) => setLastname(e.target.value) }}
        />

        <Input 
          type="email"
          name={{ 
            className: "CForm__Form-input", 
            id: "email", 
            name: "email", 
            label: "Email", 
            placeholder: "Enter Your Email" }} 
          action={{ 
            value: email, 
            onChange: (e) => setEmail(e.target.value) }}
        />

        <Input 
          type="number"
          name={{ 
            className: "CForm__Form-input", 
            id: "contact", 
            name: "contact", 
            label: "Contact", 
            placeholder: "Enter Your Phone Number" }} 
          action={{ 
            value: contact, 
            onChange: (e) => setContact(e.target.value) }}
        />
        
        <Input 
          type="radio"
          name={{ 
            className: "CForm__Form-radio", 
            title: "Gender"}}
          action={{
            onChange:(e) => setGender(e.target.value),
            list: [
              {choose : { 
                value: "male",   
                id: "male",   
                label: "male",   
                checked: gender === "male" }},
              {choose : { 
                value: "female", 
                id: "female", 
                label: "female", 
                checked: gender === "female" }},
              {choose : { 
                value: "other",  
                id: "other",  
                label: "other",  
                checked: gender === "other" }}
            ]
          }}
        />

        <Input 
          type="checkbox"
          name={{ 
            className: "CForm__Form-checkbox", 
            title: "Your best Subject"}}
          action={{
            list: [
              {choose : { 
                value: "english",  
                name: "english", 
                id: "english", 
                label: "english", 
                onChange:handleCheckBox, 
                checked: subjects.some((item) => item === "english")}},
              {choose : { 
                value: "math",     
                name: "math",    
                id: "math",    
                label: "math",    
                onChange:handleCheckBox, 
                checked: subjects.some((item) => item === "math")}},
              {choose : { 
                value: "physice",  
                name: "physice", 
                id: "physice", 
                label: "physice",
                onChange:handleCheckBox, 
                checked: subjects.some((item) => item === "physice")}}
            ]
          }}
        />

        <Input 
          type="file"
          name={{
            className: "CForm__Form-file", 
            label: "Upload resume", 
            id:"resume", 
            name: "resume"}}
          action={{ 
            onChange: (e) => setResume(e.target.value)}}
        />

        <Input 
          type="url"
          name={{
            className: "CForm__Form-url", 
            label: "Enter URL", 
            id: "url", 
            name: "url", 
            placeholder:"Enter url"}}
          action={{
            value: url,
            onChange: (e) => setUrl(e.target.value)}}
       />

       <Select 
          name={{
            className: "CForm__Form-select", 
            id:"select", 
            label: "Select Your Choice"}}
          action={{
            list: {
              Beginers: ["html", "css", "javascript"],
              Advance: ["react", "node", "express", "mongodb"]
            },
            defaultValue:"Select your Ans",
            value: selectedOption,
            onChange: (e) => setSelectedOption(e.target.value)}}
       />

       <Textarea 
          name={{
            className: "CForm__Form-textarea", 
            id: "about", 
            name: "about", 
            label: "About", 
            placeholder: "About me"}}
          action={{
            value: about,
            onChange: (e) => setAbout(e.target.value)}}
       />

        <div className="CForm-submit">
          <input type="button" value="Reset" onClick={handleReset}/>
          <input type="submit" value="submit"/>
        </div> 
      </Form>
    </main>
  )
}
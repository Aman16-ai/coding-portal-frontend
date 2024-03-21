import React, { useState } from "react";
import { createSubmission } from "../services/SubmissionService";
import { CircularProgress } from "@mui/material";


// Due to shortest of time implementing this code language as static data otherwise this language come from jugde0 getLanguages api
const codingLanguages = [
  { name: "JavaScript", value: 93 },
  { name: "Python", value: 92 },
  { name: "C++", value: 52 },
];
export default function Home() {
  const [username, setUsername] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState(93);
  const [stdin, setStdin] = useState("");
  const [sourceCode, setSourceCode] = useState("");
  const [isLoading,setIsLoading] = useState(false)
  const handleSubmit = async(event) => {
    event.preventDefault();
    // Do something with the form data, like sending it to a server
    const payload = {
      username: username,
      preferredCodeLanguage: selectedLanguage,
      standardInput: stdin,
      sourceCode: sourceCode,
    };
    console.log("Submitted:", payload);
    setIsLoading(true)
    const result = await createSubmission(payload)
    setIsLoading(false)
    if(result) {
        alert("Submission created")
    }
    else {
        alert("Failed to create submission")
    }
  };
  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>Submit Your Code</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            marginBottom: "10px",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
        <select
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
          style={{
            marginBottom: "10px",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        >
          <option value="">Select Coding Language</option>
          {codingLanguages.map((language, index) => (
            <option key={index} value={language.value}>
              {language.name}
            </option>
          ))}
        </select>
        <textarea
          placeholder="Standard Input"
          value={stdin}
          onChange={(e) => setStdin(e.target.value)}
          style={{
            marginBottom: "10px",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
        <textarea
          placeholder="Source Code"
          value={sourceCode}
          onChange={(e) => setSourceCode(e.target.value)}
          style={{
            marginBottom: "10px",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            height: "200px",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {isLoading ? <CircularProgress color="warning"/> : "Submit"}
        </button>
      </form>
    </div>
  );
}

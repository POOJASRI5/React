import React, { useState } from "react";

// Reusable input
function TextInput({ label, name, type, value, onChange }) {
  return (
    <div>
      <label>{label}: </label>
      <input type={type} name={name} value={value} onChange={onChange} />
    </div>
  );
}

function Task6() {
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const [preview, setPreview] = useState(null);

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setPreview(data);
  }

  function clearForm() {
    setData({ name: "", email: "", password: "" });
    setPreview(null);
  }

  const emailValid = data.email.includes("@");

  return (
    <div>
      <h2>Signup Form</h2>

      <form onSubmit={handleSubmit}>
        <TextInput label="Name" name="name" type="text" value={data.name} onChange={handleChange} />
        <TextInput label="Email" name="email" type="email" value={data.email} onChange={handleChange} />
        <TextInput label="Password" name="password" type="password" value={data.password} onChange={handleChange} />

        <button disabled={!data.name || !emailValid || !data.password}>
          Submit
        </button>

        <button type="button" onClick={clearForm}>
          Clear
        </button>
      </form>

      {preview && (
        <div>
          <h3>Preview</h3>
          <p>Name: {preview.name}</p>
          <p>Email: {preview.email}</p>
          <p>Password: {preview.password}</p>
        </div>
      )}
    </div>
  );
}

export default Task6;
import React from "react";

function Button({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
}

function Header({ title }) {
  return <h1>{title}</h1>;
}

function Footer({ text }) {
  return <footer>{text}</footer>;
}

function Layout({ children }) {
  return (
    <div>
      <Header title="My Website" />
      {children}
      <Footer text="© 2026 My Website" />
    </div>
  );
}

function UserCard({ name, age }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Age: {age}</p>
    </div>
  );
}

function Task1() {

  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <Layout>
      <h2>Welcome Page</h2>
      <UserCard name="Poojasri" age="20" />
      <Button label="Click Me" onClick={handleClick} />
    </Layout>
  );
}

export default Task1;
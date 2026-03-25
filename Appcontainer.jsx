import React, { useState } from "react";

const APP_NAME = "My Vite React App";

const formatDate = () => {
  return new Date().toLocaleDateString();
};

function useToggle(initial = false) {
  const [state, setState] = useState(initial);
  const toggle = () => setState(!state);
  return [state, toggle];
}

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        {children}
        <button onClick={onClose} style={styles.closeBtn}>
          Close
        </button>
      </div>
    </div>
  );
}

function PageOne() {
  const [open, toggle] = useToggle();

  return (
    <div style={styles.page}>
      <h2>Page One</h2>
      <button onClick={toggle}>Open Modal</button>

      <Modal isOpen={open} onClose={toggle}>
        <h3>Hello from Page One</h3>
        <p>Date: {formatDate()}</p>
      </Modal>
    </div>
  );
}

function PageTwo() {
  const [open, toggle] = useToggle();

  return (
    <div style={styles.page}>
      <h2>Page Two</h2>
      <button onClick={toggle}>Open Modal</button>

      <Modal isOpen={open} onClose={toggle}>
        <h3>Hello from Page Two</h3>
        <p>{APP_NAME}</p>
      </Modal>
    </div>
  );
}

function useAppStore() {
  const [page, setPage] = useState("one");
  return { page, setPage };
}

export default function AppContainer() {
  const { page, setPage } = useAppStore();

  return (
    <div style={styles.container}>
      <h1>{APP_NAME}</h1>

      <div style={styles.nav}>
        <button onClick={() => setPage("one")}>Page One</button>
        <button onClick={() => setPage("two")}>Page Two</button>
      </div>

      {page === "one" ? <PageOne /> : <PageTwo />}
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
  },
  nav: {
    marginBottom: "20px",
  },
  page: {
    border: "1px solid #ddd",
    padding: "20px",
    borderRadius: "10px",
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    minWidth: "250px",
  },
  closeBtn: {
    marginTop: "10px",
  },
};
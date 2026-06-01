import { useState } from 'react';

function App() {
  const [message] = useState('Welcome to OctoFit Tracker');

  return (
    <div className="container py-5">
      <header className="mb-4">
        <h1 className="display-5">OctoFit Tracker</h1>
        <p className="lead">A modern fitness tracker UX built with React, Vite, and Bootstrap.</p>
      </header>

      <section className="card shadow-sm">
        <div className="card-body">
          <h2 className="card-title">Frontend status</h2>
          <p className="card-text">{message}</p>
          <p className="text-muted">Running on port <strong>5173</strong>.</p>
        </div>
      </section>
    </div>
  );
}

export default App;

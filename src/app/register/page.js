// components/Register.js
import React from 'react';

const Register = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Register</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nama</label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="mb-3">
          <label htmlFor="nim" className="form-label">NIM</label>
          <input type="text" className="form-control" id="nim" />
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
}

export default Register;

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // Input states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");

  // Local collection (like Power Apps collection)
  const [records, setRecords] = useState([]);

  // Add record to local collection
  const addRecord = () => {
    if (!name || !email || !department) {
      alert("All fields are required");
      return;
    }

    const newRecord = {
      id: records.length + 1,
      name,
      email,
      department
    };

    setRecords([...records, newRecord]);

    // Clear inputs
    setName("");
    setEmail("");
    setDepartment("");
  };

  return (
    <div className="container mt-5">
      <h3 className="mb-4 text-center">Azure Static App – Local Collection Demo</h3>

      {/* Input Form */}
      <div className="card p-4 mb-4 shadow-sm">
        <div className="row g-3">
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="col-md-4">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            />
          </div>
        </div>

        <div className="text-end mt-3">
          <button className="btn btn-primary" onClick={addRecord}>
            Add to Collection
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="card p-3 shadow-sm">
        <h5 className="mb-3">Local Collection (Grid)</h5>

        {records.length === 0 ? (
          <p className="text-muted">No records added</p>
        ) : (
          <table className="table table-bordered table-striped">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Department</th>
              </tr>
            </thead>
            <tbody>
              {records.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.department}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default App;
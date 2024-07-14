import React from 'react';
import './EditProfile.css'; // Custom CSS for additional styling

const EditProfile = () => {
  return (
    <div className="container1 d-flex align-items-center justify-content-center min-vh-100">
      <div className="form-container">
        <h1>Edit Profile</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="jobTitle" className="form-label">Job Title</label>
            <input type="text" className="form-control" id="jobTitle" placeholder="List your current job title" />
          </div>

          <div className="row mb-3">
            <div className="col">
              <label htmlFor="firstName" className="form-label">First Name</label>
              <input type="text" className="form-control" id="firstName" placeholder="First name" />
            </div>
            <div className="col">
              <label htmlFor="lastName" className="form-label">Last Name</label>
              <input type="text" className="form-control" id="lastName" placeholder="Last name" />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="emailAddress" className="form-label">Email Address</label>
            <input type="email" className="form-control" id="emailAddress" placeholder="Email address" />
          </div>

          <div className="row mb-3">
            <div className="col">
              <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
              <input type="text" className="form-control" id="phoneNumber" placeholder="Phone number" />
            </div>
            <div className="col">
              <label htmlFor="linkedIn" className="form-label">LinkedIn</label>
              <input type="text" className="form-control" id="linkedIn" placeholder="LinkedIn URL" />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="summary" className="form-label">Summary</label>
            <textarea className="form-control" id="summary" rows="3" placeholder="Add your summary or objective here"></textarea>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;

//import { useState } from 'react';
import '../index.css'

const UserProfile = () => {
  // const [formData, setFormData] = useState({
  //   name: 'John Doe',
  //   email: 'user@example.com',
  //   currentPassword: '',
  //   newPassword: '',
  //   confirmPassword: '',
  // });

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Form submitted:', formData);
  // };

  return (
    <section className="section main-section">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mb-6">
        {/* Edit Profile */}
        {/* <div className="card">
          <header className="card-header">
            <p className="card-header-title">
              <span className="icon">
                <i className="mdi mdi-account-circle"></i>
              </span>
              Edit Profile
            </p>
          </header>
          <div className="card-content">
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label className="label">Avatar</label>
                <div className="field-body">
                  <div className="field file">
                    <label className="upload control">
                      <a className="button blue">Upload</a>
                      <input type="file" />
                    </label>
                  </div>
                </div>
              </div>
              <hr />
              <div className="field">
                <label className="label">Name</label>
                <div className="field-body">
                  <div className="field">
                    <div className="control">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="input"
                        required
                      />
                    </div>
                    <p className="help">Required. Your name</p>
                  </div>
                </div>
              </div>
              <div className="field">
                <label className="label">E-mail</label>
                <div className="field-body">
                  <div className="field">
                    <div className="control">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="input"
                        required
                      />
                    </div>
                    <p className="help">Required. Your e-mail</p>
                  </div>
                </div>
              </div>
              <hr />
              <div className="field">
                <div className="control">
                  <button type="submit" className="button green">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div> */}

        {/* Profile */}
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">
              <span className="icon">
                <i className="mdi mdi-account"></i>
              </span>
              Profile
            </p>
          </header>
          <div className="card-content">
            <div className="image w-48 h-48 mx-auto">
              <img
                src="https://avatars.dicebear.com/v2/initials/john-doe.svg"
                alt="John Doe"
                className="rounded-full"
              />
            </div>
            {/* <hr />
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input type="text" readOnly value={formData.name} className="input is-static" />
              </div>
            </div>
            <hr /> */}
            <div className="field">
              <label className="label">E-mail</label>
              <div className="control">
                {/* <input type="text" readOnly value={formData.email} className="input is-static" /> */}
                <input type="text" readOnly value={""} className="input is-static" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Change Password */}
      {/* <div className="card">
        <header className="card-header">
          <p className="card-header-title">
            <span className="icon">
              <i className="mdi mdi-lock"></i>
            </span>
            Change Password
          </p>
        </header>
        <div className="card-content">
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label className="label">Current password</label>
              <div className="control">
                <input
                  type="password"
                  name="currentPassword"
                  value={formData.currentPassword}
                  onChange={handleInputChange}
                  className="input"
                  required
                />
              </div>
              <p className="help">Required. Your current password</p>
            </div>
            <hr />
            <div className="field">
              <label className="label">New password</label>
              <div className="control">
                <input
                  type="password"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleInputChange}
                  className="input"
                  required
                />
              </div>
              <p className="help">Required. New password</p>
            </div>
            <div className="field">
              <label className="label">Confirm password</label>
              <div className="control">
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="input"
                  required
                />
              </div>
              <p className="help">Required. New password one more time</p>
            </div>
            <hr />
            <div className="field">
              <div className="control">
                <button type="submit" className="button green">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div> */}
    </section>
  );
};

export default UserProfile;

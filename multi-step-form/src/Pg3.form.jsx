import React from "react";

function Pg3({ formData, handleChange }) {
  return (
    <div>
      <h2>Step 3</h2>
      <form>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="zipcode">Zip Code:</label>
          <input
            type="text"
            className="form-control"
            id="zipcode"
            name="zipcode"
            value={formData.zipcode}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
}

export default Pg3;
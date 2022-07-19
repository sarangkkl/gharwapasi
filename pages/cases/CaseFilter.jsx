import React from 'react'

const CaseFilter = () => {
  return (
    <div className="">
          <h3>FILTERS</h3>
          <select className="form-select" aria-label="Default select example">
            <option selected>Category</option>
            <option value="1">Halala</option>
            <option value="2">Mutah</option>
            <option value="3">Love Jihad</option>
          </select>
          <div className="my-2">
            <label className="form-label">Cut of Date</label>
            <input type="date" className="form-control" />
          </div>
          <div className="my-2">
            <label className="form-label">Country</label>
            <select className="form-select" aria-label="Default select example">
              <option selected>Country</option>
              <option value="1">India</option>
              <option value="2">Pakistan</option>
              <option value="3">Bangladesh</option>
            </select>
          </div>
          <div className="my-2">
            <label className="form-label">State</label>
            <select className="form-select" aria-label="Default select example">
              <option selected>Country</option>
              <option value="1">India</option>
              <option value="2">Pakistan</option>
              <option value="3">Bangladesh</option>
            </select>
          </div>
          <div className="my-2">
            <label className="form-label">City</label>
            <select className="form-select" aria-label="Default select example">
              <option selected>Country</option>
              <option value="1">India</option>
              <option value="2">Pakistan</option>
              <option value="3">Bangladesh</option>
            </select>
          </div>
        </div>
  )
}

export default CaseFilter
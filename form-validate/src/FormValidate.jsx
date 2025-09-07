import React, { useState } from "react";

const FormValidate = () => {
  let [formData, setFormData] = useState({
    required: "", //! 1st input
    maxLength: "", //! 2nd input
    minLength: "", //! 3rd input
    valLength: "", //! 4th input
    maxRange: "", //! 5th input
    minRange: "", //! 6th input
    rangeLength: "", //! 7th input
  });

  let {
    required,
    maxLength,
    minLength,
    valLength,
    maxRange,
    minRange,
    rangeLength,
  } = formData; //? destructure state

  let handleChange = (event) => {
    console.log(event);
    let { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  //! to store errors in state
  let [errors, setErrors] = useState({});

  //event --> sbe(synthetic base event)
  let handleSubmit = (event) => {
    event.preventDefault();

    // ?
    let validate = {}; //! which in "handleSubmit" validate obj stores error

    //! validate 1st input
    if (required === "") {
      validate.required = "This field is mandatory";
    }

    //! validate 2nd input
    if (maxLength === "") {
      validate.maxLength = "Please fill the field";
    } else if (maxLength.length > 6) {
      validate.maxLength = "Maximum letters must be 6";
    }
    //!validate 3rd input
    if (minLength === "") {
      validate.minLength = "Please fill the field";
    } else if (minLength.length < 6) {
      validate.minLength = "Minimum letters must be 6";
    }

    //!validate 4th input
    if (valLength === "") {
      validate.valLength = "Please fill the field";
    } else if (valLength.length < 6 || valLength.length > 12) {
      validate.valLength = "Length of the data must be btw 6-12";
    }

    //!validate 5th input
    if (maxRange === "") {
      validate.maxRange = "Please fill the field";
    } else if (maxRange > 6) {
      validate.maxRange = "Maximum Range must be 6";
    }

    //!validate 6th
    if (minRange === "") {
      validate.minRange = "Please fill the data";
    } else if (minRange < 6) {
      validate.minRange = "Minimum range must be 6";
    }

    //!validate 7th
    if (rangeLength === "") {
      validate.rangeLength = "please fill the field";
    } else if (rangeLength < 6 || rangeLength > 12) {
      validate.rangeLength = "Range length must be btw 6-12";
    }

    setErrors(validate); //* Passing errors from "validate obj" to "state"
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="bg-gray-200 w-96 rounded-lg p-3 shadow-md shadow-gray-200">
        <h1 className="text-red-700 font-semibold text-2xl text-center font-serif">FORM VALIDATE</h1>
        <section>
          <label htmlFor="req">REQUIRED :</label>
          <div>
            <input
              type="text"
              placeholder="Please fill this field"
              id="req"
              name="required"
              value={required}
              onChange={handleChange}
              className="p-1 rounded-md"
            />
          </div>
          <span className="text-red-500">{errors.required}</span>
        </section>
        <section>
          <label htmlFor="max">MAXLENGTH :</label>
          <div>
            <input
              type="text"
              placeholder="Enter maximum character upto 6"
              id="max"
              name="maxLength"
              value={maxLength}
              onChange={handleChange}
            />
          </div>
          <span className="text-red-500">{errors.maxLength}</span>
        </section>
        <section>
          <label htmlFor="min">MINLENGTH :</label>
          <div>
            <input
              type="text"
              placeholder="Enter minimum chracter upto 6"
              id="min"
              name="minLength"
              value={minLength}
              onChange={handleChange}
            />
          </div>
          <span className="text-red-500">{errors.minLength}</span>
        </section>
        <section>
          <label htmlFor="vallen">VALUE LENGTH : </label>
          <div>
            <input
              type="text"
              id="vallen"
              name="valLength"
              value={valLength}
              onChange={handleChange}
            />
          </div>
          <span className="text-red-500">{errors.valLength}</span>
        </section>
        <section>
          <label htmlFor="mrange">MAXRANGE :</label>
          <div>
            <input
              type="number"
              id="mrange"
              name="maxRange"
              value={maxRange}
              onChange={handleChange}
            />
          </div>
          <span className="text-red-500">{errors.maxRange}</span>
        </section>
        <section>
          <label htmlFor="minrange">MINRANGE :</label>
          <div>
            <input
              type="number"
              id="minrange"
              name="minRange"
              value={minRange}
              onChange={handleChange}
            />
          </div>
          <span className="text-red-500">{errors.minRange}</span>
        </section>
        <section>
          <label htmlFor="rangelen">RANGE LENGTH:</label>
          <div>
            <input
              type="number"
              id="rangelen"
              name="rangeLength"
              value={rangeLength}
              onChange={handleChange}
            />
          </div>
          <span className="text-red-500">{errors.rangeLength}</span>
        </section>
        <section>
          <button className="bg-blue-600 text-white p-3 rounded-md">SUBMIT</button>
        </section>
      </form>
    </>
  );
};

export default FormValidate;

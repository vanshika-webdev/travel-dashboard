import React, { useState } from "react";
import { axiosInstance } from "./api/axiosIntance";
import { apiEndPoints } from "./constants/apiEndPoints";
import { toastError, toastSuccess } from "./utils/toast"; // Import your toast notifications

function TestimonialsComp() {
  const [stars, setStars] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (setter) => (e) => {
    setter(e.target.value);
  };

  const handleSubmit = async () => {
    if (!stars || !name || !description) {
      toastError("All fields are required.");
      return;
    }

    const data = {
      stars,
      name,
      description,
    };

    try {
      setIsLoading(true);
      const result = await axiosInstance.post(
        apiEndPoints.createTestimonial,
        data
      );

      if (result.status === 200) {
        toastSuccess("Testimonial created successfully.");
        setStars("");
        setName("");
        setDescription("");
      } else {
        toastError("Something went wrong.");
      }
    } catch (error) {
      console.error("Error creating testimonial:", error);
      toastError("Error creating testimonial.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="hero d-flex">
      <div className="hero-banner">
        <h5>No. Of Stars</h5>
        <div className="upload">
          <div className="cross">
            <input
              type="text"
              name=""
              id=""
              placeholder="Number of Stars"
              value={stars}
              onChange={handleChange(setStars)}
            />
            <i className="bi bi-x"></i>
          </div>
        </div>
      </div>

      <div className="hero-banner">
        <h5>Name</h5>
        <div className="upload">
          <div className="cross">
            <input
              type="text"
              name=""
              id=""
              placeholder="Name"
              value={name}
              onChange={handleChange(setName)}
            />
            <i className="bi bi-x"></i>
          </div>
        </div>
      </div>
      <div className="hero-banner testimonialdisc">
        <h5>Description</h5>
        <div className="upload">
          <div className="cross">
            <input
              type="text"
              name=""
              id=""
              placeholder="Description"
              value={description}
              onChange={handleChange(setDescription)}
            />
            <i className="bi bi-x"></i>
          </div>
        </div>
      </div>
      <button
        className="remove-btn"
        onClick={handleSubmit}
        disabled={isLoading}
      >
        {isLoading ? "Please wait..." : "Create"}
      </button>
    </div>
  );
}

export default TestimonialsComp;

import React, { useState } from "react";
import { axiosInstance } from "../api/axiosIntance";
import { apiEndPoints } from "../constants/apiEndPoints";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toastError, toastSuccess } from "../utils/toast";

function DestinationCard() {
  const [destination, setDestination] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const createDestination = async () => {
    try {
      console.log("---clicke", destination);
      if (!destination) {
        toastError("Please enter the destination name.");
        return;
      }
      setIsLoading(true);
      const result = await axiosInstance.post(apiEndPoints.createDestination, {
        name: destination,
      });
      console.log("--result--", result.data);
      toastSuccess("Destination created successfully.");
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toastError(error.response.data.message);
      } else {
        toastError("Something went wrong!");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="hero" style={{ marginBottom: "20px" }}>
      <div className="hero-banner">
        <h5>Destination</h5>
        <div className="upload">
          <div className="cross">
            <input
              type="text"
              name=""
              id=""
              placeholder="Create a Destination"
              onChange={(e) => setDestination(e.target.value)}
            />
            <i class="bi bi-x"></i>
          </div>
        </div>
      </div>
      <button
        className="remove-btn"
        onClick={createDestination}
        disabled={isLoading}
      >
        {isLoading ? "Please wait..." : "Create Destination"}
      </button>
      <ToastContainer />
    </div>
  );
}

export default DestinationCard;

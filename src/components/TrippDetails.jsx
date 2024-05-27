import React, { useEffect, useState } from "react";
import "./trippDetails.css";
import "react-toastify/dist/ReactToastify.css";
import { axiosInstance } from "../api/axiosIntance";
import { apiEndPoints } from "../constants/apiEndPoints";
import AWS from "aws-sdk";
import { toastSuccess } from "../utils/toast";

const BUCKET_NAME = "trippkaro";
const REGION = "ap-south-1";

export default function TrippDetails() {
  const [activeTab, setActiveTab] = useState("create");

  return (
    <div className="tripDetailsContainer">
      <h1>Tripp Details</h1>
      <div className="tabs">
        <button onClick={() => setActiveTab("create")}>
          Create Tripp Details
        </button>
        <button onClick={() => setActiveTab("list")}>
          List of Tripp Details
        </button>
      </div>
      {activeTab === "create" && <CreateTrippDetails />}
      {activeTab === "list" && <ListTrippDetails />}
    </div>
  );
}

function CreateTrippDetails() {
  const [formData, setFormData] = useState({
    destination: "",
    images: [],
    includedText: "",
    title: "",
    descprition: "",
    days: "",
    nights: "",
    transport: false,
    breakFast: false,
    hotel: false,
    sightSeeing: false,
    policyDetails: "",
    itineraryDetails: "",
    ctaPrimary: "",
    amount: "",
    person: "",
    discount: "",
    amountAfterDiscount: "",
    header: "",
    subHeader: "",
    ctaSecondary: "",
    pdfFile: "",
    bannerImage: "",
  });

  const [destinations, setDestinations] = useState([]);
  const [policies, setPolicies] = useState([]);
  const [itineraries, setItineraries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  //   const policies = ["Policy 1", "Policy 2", "Policy 3"];
  //   const itineraries = ["Itinerary 1", "Itinerary 2", "Itinerary 3"];

  useEffect(() => {
    getDestination();
    getPoliciesDetails();
    getItinerariesDetails();
  }, []);

  async function getDestination() {
    try {
      const result = await axiosInstance.get(apiEndPoints.getDestination);
      setDestinations(result.data?.result || []);
    } catch (error) {
      console.log("--errorgetDestination--", error?.message);
    }
  }

  async function getPoliciesDetails() {
    try {
      const result = await axiosInstance.get(apiEndPoints.getPolicy);

      setPolicies(result.data?.result || []);

      console.log(
        "-----PolicyResult----",
        JSON.stringify(result.data, null, 2)
      );
    } catch (error) {
      console.log("--errorgetPoliciesDetails--", error?.message);
    }
  }

  async function getItinerariesDetails() {
    try {
      const result = await axiosInstance.get(apiEndPoints.getItinerary);
      setItineraries(result.data?.result || []);
      console.log(
        "-----ItinerariesResult----",
        JSON.stringify(result.data, null, 2)
      );
    } catch (error) {
      console.log("--errorgetItinerariesDetails--", error?.message);
    }
  }

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "file") {
      setFormData({
        ...formData,
        [name]: files,
      });
    } else {
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      });
    }
  };

  const uploadToS3 = async (file) => {
    const s3 = new AWS.S3({
      region: REGION,
      credentials: {
        accessKeyId: "AKIA3OXNNHNX73VJL3OL",
        secretAccessKey: "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",
      },
    });

    const params = {
      Bucket: BUCKET_NAME,
      Key: `${Date.now()}-${file.name}`,
      Body: file,
      ACL: "public-read",
      ContentType: file.type,
    };

    try {
      const data = await s3.upload(params).promise();
      return data.Location;
    } catch (err) {
      console.error("Error uploading file: ", err);
      return null;
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      const imageFiles = Array.from(formData.images);
      const imageUrls = await Promise.all(imageFiles.map(uploadToS3));

      const pdfFile = formData.pdfFile[0];
      const pdfUrl = await uploadToS3(pdfFile);

      const bannerImage = formData.bannerImage[0];
      const bannerImageUrl = await uploadToS3(bannerImage);

      setFormData({
        ...formData,
        images: imageUrls,
        pdfFile: pdfUrl,
      });

      console.log("---processedData----", {
        ...formData,
        images: imageUrls,
        pdfFile: pdfUrl,
        bannerImage: bannerImageUrl,
      });

      const result = await axiosInstance.post(apiEndPoints.createTripp, {
        ...formData,
        images: imageUrls,
        pdfFile: pdfUrl,
        bannerImage: bannerImageUrl,
      });
      toastSuccess("Trip created successfully.");
      console.log("----result----", result);
    } catch (error) {
      console.log("---error---", error?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Destination:</label>
        <select
          name="destination"
          value={formData.destination}
          onChange={handleChange}
          required
        >
          <option value="">Select a destination</option>
          {destinations.map((dest, index) => (
            <option key={index} value={dest?._id}>
              {dest?.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Images:</label>
        <input
          type="file"
          name="images"
          accept="image/*"
          multiple
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Included Text:</label>
        <input
          type="text"
          name="includedText"
          value={formData.includedText}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <input
          type="text"
          name="descprition"
          value={formData.descprition}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Days:</label>
        <input
          type="text"
          name="days"
          value={formData.days}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Nights:</label>
        <input
          type="text"
          name="nights"
          value={formData.nights}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Transport:</label>
        <input
          type="checkbox"
          name="transport"
          checked={formData.transport}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>BreakFast:</label>
        <input
          type="checkbox"
          name="breakFast"
          checked={formData.breakFast}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Hotel:</label>
        <input
          type="checkbox"
          name="hotel"
          checked={formData.hotel}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>SightSeeing:</label>
        <input
          type="checkbox"
          name="sightSeeing"
          checked={formData.sightSeeing}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Policy Details:</label>
        <select
          name="policyDetails"
          value={formData.policyDetails}
          onChange={handleChange}
          required
        >
          <option value="">Select a policy</option>
          {policies.map((policy, index) => (
            <option key={index} value={policy?._id}>
              {policy?.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Itinerary Details:</label>
        <select
          name="itineraryDetails"
          value={formData.itineraryDetails}
          onChange={handleChange}
          required
        >
          <option value="">Select an itinerary</option>
          {itineraries.map((itinerary, index) => (
            <option key={index} value={itinerary?._id}>
              {itinerary?.title}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Primary CTA:</label>
        <input
          type="text"
          name="ctaPrimary"
          value={formData.ctaPrimary}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Amount:</label>
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Person:</label>
        <input
          type="number"
          name="person"
          value={formData.person}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Discount:</label>
        <input
          type="number"
          name="discount"
          value={formData.discount}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Amount After Discount:</label>
        <input
          type="number"
          name="amountAfterDiscount"
          value={formData.amountAfterDiscount}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Header:</label>
        <input
          type="text"
          name="header"
          value={formData.header}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Sub Header:</label>
        <input
          type="text"
          name="subHeader"
          value={formData.subHeader}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Secondary CTA:</label>
        <input
          type="text"
          name="ctaSecondary"
          value={formData.ctaSecondary}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>PDF File:</label>
        <input type="file" name="pdfFile" onChange={handleChange} required />
      </div>
      <div>
        <label>Banner Image:</label>
        <input
          type="file"
          name="bannerImage"
          accept="image/*"
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">{isLoading ? "Please wait...." : "Submit"}</button>
    </form>
  );
}

function ListTrippDetails() {
  // Sample data, replace with real data

  const [trips, setTrips] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getTrippDetails();
  }, [refresh]);

  async function getTrippDetails() {
    try {
      const result = await axiosInstance.get(apiEndPoints.getTripp);
      setTrips(result.data?.result || []);
      //   console.log("--result---", JSON.stringify(result, null, 2));
    } catch (error) {
      console.log("----errorGetTrippDetails----", error?.message);
    }
  }

  async function deleteTripp(trippId) {
    try {
      setIsLoading(true);
      const result = await axiosInstance.delete(
        `${apiEndPoints.deleteTripp}?trippId=${trippId}`
      );
      setRefresh(!refresh);
      toastSuccess("Trip Deleted successfully.");
      console.log("--result----", result);
    } catch (error) {
      console.log("----error----", error?.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      <h2>List of Tripp Details</h2>
      <ul>
        {trips.map((trip, index) => (
          <div
            key={index}
            style={{
              marginTop: "10px",
              border: "1px solid",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <p>Title: {trip.title}</p>
            <p>description: {trip.descprition}</p>
            <p>Title: {trip.title}</p>
            <p>Included Text: {trip.includedText}</p>
            <p>Days: {trip.days}</p>
            <p>Nights: {trip.nights}</p>
            <p>Amount: {trip.amount}</p>
            <p>Person: {trip.person}</p>

            <button onClick={() => deleteTripp(trip?._id)}>
              {isLoading ? "Please wait..." : "Delete"}
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import "./herobanner.css";
import { toastError, toastSuccess } from "./utils/toast";
import { apiEndPoints } from "./constants/apiEndPoints";
import AWS from "aws-sdk";
import { axiosInstance } from "./api/axiosIntance";

const S3_BUCKET_NAME = "trippkaro";
const REGION = "ap-south-1";

function HeroBanner({ bannerType }) {
  const [selectedFile, setSelectedFile] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isFileLoading, setIsFileLoading] = useState(false);
  const [isBannerLoading, setIsBannerLoading] = useState(false);
  const [destination, setDestination] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState("");
  const [content, setContent] = useState({
    header: "",
    subHeader: "",
    ctaPrimary: "",
    ctaSecondary: "",
  });

  useEffect(() => {
    getDestination();
  }, []);

  const getDestination = async () => {
    try {
      const result = await axiosInstance.get(apiEndPoints.getDestination);

      if (
        result?.data &&
        result?.data?.result &&
        result?.data?.result?.length
      ) {
        setDestination(result.data.result);
      }
    } catch (error) {
      console.log("---errorGetDestination---", error);
    }
  };

  const handleChange = (field, value) => {
    setContent({
      ...content,
      [field]: value,
    });
  };

  const handleDestinationChange = (e) => {
    setSelectedDestination(e.target.value);
  };

  const onBannerSubmit = async () => {
    try {
      if (
        !content.ctaPrimary ||
        !content.header ||
        !content.subHeader ||
        !imageUrl ||
        !selectedDestination
      ) {
        console.log("----content-----", content);
        console.log("----imageUrl-----", imageUrl);

        toastError("All fields are required.");
        return;
      }

      let data = {
        ...content,
        file: imageUrl,
        fileType: "image/png",
        bannerType,
        destination: selectedDestination,
      };

      console.log("-------------data---------", data);

      setIsBannerLoading(true);

      const result = await axiosInstance.post(apiEndPoints.createBanner, data);
      console.log("---result---", result);
      if (result.status === 200) {
        toastSuccess("Banner created successfully.");
        resetAllField();
        return;
      }
      toastSuccess("Something went wrong.");
    } catch (error) {
      console.log("----------erroronBannerSubmit-----", error?.message);
    } finally {
      setIsBannerLoading(false);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    if (file && allowedExtensions.test(file.name)) {
      setSelectedFile(file);
    } else {
      setSelectedFile(null);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      return;
    }
    const s3 = new AWS.S3({
      region: REGION,
      credentials: {
        accessKeyId: "AKIA3OXNNHNX73VJL3OL",
        secretAccessKey: "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",
      },
    });

    const fileName = selectedFile.name;
    const fileExtension = fileName.split(".").pop();
    const key = `BANNERS/${Date.now()}.${fileExtension}`;

    const params = {
      Bucket: S3_BUCKET_NAME,
      Key: key,
      Body: selectedFile,
      ACL: "public-read",
      ContentType: selectedFile.type,
    };

    try {
      setIsFileLoading(true);
      const data = await s3.upload(params).promise();
      console.log("--------s3Data------", data);
      setImageUrl(data.Location);
      toastSuccess("Image uploaded successfully.");
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setIsFileLoading(false);
    }
  };

  const resetAllField = () => {
    setSelectedDestination("");
    setSelectedFile("");
    setImageUrl("");
    setContent({
      header: "",
      subHeader: "",
      ctaPrimary: "",
    });
  };

  // console.log("---selctedFilePath----", selectedFile);
  // console.log("---------imageUrl---------", imageUrl);

  return (
    <>
      <div className="hero">
        <div className="hero-banner">
          <h5>Hero Banner(1374W*811H)</h5>
          <div className="upload">
            <div className="cross">
              <input
                type="file"
                accept="image/*"
                name=""
                id=""
                onChange={handleFileChange}
              />
              <i className="bi bi-x"></i>
            </div>
            {/* <i className="bi bi-eye inner"></i> */}
            <button
              type="button"
              onClick={handleUpload}
              disabled={isFileLoading}
            >
              {isFileLoading ? "Uploading..." : "Upload"}
            </button>
          </div>
        </div>
        <div className="hero-banner">
          <h5>Header</h5>
          <div className="upload">
            <div className="cross">
              <input
                type="text"
                name=""
                id=""
                placeholder="Header Title"
                value={content.header}
                onChange={(e) => handleChange("header", e.target.value)}
              />
              <i className="bi bi-x"></i>
            </div>
          </div>
        </div>
        <div className="hero-banner">
          <h5>Sub Header</h5>
          <div className="upload">
            <div className="cross">
              <input
                type="text"
                name=""
                id=""
                value={content.subHeader}
                placeholder="Sub Header Title"
                onChange={(e) => handleChange("subHeader", e.target.value)}
              />
              <i className="bi bi-x"></i>
            </div>
          </div>
        </div>
        <div className="hero-banner">
          <h5>CTA</h5>
          <div className="upload">
            <div className="cross">
              <input
                type="text"
                name=""
                id=""
                placeholder="CTA Text"
                value={content.ctaPrimary}
                onChange={(e) => handleChange("ctaPrimary", e.target.value)}
              />
              <i className="bi bi-x"></i>
            </div>
          </div>
        </div>
        {bannerType === "CHOOSE" && (
          <div className="hero-banner">
            <h5>CTA Secondary</h5>
            <div className="upload">
              <div className="cross">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="CTA Secondary Text"
                  value={content.ctaSecondary}
                  onChange={(e) => handleChange("ctaSecondary", e.target.value)}
                />
                <i className="bi bi-x"></i>
              </div>
            </div>
          </div>
        )}
        <div className="hero-banner">
          <h5>Select Destination</h5>
          <div className="upload">
            <div className="cross">
              <select
                value={selectedDestination}
                onChange={handleDestinationChange}
              >
                <option value="">Select Destination</option>
                {destination.map((dest) => (
                  <option key={dest._id} value={dest._id}>
                    {dest.name}
                  </option>
                ))}
              </select>
              {/* <i className="bi bi-x"></i> */}
            </div>
          </div>
        </div>
        <button className="remove-btn" onClick={onBannerSubmit}>
          {isBannerLoading ? "Please wait...." : "Create"}
        </button>
      </div>
    </>
  );
}

export default HeroBanner;

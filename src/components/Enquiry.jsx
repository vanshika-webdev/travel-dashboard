import React, { useEffect, useState } from "react";
import "./inquiry.css";
import { axiosInstance } from "../api/axiosIntance";
import { apiEndPoints } from "../constants/apiEndPoints";

function Enquiry() {
  const [inquiryDetails, setInquiryDetails] = useState([]);

  useEffect(() => {
    getInquiry();
  }, []);

  async function getInquiry() {
    try {
      const result = await axiosInstance.get(apiEndPoints.getInquiry);
      if (result && result.data && result.data.result) {
        setInquiryDetails(result.data.result);
      }
      console.log("-----result----", JSON.stringify(result, null, 2));
    } catch (error) {
      console.log("----error----", error?.message);
    }
  }

  return (
    <div className="enquiry">
      <div className="container">
        {/* <div className="main-head">
          <div>
            <select className="en">
              <option value="op1">Name</option>
              <option value="op2">Name 2</option>
            </select>
          </div>
          <div>
            <select className="en">
              <option value="op1">Date</option>
              <option value="op2">Date </option>
            </select>
          </div>
          <div>
            <select className="en">
              <option value="op1">Mobile</option>
              <option value="op2">Mobile </option>
            </select>
          </div>
          <div>
            <select className="en">
              <option value="op1">Status</option>
              <option value="op2">Status</option>
            </select>
          </div>

          <div className="buttons">
            <div className="upload">
              <i class="bi bi-arrow-clockwise"></i>
              <button type="button">Apply</button>
            </div>
          </div>
        </div> */}
        {/* <div className="table-header enq">
          <span>List Of Inquiries</span>
          <div className="search">
            <i class="bi bi-search"></i>
            <input type="search" name="" placeholder="Search" id="" />
          </div>
          <div className="box">
            <button>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-download"
                  viewBox="0 0 16 16"
                >
                  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                </svg>
                Download List
              </a>
            </button>
          </div>
        </div> */}
        <div class="row">
          <div class="col-12">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">
                    <td>
                      <div class="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="customCheck1"
                        />
                      </div>
                    </td>
                  </th>
                  <th scope="col">S.No</th>
                  <th scope="col">Name</th>
                  <th scope="col">Mobile Number</th>
                  <th scope="col">Email Address</th>
                  <th scope="col">Date of Inq</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {inquiryDetails.map((item, index) => {
                  return (
                    <tr>
                      <td>
                        <div class="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="customCheck1"
                          />
                        </div>
                      </td>
                      <td>{index + 1}</td>
                      <td>{item?.fullName}</td>
                      <td>{item?.phone}</td>
                      <td>{item.email}</td>
                      <td>12-01-2024</td>
                      <td>
                        <select>
                          <option value="" class="green_color">
                            Contacted
                          </option>
                          <option value="">Pending</option>
                          <option value="">Closed Enq</option>
                        </select>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link border-0" href="#" aria-label="Previous">
                {/* <span aria-hidden="true">&laquo;</span> */}
                <span class="sr-only">Previous</span>
              </a>
            </li>
            <li class="page-item">
              <a class="page-link text-light bg-dark rounded-2 mx-1" href="#">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link text-light bg-dark rounded-2 mx-1" href="#">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link text-light bg-dark rounded-2 mx-1" href="#">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="page-link border-0" href="#" aria-label="Next">
                {/* <span aria-hidden="true">&raquo;</span> */}
                <span class="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Enquiry;

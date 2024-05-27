import * as React from "react";
import "./destination.css";
import { Link } from "react-router-dom";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import { Button } from "@mui/material";
import { FaChevronDown } from "react-icons/fa";
import { axiosInstance } from "./api/axiosIntance";
import { apiEndPoints } from "./constants/apiEndPoints";
import { useState } from "react";

function Destination() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [destinationDetails, setDestinationDetails] = React.useState([]);
  const [refresh, setRefresh] = useState(false);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);

  React.useEffect(() => {
    getAllDestination();
  }, [refresh]);

  const getAllDestination = async () => {
    try {
      const result = await axiosInstance.get(apiEndPoints.getBanner);
      console.log("Result:", JSON.stringify(result.data, null, 2));
      if (result.data && result.data.result) {
        setDestinationDetails(result.data.result);
      }
    } catch (error) {
      console.error("Error fetching destinations:", error);
    }
  };

  const deleteBannerById = async (bannerId) => {
    try {
      console.log("--bannerId--", bannerId);
      const result = await axiosInstance.delete(
        `${apiEndPoints.deleteBanner}?bannerId=${bannerId}`
      );

      setRefresh(!refresh);

      console.log("--result----", result);
    } catch (error) {
      console.log("--errorWhileDeletingBanner---", error?.message);
    }
  };

  return (
    <div className="destination">
      <div className="container">
        {/* Table Head */}
        <div className="main-head">
          <div>
            <select>
              <option value="op1">Destination</option>
              <option value="op2">Destination 2</option>
            </select>
          </div>
          <div>
            <select>
              <option value="op1">Package</option>
              <option value="op2">Package 2</option>
            </select>
          </div>
          <div>
            <select>
              <option value="op1">Date of Creation</option>
              <option value="op2">Date</option>
            </select>
          </div>
          <div className="buttons">
            <div className="upload">
              <i className="bi bi-arrow-clockwise"></i>
              <button type="button">Apply</button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                      />
                    </div>
                  </th>
                  <th scope="col">S.No</th>
                  <th scope="col">Destination</th>
                  <th scope="col">Package amount</th>
                  <th scope="col">Package Name</th>
                  <th scope="col">Package Location</th>
                  <th scope="col">Banner Type</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {destinationDetails.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id={`customCheck${index + 1}`}
                        />
                      </div>
                    </td>
                    <td>{index + 1}</td>
                    <td>{item.destination?.name}</td>
                    <td>₹8000</td>
                    <td>{item?.header}</td>
                    <td>{item.destination?.name}</td>
                    <td>{item.bannerType[0]}</td>
                    <td>
                      <Button
                        ref={anchorRef}
                        id="composition-button"
                        aria-controls={open ? "composition-menu" : undefined}
                        aria-expanded={open ? "true" : undefined}
                        aria-haspopup="true"
                        onClick={handleToggle}
                        endIcon={<FaChevronDown style={{ color: "#000" }} />}
                      >
                        Actions
                      </Button>
                      <Popper
                        open={open}
                        anchorEl={anchorRef.current}
                        role={undefined}
                        placement="bottom-start"
                        transition
                        disablePortal
                      >
                        {({ TransitionProps, placement }) => (
                          <Grow
                            {...TransitionProps}
                            style={{
                              transformOrigin:
                                placement === "bottom-start"
                                  ? "left top"
                                  : "left bottom",
                            }}
                          >
                            <Paper style={{ width: "100px" }}>
                              <ClickAwayListener onClickAway={handleClose}>
                                <MenuList
                                  autoFocusItem={open}
                                  id="composition-menu"
                                  aria-labelledby="composition-button"
                                  onKeyDown={handleListKeyDown}
                                >
                                  <MenuItem onClick={handleClose}>
                                    <Link
                                      style={{ textDecoration: "none" }}
                                      to={`/destination--view/${item.id}`}
                                    >
                                      View
                                    </Link>
                                  </MenuItem>
                                  <MenuItem onClick={handleClose}>
                                    <Link
                                      style={{ textDecoration: "none" }}
                                      to={`/destination--edit/${item.id}`}
                                    >
                                      Edit
                                    </Link>
                                  </MenuItem>
                                  <MenuItem onClick={handleClose}>
                                    <div
                                      style={{ textDecoration: "none" }}
                                      className="text-danger"
                                      onClick={() => deleteBannerById(item._id)}
                                      // to={`/destination--delete/${item.id}`}
                                    >
                                      Delete
                                    </div>
                                  </MenuItem>
                                </MenuList>
                              </ClickAwayListener>
                            </Paper>
                          </Grow>
                        )}
                      </Popper>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;

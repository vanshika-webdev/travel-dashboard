import * as  React from 'react';
import './destination.css'
import { Link } from 'react-router-dom';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import {Button} from "@mui/material";
import { FaChevronDown } from "react-icons/fa";

// import DestinationPage_2 from './DestinationPage_2'

function Destination() {


    const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
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
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
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


    return (
        <div className="destination">

            <div className="container">
                {/* Table Head */}
                <div className="main-head">
                    <div><select>
                        <option value="op1">Destination</option>
                        <option value="op2">Destination 2</option>
                    </select></div>
                    <div><select>
                        <option value="op1">Package</option>
                        <option value="op2">Paackage 2</option>
                    </select></div>
                    <div><select>
                        <option value="op1">Date of Creation</option>
                        <option value="op2">Date </option>
                    </select></div>
                    <div className="buttons"><div className="upload">
                        <i className="bi bi-arrow-clockwise"></i>
                        <button type='button'>Apply</button>
                    </div></div>


                </div>
                <div className="table-header">
                    <span>List Of Destination</span>
                    <div className="search">
                        <i className="bi bi-search"></i>
                        <input type="search" name="" placeholder='Search' id="" />
                    </div>
                    <div className="box">
                        <button><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                        </svg>Download List</a></button>
                        <button><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-square" viewBox="0 0 16 16">
                            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                        </svg>Add New List</a></button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <table className="table table-bordered">
                            <thead>
                                <tr>

                                    <th scope="col"><td>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck1" />

                                        </div>
                                    </td></th>
                                    <th scope="col">S.No</th>
                                    <th scope="col">Destination</th>
                                    <th scope="col">Package amount</th>
                                    <th scope="col">Package Name</th>
                                    <th scope="col">Package Location</th>
                                    <th scope="col">Date of Creation</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Created By</th>
                                    <th scope="col">Vendor Name</th>
                                    <th scope="col">Vendor Ph. Number</th>
                                    <th scope="col">Action</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck1" />

                                        </div>
                                    </td>
                                    <td>01</td>
                                    <td>Destiantion1</td>
                                    <td>₹8000</td>
                                    <td>Short trip to Kashmir-Standard</td>
                                    <td>Kashmir</td>
                                    <td>12-01-2024</td>
                                    <td>Completed</td>
                                    <td>Rahul</td>
                                    <td>Shivam</td>
                                    <td>9876543210</td>
                                    <td>
                                    <Button ref={anchorRef}
                                        id="composition-button"
                                        aria-controls={open ? 'composition-menu' : undefined}
                                        aria-expanded={open ? 'true' : undefined}
                                        aria-haspopup="true"
                                        onClick={handleToggle}
                                        endIcon={<FaChevronDown style={{color:"#000"}}/>}
                                    >

                                        <Link style={{textTransform:'capitalize', textDecoration:'none', fontSize:'15px', color:'#000'}} Name="text-dark">Actions</Link>
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
                                                placement === 'bottom-start' ? 'left top' : 'left bottom',
                                            }}
                                        >
                                            
                                                    <Paper style={{width:'100px'}}>
                                                    
                                                    <ClickAwayListener onClickAway={handleClose}>
                                                        <MenuList
                                                        autoFocusItem={open}
                                                        id="composition-menu"
                                                        aria-labelledby="composition-button"
                                                        onKeyDown={handleListKeyDown}
                                                        >
                                                        <MenuItem onClick={handleClose}><Link style={{textDecoration:'none'}} Name='text-dark' to={`${`/destination--edit`}`}>View</Link></MenuItem>                                 
                                                        <MenuItem onClick={handleClose}><Link style={{textDecoration:'none'}} Name='text-dark' to={`${`/destination--edit`}`}>Edit</Link></MenuItem>                                 
                                                        <MenuItem onClick={handleClose}><Link style={{textDecoration:'none'}} Name='text-danger' to={``}>Delete</Link></MenuItem>                                 
                                                        </MenuList>
                                                    </ClickAwayListener>
                                                            
                                                    </Paper>
                                                
                                        
                                        </Grow>
                                        )}
                                    </Popper>
                      
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck1" />

                                        </div>
                                    </td>
                                    <td>01</td>
                                    <td>Destiantion1</td>
                                    <td>₹8000</td>
                                    <td>Short trip to Kashmir-Standard</td>
                                    <td>Kashmir</td>
                                    <td>12-01-2024</td>
                                    <td>Pending</td>
                                    <td>Rahul</td>
                                    <td>Shivam</td>
                                    <td>9876543210</td>
                                    <td>
                                    <Button ref={anchorRef}
                                        id="composition-button"
                                        aria-controls={open ? 'composition-menu' : undefined}
                                        aria-expanded={open ? 'true' : undefined}
                                        aria-haspopup="true"
                                        onClick={handleToggle}
                                        endIcon={<FaChevronDown style={{color:"#000"}}/>}
                                    >

                                        <Link style={{textTransform:'capitalize', textDecoration:'none', fontSize:'15px'}} className="text-dark">Actions</Link>
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
                                                placement === 'bottom-start' ? 'left top' : 'left bottom',
                                            }}
                                        >
                                            
                                                    <Paper style={{width:'100px'}}>
                                                    
                                                    <ClickAwayListener onClickAway={handleClose}>
                                                        <MenuList
                                                        autoFocusItem={open}
                                                        id="composition-menu"
                                                        aria-labelledby="composition-button"
                                                        onKeyDown={handleListKeyDown}
                                                        >
                                                        <MenuItem onClick={handleClose}><Link style={{textDecoration:'none'}} className='text-dark' to={`${`/destination--edit`}`}>View</Link></MenuItem>                                 
                                                        <MenuItem onClick={handleClose}><Link style={{textDecoration:'none'}} className='text-dark' to={`${`/destination--edit`}`}>Edit</Link></MenuItem>                                 
                                                        <MenuItem onClick={handleClose}><Link style={{textDecoration:'none'}} className='text-danger' to={``}>Delete</Link></MenuItem>                                 
                                                        </MenuList>
                                                    </ClickAwayListener>
                                                            
                                                    </Paper>
                                                
                                        
                                        </Grow>
                                        )}
                                    </Popper>
                      
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck1" />

                                        </div>
                                    </td>
                                    <td>01</td>
                                    <td>Destiantion1</td>
                                    <td>₹8000</td>
                                    <td>Short trip to Kashmir-Standard</td>
                                    <td>Kashmir</td>
                                    <td>12-01-2024</td>
                                    <td>Remove</td>
                                    <td>Rahul</td>
                                    <td>Shivam</td>
                                    <td>9876543210</td>
                                   
                                       <td>
                                    <Button ref={anchorRef}
                                        id="composition-button"
                                        aria-controls={open ? 'composition-menu' : undefined}
                                        aria-expanded={open ? 'true' : undefined}
                                        aria-haspopup="true"
                                        onClick={handleToggle}
                                        endIcon={<FaChevronDown style={{color:"#000"}}/>}
                                    >

                                        <Link style={{textTransform:'capitalize', textDecoration:'none', fontSize:'15px', color:'#000'}} Name="text-dark">Actions</Link>
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
                                                placement === 'bottom-start' ? 'left top' : 'left bottom',
                                            }}
                                        >
                                            
                                                    <Paper style={{width:'100px'}}>
                                                    
                                                    <ClickAwayListener onClickAway={handleClose}>
                                                        <MenuList
                                                        autoFocusItem={open}
                                                        id="composition-menu"
                                                        aria-labelledby="composition-button"
                                                        onKeyDown={handleListKeyDown}
                                                        >
                                                        <MenuItem onClick={handleClose}><Link style={{textDecoration:'none'}} Name='text-dark' to={`${`/destination--edit`}`}>View</Link></MenuItem>                                 
                                                        <MenuItem onClick={handleClose}><Link style={{textDecoration:'none'}} Name='text-dark' to={`${`/destination--edit`}`}>Edit</Link></MenuItem>                                 
                                                        <MenuItem onClick={handleClose}><Link style={{textDecoration:'none'}} Name='text-danger' to={``}>Delete</Link></MenuItem>                                 
                                                        </MenuList>
                                                    </ClickAwayListener>
                                                            
                                                    </Paper>
                                                
                                        
                                        </Grow>
                                        )}
                                    </Popper>
                      
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck1" />

                                        </div>
                                    </td>
                                    <td>01</td>
                                    <td>Destiantion1</td>
                                    <td>₹8000</td>
                                    <td>Short trip to Kashmir-Standard</td>
                                    <td>Kashmir</td>
                                    <td>12-01-2024</td>
                                    <td className='ongoing'>Ongoing</td>
                                    <td>Rahul</td>
                                    <td>Shivam</td>
                                    <td>9876543210</td>
                                    <td>
                                    <Button ref={anchorRef}
                                        id="composition-button"
                                        aria-controls={open ? 'composition-menu' : undefined}
                                        aria-expanded={open ? 'true' : undefined}
                                        aria-haspopup="true"
                                        onClick={handleToggle}
                                        endIcon={<FaChevronDown style={{color:"#000"}}/>}
                                    >

                                        <Link style={{textTransform:'capitalize', textDecoration:'none', fontSize:'15px', color:'#000'}} Name="text-dark">Actions</Link>
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
                                                placement === 'bottom-start' ? 'left top' : 'left bottom',
                                            }}
                                        >
                                            
                                                    <Paper style={{width:'100px'}}>
                                                    
                                                    <ClickAwayListener onClickAway={handleClose}>
                                                        <MenuList
                                                        autoFocusItem={open}
                                                        id="composition-menu"
                                                        aria-labelledby="composition-button"
                                                        onKeyDown={handleListKeyDown}
                                                        >
                                                        <MenuItem onClick={handleClose}><Link style={{textDecoration:'none'}} Name='text-dark' to={`${`/destination--edit`}`}>View</Link></MenuItem>                                 
                                                        <MenuItem onClick={handleClose}><Link style={{textDecoration:'none'}} Name='text-dark' to={`${`/destination--edit`}`}>Edit</Link></MenuItem>                                 
                                                        <MenuItem onClick={handleClose}><Link style={{textDecoration:'none'}} Name='text-danger' to={``}>Delete</Link></MenuItem>                                 
                                                        </MenuList>
                                                    </ClickAwayListener>
                                                            
                                                    </Paper>
                                                
                                        
                                        </Grow>
                                        )}
                                    </Popper>
                      
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* Pagination */}
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item">
                        <a className="page-link border-0" href="#" aria-label="Previous">
                            {/* <span aria-hidden="true">&laquo;</span> */}
                            <span className="sr-only">Previous</span>
                        </a>
                    </li>
                    <li className="page-item"><a className="page-link text-light bg-dark rounded-2 mx-1" href="#">1</a></li>
                    <li className="page-item"><a className="page-link text-light bg-dark rounded-2 mx-1" href="#">2</a></li>
                    <li className="page-item"><a className="page-link text-light bg-dark rounded-2 mx-1" href="#">3</a></li>
                    <li className="page-item">
                        <a className="page-link border-0" href="#" aria-label="Next">
                            {/* <span aria-hidden="true">&raquo;</span> */}
                            <span className="sr-only">Next</span>
                        </a>
                    </li>
                </ul>
            </nav>

        </div>


    )
}

export default Destination

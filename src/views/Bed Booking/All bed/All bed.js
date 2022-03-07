import React from "react";
import "src/asset/plugins/bootstrap/css/bootstrap.min.css";
import "src/asset/css/main.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit , faDeleteLeft} from '@fortawesome/free-solid-svg-icons'


const All_bed=()=>{
    return(
        <>
        <div>
        <section class="content">
                    <div class="container-fluid">
                        <div class="block-header">
                            <h2>All bed</h2>
                            <small class="text-muted">Welcome to bed booking</small>
                        </div>
                        <div class="row clearfix">
                            <div class="col-lg-12 col-md-12 col-sm-12">
                                <div class="card">
                                    <div class="header">
                                    <div class="col row-12 d-flex">
                                <h2 class="col-10">Departments</h2>
                                <Link to="Add bed">
                                <button class="col-2" type="button" class="btn btn-primary">Add Now</button>
                                </Link>
                                  </div>
                                       
                                    </div>
                                    <div class="body table-responsive">
                                        <table class="table table-bordered table-striped table-hover js-basic-example dataTable">
                                            <thead>
                                                <tr>
                                                    <th>Room No</th>
                                                    <th>Patient</th>
                                                    <th>Allotment</th>
                                                    <th>Discharge</th>
                                                    <th>Room Type</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            {/*<tfoot>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Position</th>
                                                    <th>Office</th>
                                                    <th>Age</th>
                                                    <th>Start date</th>
                                                    <th>Salary</th>
                                                </tr>
                                            </tfoot>*/}
                                            <tbody>
                                                <tr>
                                                    <td>A101</td>
                                                    <td>Aman</td>
                                                    <td>7 Jun 2019</td>
                                                    <td>8 Jun 2019</td>
                                                    <td>general</td>
                                                    <td>
                                                    <td>
                                                    <button className="btn btn-sm px-0 py-0 btn-primary">
                                                      <i class="fas fa-edit"></i>
                                                      </button>
                                                     {/*<Link  className='warning'> <FontAwesomeIcon icon={faEdit} /></Link>*/}
                                                     </td>
                      
            
                                                     <td>
                                                     <button className="btn btn-sm px-0 py-0 btn-danger">
                                                      <i class="fas fa-trash"></i>
                                                      </button>
                                                      {/*<Link  className='warning'><FontAwesomeIcon icon={faDeleteLeft} /></Link>*/}
    
                                                      </td>

                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>A102</td>
                                                    <td>Aman</td>
                                                    <td>9 Jun 2019</td>
                                                    <td>10 Jun 2019</td>
                                                    <td>general</td>
                                                    <td>
                                                    <td>
                                                    <button className="btn btn-sm px-0 py-0 btn-primary">
                                                      <i class="fas fa-edit"></i>
                                                      </button>
                                                     {/*<Link  className='warning'> <FontAwesomeIcon icon={faEdit} /></Link>*/}
                                                     </td>
                      
            
                                                     <td>
                                                     <button className="btn btn-sm px-0 py-0 btn-danger">
                                                      <i class="fas fa-trash"></i>
                                                      </button>
                                                      {/*<Link  className='warning'><FontAwesomeIcon icon={faDeleteLeft} /></Link>*/}
    
                                                      </td>

                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>A103</td>
                                                    <td>Arun</td>
                                                    <td>11 Jun 2019</td>
                                                    <td>12Jun 2019</td>
                                                    <td>general</td>
                                                    <td>
                                                    <td>
                                                    <button className="btn btn-sm px-0 py-0 btn-primary">
                                                      <i class="fas fa-edit"></i>
                                                      </button>
                                                     {/*<Link  className='warning'> <FontAwesomeIcon icon={faEdit} /></Link>*/}
                                                     </td>
                      
            
                                                     <td>
                                                     <button className="btn btn-sm px-0 py-0 btn-danger">
                                                      <i class="fas fa-trash"></i>
                                                      </button>
                                                     {/* <Link  className='warning'><FontAwesomeIcon icon={faDeleteLeft} /></Link>*/}
    
                                                      </td>

                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>A104</td>
                                                    <td>raman</td>
                                                    <td>13 Jun 2019</td>
                                                    <td>14 Jun 2019</td>
                                                    <td>general</td>
                                                    <td>
                                                    <td>
                                                    <button className="btn btn-sm px-0 py-0 btn-primary">
                                                      <i class="fas fa-edit"></i>
                                                      </button>
                                                     {/*<Link  className='warning'> <FontAwesomeIcon icon={faEdit} /></Link>*/}
                                                     </td>
                      
            
                                                     <td>
                                                     <button className="btn btn-sm px-0 py-0 btn-danger">
                                                      <i class="fas fa-trash"></i>
                                                      </button>
                                                      {/*<Link  className='warning'><FontAwesomeIcon icon={faDeleteLeft} /></Link>*/}
    
                                                      </td>
                                                    </td>
                                                </tr>
                                               
                                                
        
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </div>


        </>
    )
}
export default All_bed;
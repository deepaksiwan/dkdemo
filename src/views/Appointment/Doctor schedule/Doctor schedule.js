import React from "react";
import "src/asset/plugins/bootstrap/css/bootstrap.min.css";
import "src/asset/css/main.css";
import "src/asset/plugins/dropzone/dropzone.css";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit , faDeleteLeft} from '@fortawesome/free-solid-svg-icons'
/*import "../../../asset/plugins/bootstrap/css/bootstrap.min.css";

import "../../../asset/css/main.css";*/



const Doctor_schedule = () => {
    
    return (
        <>
        <div>
        <section class="content">
                    <div class="container-fluid">
                        <div class="block-header">
                            <h2>Doctor_schedule</h2>
                            <small class="text-muted">Welcome to Doctor</small>
                        </div>
                        <div class="row clearfix">
                            <div class="col-lg-12 col-md-12 col-sm-12">
                                <div class="card">
                                    <div class="header">
                                        <h2>Doctor Schedule</h2>
                                        <form class="form-inline d-flex my-2 my-lg-0">
                                        <Link to="Add schedule">
                                       <button class="col-2" type="button" class="btn btn-primary">Add Schedule</button>
                                       </Link>
                                            {/*<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>*/}
                                        </form>


                                    </div>
                                    <div class="body table-responsive">
                                        <table class="table table-bordered table-striped table-hover js-basic-example dataTable">
                                            <thead>
                                                <tr>
                                                    <th>Doctor Name</th>
                                                    <th>Department</th>
                                                    <th>Available Days</th>
                                                    <th>Available Time</th>
                                                    <th>Status</th>
                                                    
                                                </tr>
                                            </thead>
                                            <tfoot>
                                            </tfoot>
                                            <tbody>
                                                <tr>
                                                    
                                                    <th>Denise Stevens</th>
                                                    <th>Cardiology</th>
                                                    <th>Sunday</th>
                                                    <th>10:00 AM - 7:00 PM</th>
                                                    <th>
                                                        <td>
                                                    <button className="btn btn-sm px-0 py-0 btn-primary "  >
                                                      <i class="fas fa-edit"  ></i>
                                                      
                                                      </button>
                                                      </td>
                                                      <td>

                                                      <button className="btn-danger btn-sm px-0 py-0 btn btn-sm">
                                                      <i class="fas fa-trash"></i>
                                                      
                                                      </button>
                                                      </td>
                                                    </th>
                                                    
                                                </tr>
                                                <tr>
                                                    
                                                    <th>Dr. Aman dubey</th>
                                                    <th>Dentists</th>
                                                    <th>Monday</th>
                                                    <th>10:00 AM - 7:00 PM</th>
                                                    <th>
                                                    <td>
                                                    <button className="btn btn-sm px-0 py-0 btn-primary "  >
                                                      <i class="fas fa-edit"  ></i>
                                                      
                                                      </button>
                                                      </td>
                                                      <td>

                                                      <button className="btn-danger btn-sm px-0 py-0 btn btn-sm">
                                                      <i class="fas fa-trash"></i>
                                                      
                                                      </button>
                                                      </td>
                                                    </th>
                                                    
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
export default Doctor_schedule;
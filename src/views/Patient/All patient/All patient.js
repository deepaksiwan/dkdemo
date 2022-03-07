import React from "react";
import "src/asset/plugins/bootstrap/css/bootstrap.min.css";
import "src/asset/css/main.css";
import { Link } from 'react-router-dom'
//import "../../../asset/plugins/bootstrap/css/bootstrap.min.css";
//import "../../../asset/css/main.css";

const All_patient = () => {
    
    return (
        <>
            <div>
                <section class="content">
                    <div class="container-fluid">
                        <div class="block-header">
                            <h2>All patients</h2>
                            <small class="text-muted">Welcome to patient</small>
                        </div>
                        <div class="row clearfix">
                            <div class="col-lg-12 col-md-12 col-sm-12">
                                <div class="card">
                                    <div class="header">
                                        <h2>Hospital patient</h2>
                                        <form class="form-inline d-flex my-2 my-lg-0">
                                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                        </form>


                                    </div>
                                    <div class="body table-responsive">
                                        <table class="table table-bordered table-striped table-hover js-basic-example dataTable">
                                            <thead>
                                                <tr>
                                                    <th>image</th>
                                                    <th>Patient Id</th>
                                                    <th>Name</th>
                                                    <th>Age</th>
                                                    <th>address</th>
                                                    <th>Number</th>
                                                    <th>Last Visit</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                            <tfoot>
                                            </tfoot>
                                            <tbody>
                                                <tr>
                                                    <th>
                                                        <a href="" className=""><img src="http://via.placeholder.com/30x30" alt="user" className="" /></a>
                                                    </th>
                                                    <th>M001</th>
                                                    <th>Aman</th>
                                                    <th>25</th>
                                                    <th>delhi</th>
                                                    <th>9889080370</th>
                                                    <th>11 Jan 2019</th>
                                                    <th>
                                                        <span class="badge badge-success">Approved</span>
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <th>
                                                        <a href="" className=""><img src="http://via.placeholder.com/30x30" alt="user" className="" /></a>
                                                    </th>
                                                    <th>M002</th>
                                                    <th>Aman</th>
                                                    <th>30</th>
                                                    <th>gkp</th>
                                                    <th>9889080370</th>
                                                    <th>11 Jan 2019</th>
                                                    <th>
                                                        <span class="badge badge-success">Approved</span>
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <th>
                                                        <a href="" className=""><img src="http://via.placeholder.com/30x30" alt="user" className="" /></a>
                                                    </th>
                                                    <th>M003</th>
                                                    <th>Aman</th>
                                                    <th>15</th>
                                                    <th>patna</th>
                                                    <th>9889080370</th>
                                                    <th>11 Jan 2019</th>
                                                    <th>
                                                        <span class="badge badge-warning">pending</span>

                                                    </th>
                                                </tr>
                                                <tr>
                                                    <th>
                                                        <a href="" className=""><img src="http://via.placeholder.com/30x30" alt="user" className="" /></a>
                                                    </th>
                                                    <th>M004</th>
                                                    <th>Aman</th>
                                                    <th>25</th>
                                                    <th>delhi</th>
                                                    <th>9889080370</th>
                                                    <th>11 Jan 2019</th>
                                                    <th>
                                                        <span class="badge badge-success">Approved</span>
                                                    </th>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row clearfix">
                        <div className="col-sm-12 text-center">
                            <Link to="Add patient">
                            <a  className="btn btn-raised g-bg-cyan">Add patient</a>
                            </Link>
                                  
                        </div>
                    </div>
                </section>



            </div>

        </>

    )
}
export default All_patient;
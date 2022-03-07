import React from "react";
import "src/asset/plugins/bootstrap/css/bootstrap.min.css";
import "src/asset/css/main.css";
import { Link } from "react-router-dom";
/*import "../../../asset/plugins/bootstrap/css/bootstrap.min.css";
import "../../../asset/css/main.css";*/

const Payment = () => {
    return (
        <>
            <div>
                <section class="content">
                    <div class="container-fluid">
                        <div class="block-header">
                            <h2>Payments</h2>
                            <small class="text-muted">Welcome to Payments</small>
                        </div>
                        <div class="row clearfix">
                            <div class="col-lg-12 col-md-12 col-sm-12">
                                <div class="card">
                                    <div class="header">
                                        <h2>Hospital Payments</h2>
                                        <form class="form-inline d-flex my-2 my-lg-0">
                                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                                         <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                         </form>
                                    </div>
                                    <div class="body table-responsive">
                                        <table class="table table-bordered table-striped table-hover js-basic-example dataTable">
                                            <thead>
                                                <tr>
                                                    <th>Bill No</th>
                                                    <th>Bill Date</th>
                                                    <th>Patient</th>
                                                    <th>Doctor</th>
                                                    <th>Amount</th>
                                                    <th>status</th>
                                                </tr>
                                            </thead>
                                               <tfoot> 
                                            </tfoot>
                                            <tbody>
                                               <tr>
                                                    <th>11</th>
                                                    <th>02/21/2017</th>
                                                    <th>Aman</th>
                                                    <th>Arun Pandey</th>
                                                    <th>1000</th>
                                                    
                                                    <th>
                                                    <span class="badge badge-success">Paid</span>
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <th>12</th>
                                                    <th>03/21/2017</th>
                                                    <th>Pawan</th>
                                                    <th>Arun Pandey</th>
                                                    <th>2000</th>
                                                    
                                                    <th>
                                                    <span class="badge badge-warning">pending</span>
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <th>13</th>
                                                    <th>02/21/2018</th>
                                                    <th>Raman</th>
                                                    <th>Arun Pandey</th>
                                                    <th>1500</th>
                                                    
                                                    <th>
                                                    <span class="badge badge-success">paid</span>
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <th>14</th>
                                                    <th>02/21/2019</th>
                                                    <th>Aman</th>
                                                    <th>Arun Pandey</th>
                                                    <th>1000</th>
                                                    
                                                    <th>
                                                    <span class="badge badge-warning">pending</span>
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <th>15</th>
                                                    <th>02/21/2020</th>
                                                    <th>Raman</th>
                                                    <th>Arun Pandey</th>
                                                    <th>1500</th>
                                                   
                                                    <th>
                                                    <span class="badge badge-success">paid</span>
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <th>16</th>
                                                    <th>02/21/2021</th>
                                                    <th>Aman</th>
                                                    <th>Arun Pandey</th>
                                                    <th>3000</th>
                                                   
                                                    <th> <span class="badge badge-success">paid</span></th>
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
                            <Link to="Add payment">
                            <a  className="btn btn-raised g-bg-cyan">Add payment</a>
                            </Link>
                               
                               
                            
                        </div>
                    </div>
                </section>
               
            </div>
        </>
    )
}
export default Payment;
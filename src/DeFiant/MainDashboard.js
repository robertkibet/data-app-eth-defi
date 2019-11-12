import React, { useEffect } from "react";
import $ from "jquery";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

function MainDashboard() {
  useEffect(() => {
    M.AutoInit();
    var tabs = $(".tabs");
    M.Tabs.init(tabs, {});
    var elem = document.querySelector(".sidenav");
    M.Sidenav.init(elem, {
      edge: "left",
      inDuration: 250
    });
  });
  return (
    <div>
      {/*HEADER*/}
      <div>
        <nav>
          <div className="nav-wrapper container">
            <a href="/" className="brand-logo">
              <i className="material-icons">cloud</i>DeFiant
            </a>
            <a href="#" data-target="slide-out" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <a href="">
                  <i className="material-icons">account_circle</i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="material-icons">exit_to_app</i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <ul id="slide-out" className="sidenav">
          <li />
          <li>
            <a href="">
              <i className="material-icons">account_circle</i>My Account
            </a>
          </li>
          <li>
            <a href="">
              <i className="material-icons">exit_to_app</i>Log Out
            </a>
          </li>
          {/*<li>*/}
          {/*    <a href="#" data-activates="slide-out" className="button-collapse"><i*/}
          {/*        className="material-icons show-on-large">menu</i></a>*/}

          {/*</li>*/}
        </ul>
      </div>
      {/*    END HEADER*/}
      <div className={"container"}>
        {/*BODY*/}

        <div className={"spacer"}>&nbsp;</div>
        <h6>
          Welcome back, <span>robert.kibet</span>
        </h6>
        <br />
        <div className="row">
          <div className="col s12">
            <ul className="tabs">
              <li className="tab col s3">
                <a className="active" href="#account">
                  ACCOUNT
                </a>
              </li>
              <li className="tab col s3">
                <a href="#verifyAddress">VERIFY ADDRESS</a>
              </li>
              <li className="tab col s3">
                <a href="#notifications">NOTIFICATIONS</a>
              </li>
              <li className="tab col s3">
                <a href="#profile">PROFILE</a>
              </li>
            </ul>
          </div>
          <div id="account" className="col s12">
            <div className={"spacer"}></div>
            <div className="row">
              <div className="col m4 s12">
                <div className="card horizontal col s12 m10 blue-grey darken-4">
                  <div className="card-image valign-wrapper">
                    <i className="large material-icons">attach_money</i>
                  </div>
                  <div className="card-stacked">
                    <div className="card-content">
                                          <h6 className="white-text">ETH Wallet</h6>
                                          <h4 className={"font-medium m-b-0 white-text"}>$34,528</h4>
                    </div>
                  </div>
                </div>

                <div className="card horizontal col s12 m10">
                  <div className="card-image valign-wrapper">
                    <i className="large material-icons">attach_money</i>
                  </div>
                  <div className="card-stacked">
                    <div className="card-content">
                      <h6>ETH Wallet</h6>
                      <h4 className={"font-medium m-b-0"}>$34,528</h4>
                    </div>
                  </div>
                </div>

                <div className="card horizontal col s12 m10">
                  <div className="card-image valign-wrapper">
                    <i className="large material-icons">attach_money</i>
                  </div>
                  <div className="card-stacked">
                    <div className="card-content">
                      <h6>ETH Wallet</h6>
                      <h4 className={"font-medium m-b-0"}>$34,528</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col m8 s12">
                <div className="card">
                  <div className="card-content">
                    <div className="d-flex align-items-center">
                      <div>
                        <h5 className="card-title center-align">Addresses</h5>
                        <h6 className="card-subtitle center-align">
                          Manage all your DeFi Addresses
                        </h6>
                      </div>
                    </div>
                    <div className="table-responsive m-b-20">
                      <table className={"table striped"}>
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Item Name</th>
                            <th>Item Price</th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            <td>Alvin</td>
                            <td>Eclair</td>
                            <td>
                              <button
                                type={"button"}
                                className={"btn btn-small default"}
                              >
                                TopUp
                              </button>
                              <button
                                type={"button"}
                                color="primary"
                                className={"btn-small blue"}
                              >
                                Borrow
                              </button>
                              <button
                                type={"button"}
                                color="danger"
                                className={
                                  "btn waves-effect waves-teal disabled"
                                }
                              >
                                Closed
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className={"spacer"}>&nbsp;</div>
                    <a href="#!">
                      <i className="material-icons">keyboard_arrow_right</i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="verifyAddress" className="col s12">
            <div className={"spacer"}></div>

            <div className="card">
              <div className="card-content">
                <div className="d-flex align-items-center">
                  {/*verify address form*/}
                  <div className="row">
                    <form className="col s12 verifyAddressForm">
                      <div className="input-field col s8">
                        <input
                          id="name"
                          type="text"
                          name={"address"}
                          className="validate"
                          value={""}
                          onChange={""}
                        />
                        <label htmlFor="name">Submit address</label>
                      </div>
                      <div className="input-field col s4">
                        <button
                          className="btn waves-effect waves-light"
                          type="submit"
                          name="action"
                        >
                          <i class="material-icons right">add</i>Add
                        </button>
                      </div>
                    </form>
                  </div>
                  {/*end verify address form*/}
                  <div>
                    <h5 className="card-title">Your Address</h5>
                    <h6 className="card-subtitle">
                      Manage all your DeFi Addresses in one place
                    </h6>
                  </div>
                </div>
                <div className="table-responsive m-b-20">
                  <table className={"table striped"}>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Item Name</th>
                        <th>Item Price</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>Alvin</td>
                        <td>Eclair</td>
                        <td>
                          <button
                            type={"button"}
                            color="primary"
                            className={"btn-small blue"}
                          >
                            <i className={"material-icons"}>search</i> Verify
                          </button>
                          <button
                            type={"button"}
                            color="danger"
                            className={"btn-small red"}
                          >
                            <i className={"material-icons"}>delete</i> Delete
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className={"spacer"}>&nbsp;</div>
                <a href="#!">
                  <i className="material-icons">keyboard_arrow_right</i>
                </a>
              </div>
            </div>
          </div>
          <div id="notifications" className="col s12">
            <div className={"spacer"}></div>
            Notifications Tab
          </div>
          <div id="profile" className="col s12">
            <div className={"spacer"}></div>
            Profile Tab
          </div>
        </div>
        <div className={"spacer"}>&nbsp; </div>

        {/*END BODY*/}
      </div>
    </div>
  );
}

export default MainDashboard;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import Web3 from "web3";
import sha256 from "sha256"
import { registerCar } from "../store/actions/carActions";

let web3js = "";

let contract = "";

let accounts = "";

let ethereum = "";


const initContract = props => {
  contract = new web3js.eth.Contract([
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "string",
          "name": "_hash",
          "type": "string"
        }
      ],
      "name": "issueCar",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "withdraw",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getListOfHashes",
      "outputs": [
        {
          "internalType": "string[]",
          "name": "",
          "type": "string[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ], "0xa7F318F296603482Cb96Eb7AF942775035154559")
  console.log(contract)
}





const CarDetails = props => {
  const [accountAddress, setAccountAddress] = useState("");
  const [hash, setHash] = useState("");
  let { car, auth, user } = props;
  const path = window.location.href;
  const carId = path.substring(path.lastIndexOf('/') + 1);

  useEffect(async () => {
    ethereum = window.ethereum;
    await ethereum.enable();
    if (!ethereum || !ethereum.isMetaMask) {
      // throw new Error('Please install MetaMask.')
      alert(`METAMASK NOT INSTALLED!!\nYOU WON'T BE ABLE TO MAKE TRANSACTIONS`);
    } else {
      checkWeb3();
      initContract()
    }
  }, []);

  async function checkWeb3() {
    // Use Mist/MetaMask's provider.
    web3js = new Web3(window.web3.currentProvider);
    console.log(web3js);
    //get selected account on metamask
    accounts = await web3js.eth.getAccounts();
    console.log(accounts);
    setAccountAddress(accounts[0]);
    //get network which metamask is connected too
    let network = await web3js.eth.net.getNetworkType();
    console.log(network);
  }



  const issueCar = async (hashedData) => {
    try {
      // console.log(typeof hashedData)
      let getData = await contract.methods.issueCar(hashedData).send({ from: accountAddress });
      let getList = await contract.methods.getListOfHashes().call();

      // console.log(getList)
      return getList
    } catch (e) {
      console.log(e)
    }
  }

  const onBuy = async () => {
    if (accountAddress) {
      const dataToHash = {
        ...car,
        ...auth,
        timestamp: Date.now()
      }
      const hashedData = sha256(JSON.stringify(dataToHash))
      console.log(hashedData)
      setHash(hashedData)
      const res = await issueCar(hashedData)
      // console.log("res ==>", res);
      props.registerCar({ res, car, carId });
    }
    else {
      alert("Please connect to Metamask to continue !!")
    }
  }

  if (car) {
    console.log('car ==>', auth)
    return (
      <div>
        <Navbar />
        <section className="small-banner-area organic-breadcrumb">
          <div className="container">
            <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
              <div className="col-first">
                <h1>Product Details Page</h1>
                <nav className="d-flex align-items-center">
                  <Link to="/">
                    Home<span className="lnr lnr-arrow-right"></span>
                  </Link>
                  <Link to="/buy">
                    Buy<span className="lnr lnr-arrow-right"></span>
                  </Link>
                  <Link to="#">Car</Link>
                </nav>
              </div>
            </div>
          </div>
        </section>
        <div className="product_image_area">
          <div className="container">
            <div className="row s_product_inner">
              <div className="col-lg-6">
                <img alt="" className="car-image" src={car.imgUrl} />
              </div>
              <div className="col-lg-5 offset-lg-1">
                <div className="s_product_text">
                  <h3>{`${car.manufacturer} ${car.name} ${car.model}`}</h3>
                  <h2>{car.price}</h2>
                  <p>{car.description}</p>
                  <div className="card_area d-flex align-items-center">
                    {
                      console.log(user)

                    }
                    {

                      user ?
                        <a className="primary-btn" href="javascript:void(0)" onClick={() => onBuy()} >
                          Buy
                        </a>
                        : <p>Please, login to buy!</p>
                    }

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="product_description_area">
          <div className="container">
            <h3>Specification</h3>

            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="home-tab"
                  data-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="false"
                >
                  Performance
                </a>
              </li>
            </ul>

            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="table-responsive">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>
                          <h5>Engine Size</h5>
                        </td>
                        <td>
                          <h5>{car.engineSize}</h5>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h5>Cylinders</h5>
                        </td>
                        <td>
                          <h5>{car.cylinders}</h5>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h5>Feul Capacity</h5>
                        </td>
                        <td>
                          <h5>{car.feulCapacity}</h5>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h5>Feul Type</h5>
                        </td>
                        <td>
                          <h5>{car.feulType}</h5>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h5>Transmission</h5>
                        </td>
                        <td>
                          <h5>{car.transmission}</h5>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h5>Gear Box</h5>
                        </td>
                        <td>
                          <h5>{car.gearBox}</h5>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="profile-tab"
                  data-toggle="tab"
                  href="#profile"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Characterstics
                </a>
              </li>
            </ul>

            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <div className="table-responsive">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>
                          <h5>Width</h5>
                        </td>
                        <td>
                          <h5>{car.width}</h5>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h5>Height</h5>
                        </td>
                        <td>
                          <h5>{car.height}</h5>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h5>Length</h5>
                        </td>
                        <td>
                          <h5>{car.length}</h5>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h5>Weight</h5>
                        </td>
                        <td>
                          <h5>{car.weight}</h5>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h5>Color</h5>
                        </td>
                        <td>
                          <h5>{car.color}</h5>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h5>Capacity</h5>
                        </td>
                        <td>
                          <h5>{car.capacity}</h5>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h5>Doors</h5>
                        </td>
                        <td>
                          <h5>{car.doors}</h5>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  } else {
    return null;
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const cars = state.firestore.data.cars;
  const car = cars ? cars[id] : null;
  return {
    car: car,
    auth: state.firebase.profile,
    user: state.firebase.auth.uid
  };
};


const mapDispatchToProps = dispatch => {
  return {
    registerCar: details => dispatch(registerCar(details))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "cars" }])
)(CarDetails);

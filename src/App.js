import React, { useState } from "react";
import "./App.css";
import "dayjs/locale/fr";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import Button from "@mui/material/Button";
import Icon from '@mui/material/Icon';
import ToggleButton from "@mui/material/ToggleButton";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import LoopOutlinedIcon from "@mui/icons-material/LoopOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import ContentCutOutlinedIcon from "@mui/icons-material/ContentCutOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import CakeOutlinedIcon from "@mui/icons-material/CakeOutlined";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import TextField from "@mui/material/TextField";
import { MuiTelInput } from "mui-tel-input";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { grey } from '@mui/material/colors';


function App() {
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
    customerEmail: "",
    customerGenre: "homme",
    checkedRecallSMS: true,
    checkedMarketingSMS: false,
    createdCustomer: false,
    birthday: dayjs("2014-08-18T21:11:54"),
    prestationDate: dayjs("2018-01-01T00:00:00.000Z"),
    fullDay: true,
    prestationDay: dayjs("2018-01-01T00:00:00.000Z"),
    prestationEnd: dayjs("2018-01-01T00:00:00.000Z"),
    showInfoCustomer: false,
    startHour: "",
    startMin: "",
    endHour: "",
    endMin: "",
    servedCustomer: false,
    CustomernotPresent: false,
  });
  const [PrestationList, setPrestationList] = useState([
    { id: 0, prestation: "", collaborateur: "", price: "", time: "" },
  ]);

  const handleChangeCustomerInfo = (name, value) => {
    setCustomerInfo({ ...customerInfo, [name]: value });
  };

  const handleChangePrestation = (event, item) => {
    const newArr = PrestationList.map((obj) => {
      if (obj.id === item.id) {
        switch (event.target.name) {
          case "prestation":
            return { ...obj, prestation: event.target.value };
          case "collaborateur":
            return { ...obj, collaborateur: event.target.value };
          case "price":
            return { ...obj, price: event.target.value };
          case "time":
            return { ...obj, time: event.target.value };
          default:
            return obj;
        }
      }
      return obj;
    });
    setPrestationList(newArr);
  };
  const handledeletePrestation = (event, item) => {
    if (PrestationList.length > 1) {
      setPrestationList(PrestationList.filter((a) => a.id !== item.id));
    }
  };

 
  return (
    <div class="container col-12 d-flex flex-column  justify-content-around ">
      {/* Customer informations Section */}
      <div class="row ">
        <div class="col-11  d-flex  align-items-center">
          <p style={{ color: "#34423E" }} class="h5">
            Rendez-vous
          </p>
        </div>
        <div class="col-1 d-flex justify-content-center   align-items-center "> 
 

          <button class="btn-back " style={{  width:"50px",height:"50px",marginRight:"10px"}}><Icon sx={{ color: grey[800] }} baseClassName="fa" className="fa-arrow-left" /></button>
          <button class="btn-validation " style={{  width:"50px",height:"50px"}}><Icon baseClassName="fa" className="fa-check" /></button>
     
        </div>
      </div>

      {/* Footer Section */}
      <div
        class="row  d-flex  align-items-center justify-content-center "
        style={{ backgroundColor: "#F6F7F8" }}
      >
        <div
          class="card  col-11 d-flex  align-items-center "
          style={{ marginTop: "50px" }}
        >
          <div class="card-body col-12  d-flex  justify-content-around align-items-center">
            <div class="col-5 d-flex   align-items-center ">
              <div class="col-1 d-flex   justify-content-center align-items-center ">
                <AccountCircleOutlinedIcon />
              </div>

              <div class="form-floating col-10">
                <FormControl
                  sx={{ m: 1, width: "100%" }}
                  variant="filled"
                  color="success"
                >
                  <InputLabel htmlFor="outlined-adornment-password">
                    Choisir un client
                  </InputLabel>
                  <OutlinedInput
                    value={customerInfo.name}
                    onChange={(e)=>handleChangeCustomerInfo('name',e.target.value)}
                    id="name"
                    name="name"
                    type={"text"}
                    variant="filled"
                    endAdornment={
                      <InputAdornment position="end">
                        {customerInfo.name && !customerInfo.createdCustomer ? (
                          <Button
                            variant="contained"
                            color="success"
                            onClick={() =>
                              setCustomerInfo({
                                ...customerInfo,
                                createdCustomer: !customerInfo.createdCustomer,
                              })
                            }
                          >
                            Créer
                          </Button>
                        ) : null}
                      </InputAdornment>
                    }
                    label="Name"
                  />
                </FormControl>
              </div>
            </div>

            <div class="col-3 ">
              <div class="col-12">
                <MuiTelInput
                  langOfCountryName="fr"
                  value={customerInfo.phone}
                  onChange={
                    (e)=>{
                      handleChangeCustomerInfo('phone',e)}}
                />
              </div>
            </div>

            <div class="col-3 d-flex   align-items-center ">
              <div class="form-floating col-12">
                <FormControl sx={{ m: 1, width: "100%" }} variant="filled">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Email
                  </InputLabel>
                  <OutlinedInput
                    value={customerInfo.customerEmail}
                    onChange={(e)=>handleChangeCustomerInfo('customerEmail',e.target.value)}
                    id="customerEmail"
                    name="customerEmail"
                    type={"text"}
                    variant="filled"
                    label="Email"
                  />
                </FormControl>
              </div>
            </div>
            {customerInfo.createdCustomer ? (
              <div class=" d-flex  justify-content-end  ">
                <ToggleButton
                  value="check"
                  selected={false}
                  onChange={() => {
                    setCustomerInfo({
                      ...customerInfo,
                      name: "",
                      phone: "",
                      customerEmail: "",
                      customerGenre: "homme",
                      checkedRecallSMS: true,
                      checkedMarketingSMS: false,
                      createdCustomer: false,
                    });
                  }}
                >
                  <DeleteOutlineIcon />
                </ToggleButton>
              </div>
            ) : null}
          </div>

          {customerInfo.createdCustomer ? (
            <>
              <div class="card-body col-12  d-flex  justify-content-around align-items-center">
                <div class="col-4 d-flex   align-items-center ">
                  <div class="col-1 d-flex   justify-content-center align-items-center ">
                    <PermIdentityOutlinedIcon />
                  </div>

                  <div class="form-floating col-8">
                    <ToggleButtonGroup
                      color="primary"
                      name="customerGenre"
                      value={customerInfo.customerGenre}
                      exclusive
                      onChange={(e) =>{
                        handleChangeCustomerInfo("customerGenre",e.target.value)
                      }
                       
                      }
                      aria-label="Platform"
                    >
                      <ToggleButton value="homme">Homme</ToggleButton>
                      <ToggleButton value="femme">Femme</ToggleButton>
                      <ToggleButton value="enfant">Enfant</ToggleButton>
                    </ToggleButtonGroup>




                  </div>
                </div>

                <div class="col-3 d-flex   align-items-center ">
                  <div class="col-1 d-flex   justify-content-start align-items-center ">
                    <CakeOutlinedIcon />
                  </div>
                  <div class="form-floating d-flex   justify-content-start align-items-center col-10">
                    <div class="col-10 d-flex justify-content-start">
                      <LocalizationProvider
                        dateAdapter={AdapterDayjs}
                        adapterLocale="fr"
                      >
                        <MobileDatePicker
                          label=""
                          inputFormat="DD"
                          value={customerInfo.birthday}
                          onChange={(newValue) =>
                            handleChangeCustomerInfo("birthday", newValue)
                          }
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label=""
                              style={{ textAlign: "center" }}
                              name="birthday"
                            />
                          )}
                        />

                        <MobileDatePicker
                          label=""
                          inputFormat="MMM"
                          value={customerInfo.birthday}
                          onChange={(newValue) =>
                            handleChangeCustomerInfo("birthday", newValue)
                          }
                          renderInput={(params) => (
                            <TextField {...params} label="" name="birthday" />
                          )}
                        />
                      </LocalizationProvider>
                    </div>
                  </div>
                </div>

                <div class="col-5 d-flex   justify-content-start align-items-center ">
                  <div class="form-floating col-6 d-flex   justify-content-start align-items-center">
                    <div class="form-check form-switch d-flex   justify-content-start align-items-center">
                      <label class="switch">
                        <input
                          type="checkbox"
                          style={{ width: "10px", height: "5px" }}
                          defaultChecked={customerInfo.checkedRecallSMS}
                          onChange={() =>
                            setCustomerInfo({
                              ...customerInfo,
                              checkedRecallSMS: !customerInfo.checkedRecallSMS,
                            })
                          }
                        />
                        <span class="slider round"></span>
                      </label>
                      <label
                        class="form-check-label"
                        style={{ marginLeft: "15px" }}
                        for="flexSwitchCheckDefault"
                      >
                        SMS de rappel
                      </label>
                    </div>
                  </div>
                  <div class="form-floating col-6 d-flex   justify-content-start align-items-between ">
                    <div class="form-check form-switch">
                      <label class="switch">
                        <input
                          type="checkbox"
                          defaultChecked={!customerInfo.checkedMarketingSMS}
                          onChange={() =>
                            setCustomerInfo({
                              ...customerInfo,
                              checkedMarketingSMS:
                                !customerInfo.checkedMarketingSMS,
                            })
                          }
                        />
                        <span class="slider round"></span>
                      </label>
                      <label
                        class="form-check-label "
                        style={{ marginLeft: "15px" }}
                        for="flexSwitchCheckDefault"
                      >
                        SMS marketing
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card-body col-12  d-flex  justify-content-start align-items-center ">
                <InfoOutlinedIcon />
                {!customerInfo.showInfoCustomer ? (
                  <p
                    onClick={() =>
                      setCustomerInfo({
                        ...customerInfo,
                        showInfoCustomer: !customerInfo.showInfoCustomer,
                      })
                    }
                  >
                    {" "}
                    <strong>
                      <ins>Info client </ins>
                    </strong>
                  </p>
                ) : (
                  <div
                    class="col-11 d-flex  flex-column"
                    onClick={() =>
                      setCustomerInfo({
                        ...customerInfo,
                        showInfoCustomer: !customerInfo.showInfoCustomer,
                      })
                    }
                    style={{
                      border: "1px dashed #5F706A",
                      padding: "20px",
                      borderRadius: "5px",
                      width: "90%",
                    }}
                  >
                    <p>Info client</p>
                    <p>
                      Quam inposita tranquillis pleraeque sunt primigenia eis
                      quae institutores ad.
                    </p>
                  </div>
                )}
              </div>

              <div class="card-body col-12  d-flex  justify-content-start align-items-center">
                <div class=" col-4  d-flex  justify-content-center align-items-center">
                  <p>
                    <CardMembershipIcon />{" "}
                    <strong>
                      <ins>Carte de fidélité: </ins>
                    </strong>{" "}
                    Points : 42 - gains: 10.00$ (+){" "}
                  </p>
                </div>
                <div class=" col-4  d-flex  justify-content-center align-items-center">
                  <p>
                    <ContentCopyIcon />{" "}
                    <strong>
                      <ins>Forfait brushing par 5 - cheveux courts </ins>
                    </strong>{" "}
                    (4){" "}
                  </p>
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>

      {/* Day Section */}
      <div
        class="row d-flex  align-items-center justify-content-center "
        style={{ backgroundColor: "#F6F7F8" }}
      >
        <div
          class="card  col-11 d-flex  align-items-center"
          style={{ marginTop: "50px" }}
        >
          <div class="card-body col-12  d-flex  justify-content-start align-items-center">
            <div class="col-4 d-flex   align-items-center ">
              <div class="col-1 d-flex   justify-content-center align-items-center">
                <CalendarTodayOutlinedIcon />
              </div>

              <div class="form-floating col-11">
                <LocalizationProvider
                  dateAdapter={AdapterDayjs}
                  adapterLocale="fr"
                >
                  <MobileDatePicker
                    label=""
                    inputFormat="dddd DD MMMM"
                    value={customerInfo.prestationDay}
                    onChange={(newValue) =>
                      handleChangeCustomerInfo("prestationDay", newValue)
                    }
                    renderInput={(params) => (
                      <TextField {...params} style={{ width: "100%" }} />
                    )}
                  />
                </LocalizationProvider>
              </div>
            </div>

            {customerInfo.fullDay ? (
              <div class="col-5 d-flex   align-items-center">
                <div class="col-1 d-flex   justify-content-center align-items-center ">
                  De
                </div>

                <div class=" col-5 d-flex justify-content-start align-items-center">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <MobileTimePicker
                      label=""
                      value={customerInfo.startHour}
                      onChange={(newValue) =>
                        handleChangeCustomerInfo("startHour", newValue)
                      }
                      inputFormat="hh"
                      views={["hours"]}
                      renderInput={(params) => <TextField {...params} />}
                    />

                    <MobileTimePicker
                      label=""
                      value={customerInfo.startMin}
                      onChange={(newValue) =>
                        handleChangeCustomerInfo("startMin", newValue)
                      }
                      inputFormat="mm"
                      views={["minutes"]}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </div>

                <div class="col-1 d-flex   justify-content-center align-items-center ">
                  à
                </div>

                <div class=" col-5 d-flex justify-content-around align-items-center">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <MobileTimePicker
                      label=""
                      value={customerInfo.endHour}
                      onChange={(newValue) =>
                        handleChangeCustomerInfo("endHour", newValue)
                      }
                      inputFormat="hh"
                      views={["hours"]}
                      renderInput={(params) => <TextField {...params} />}
                    />

                    <MobileTimePicker
                      label=""
                      value={customerInfo.endMin}
                      onChange={(newValue) =>
                        handleChangeCustomerInfo("endMin", newValue)
                      }
                      inputFormat="mm"
                      views={["minutes"]}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>

                  <div class="col-2 d-flex   justify-content-end align-items-center ">
                    <p>
                      <strong>(1h)</strong>
                    </p>
                  </div>
                </div>
              </div>
            ) : null}

            <div class="col-2 d-flex   justify-content-end align-items-center ">
              <div class="col-10">
                <div
                  class="ui checkbox"
                  onClick={() =>
                    setCustomerInfo({
                      ...customerInfo,
                      fullDay: !customerInfo.fullDay,
                    })
                  }
                >
                  <input type="checkbox" name="fullDay" value={customerInfo.fullDay} />
                  <label>
                    <b>Jour entier</b>
                  </label>
                </div>{" "}
              </div>
            </div>

            <div class="col-1">
              <div class="form-floating col-12 d-flex  justify-content-end align-items-center">
                <p style={{ color: "#48BB78" }}>
                  <LoopOutlinedIcon />{" "}
                  <strong>
                    <ins>Répéter </ins>
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Prestation Section */}
      {PrestationList.map((prestation, index) => (
        <div
          class="row d-flex  align-items-center justify-content-center "
          style={{ backgroundColor: "#F6F7F8" }}
          key={index}
        >
          <div
            class="card  col-11 d-flex  align-items-center"
            style={{ marginTop: "50px" }}
          >
            <div class="card-body col-12  d-flex  justify-content-around ">
              <div class="col-8 d-flex   justify-content-start align-items-center ">
                <div class="col-4 d-flex   justify-content-start align-items-center ">
                  <div class="col-1 d-flex   justify-content-center align-items-center ">
                    <DescriptionOutlinedIcon />
                  </div>

                  <div class="form-floating col-9 d-flex flex-row ">
                    {prestation.prestation ? (
                      <div
                        style={{
                          backgroundColor: "#48BB78",
                          borderTopLeftRadius: "5px",
                          borderBottomLeftRadius: "5px",
                          width: "8px",
                        }}
                      ></div>
                    ) : null}

                    <FormControl
                      style={{ width: "100%" }}
                      variant="filled"
                      color="success"
                    >
                      <InputLabel id="demo-simple-select-label">
                        Choisir une prestation
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={prestation.prestation}
                        label="prestation"
                        name="prestation"
                        onChange={(e) => {
                          handleChangePrestation(e, prestation);
                        }}
                      >
                        <MenuItem value="Shampoing Coupe Coiffage">
                          Shampoing Coupe Coiffage
                        </MenuItem>
                        <MenuItem value="Couleur">Couleur</MenuItem>
                        <MenuItem value="Shampoing Brushing Court">
                          Shampoing Brushing Court
                        </MenuItem>
                        <MenuItem value="Shampoing Coupe Brushing Court">
                          Shampoing Coupe Brushing Court
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>

                <div class="d-flex col-3 flex-row ">
                  {prestation.collaborateur ? (
                    <div
                      style={{
                        backgroundColor: "#63B3ED",
                        borderTopLeftRadius: "5px",
                        borderBottomLeftRadius: "5px",
                        width: "8px",
                      }}
                    ></div>
                  ) : null}
                  <FormControl
                    style={{ width: "100%" }}
                    variant="filled"
                    color="success"
                  >
                    <InputLabel id="demo-simple-select-label">
                      Choisir collaborateur
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={prestation.collaborateur}
                      name="collaborateur"
                      label="collaborateur"
                      onChange={(e) => handleChangePrestation(e, prestation)}
                    >
                      <MenuItem value="Jean Michel">Jean Michel</MenuItem>
                      <MenuItem value="John Walls">John Walls</MenuItem>
                      <MenuItem value="Pierre Walter">Pierre Walter</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
              <div class="col-4 d-flex   justify-content-end">
                <div
                  class="col-4 d-flex  justify-content-end"
                  style={{ marginRight: "20px" }}
                >
                  <div class="input-group">
                    <input
                      type="number"
                      name="price"
                      value={prestation.price}
                      onChange={(e) => handleChangePrestation(e, prestation)}
                      class="form-control text-center"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                    />
                    <span
                      class="input-group-text"
                      id="inputGroup-sizing-default"
                      style={{ paddingLeft: "20px", paddingRight: "20px" }}
                    >
                      {" "}
                      €
                    </span>
                  </div>
                </div>

                {customerInfo.createdCustomer && customerInfo.name ? (
                  <>
                    <div className="col-4 d-flex  justify-content-end">
                      <div class="input-group   ">
                        <input
                          type="number"
                          name="time"
                          value={prestation.time}
                          onChange={(e) =>
                            handleChangePrestation(e, prestation)
                          }
                          class="form-control text-center"
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-sizing-default"
                        />
                        <span
                          class="input-group-text"
                          id="inputGroup-sizing-default"
                        >
                          {" "}
                          min
                        </span>
                      </div>
                    </div>

                    <div className="col-3  d-flex  justify-content-end ">
                      <ToggleButton
                        value="check"
                        name="deletePrestation"
                        selected={false}
                        onChange={(e) => handledeletePrestation(e, prestation)}
                      >
                        <DeleteOutlineIcon />
                      </ToggleButton>
                    </div>
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ))}

      <div class="row d-flex  justify-content-center align-items-center ">
        <div
          class="d-flex col-11 justify-content-center align-items-center "
          style={{
            border: "1px dashed #5F706A",
            padding: "20px",
            borderRadius: "5px",
            marginTop: "50px",
          }}
        >
          <p
            onClick={(index) =>
              setPrestationList([
                ...PrestationList,
                {
                  id: index,
                  prestation: "",
                  collaborateur: "",
                  price: "",
                  time: "",
                },
              ])
            }
            style={{ backgroundColor: "#F6F7F8" }}
          >
            <AddCircleOutlineOutlinedIcon />{" "}
            <strong>Ajouter une prestation a la suite</strong>
          </p>
        </div>
      </div>

      <div
        class="row  d-flex  justify-content-center align-items-center "
        style={{ backgroundColor: "#F6F7F8" }}
      >
        <div
          class="col-11 d-flex justify-content-start align-items-center "
          style={{ marginTop: "10px" }}
        >
          <div class="col-2 d-flex justify-content-between align-items-center ">
            <p>
              <DescriptionOutlinedIcon />{" "}
              <strong>
                <ins>Ajouter un titre</ins>
              </strong>
            </p>
          </div>
          <div class="col-10 d-flex justify-content-start align-items-center">
            <p>
              <ModeEditOutlineOutlinedIcon />{" "}
              <strong>
                <ins>Ajouter une note</ins>
              </strong>
            </p>
          </div>
        </div>
      </div>

      {customerInfo.createdCustomer ? (
        <div
          class="row d-flex  justify-content-center align-items-center  "
          style={{ borderTop: "1px solid #5F706A", backgroundColor: "#F6F7F8" }}
        >
          <div
            class="col-11 d-flex justify-content-start align-items-center "
            style={{ marginTop: "10px", backgroundColor: "#F6F7F8" }}
          >
            <div class="col-6 d-flex justify-content-start align-items-center ">
              <div class="col-2 d-flex justify-content-between align-items-center ">
                {customerInfo.servedCustomer ? (
                  <button
                    onClick={() =>
                      setCustomerInfo({
                        ...customerInfo,
                        CustomernotPresent: false,
                        servedCustomer: !customerInfo.servedCustomer,
                      })
                    }
                    type="button"
                    class="btn btn-primary"
                  >
                    Choisi(e)
                  </button>
                ) : (
                  <p
                    onClick={() =>
                      setCustomerInfo({
                        ...customerInfo,
                        CustomernotPresent: false,
                        servedCustomer: !customerInfo.servedCustomer,
                      })
                    }
                  >
                    {" "}
                    <strong>
                      <ins>Choisi(e)</ins>
                    </strong>
                  </p>
                )}
              </div>

              <div class="col-2 d-flex justify-content-start align-items-center ">
                {customerInfo.servedCustomer ? (
                  <button
                    onClick={() =>
                      setCustomerInfo({
                        ...customerInfo,
                        servedCustomer: !customerInfo.servedCustomer,
                      })
                    }
                    type="button"
                    class="btn btn-success"
                  >
                    Venu
                  </button>
                ) : (
                  <p>
                    {" "}
                    <strong>
                      <ins>Venu</ins>
                    </strong>
                  </p>
                )}
              </div>

              <div class="col-2 d-flex justify-content-start align-items-center ">
                {customerInfo.CustomernotPresent ? (
                  <button
                    onClick={() =>
                      setCustomerInfo({
                        ...customerInfo,
                        CustomernotPresent: false,
                      })
                    }
                    type="button"
                    class="btn btn-danger"
                  >
                    Pas venu
                  </button>
                ) : (
                  <p
                    onClick={() =>
                      setCustomerInfo({
                        ...customerInfo,
                        servedCustomer: false,
                        CustomernotPresent: true,
                      })
                    }
                  >
                    <strong>
                      <ins>Pas venu</ins>
                    </strong>
                  </p>
                )}
              </div>

              <></>
              <div class="col-2 d-flex justify-content-start align-items-center ">
                <p>
                  <ContentCopyIcon />{" "}
                  <strong>
                    <ins>Copier</ins>
                  </strong>
                </p>
              </div>
              <div class="col-2 d-flex justify-content-start align-items-center ">
                <p>
                  <ContentCutOutlinedIcon />{" "}
                  <strong>
                    <ins>Couper</ins>
                  </strong>
                </p>
              </div>
            </div>
            <div class="col-6 d-flex justify-content-end align-items-center ">
              <div class="col-7 d-flex justify-content-end align-items-center ">
                <button
                  type="button"
                  class="btn  btn-lg"
                  style={{ border: "2px solid #ECEEED", padding: "10px" }}
                >
                  Plus d'options (produits,remises, ...)
                </button>
              </div>

              <div class="col-4 d-flex justify-content-end align-items-center ">
                <button
                  type="button"
                  class="btn  btn-lg"
                  style={{
                    backgroundColor: "#48BB78",
                    color: "#fff",
                    padding: "10px",
                  }}
                >
                  Encaisser 30.00$
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          class="row d-flex  justify-content-center align-items-center  "
          style={{ borderTop: "1px solid #5F706A", backgroundColor: "#F6F7F8" }}
        >
          <p style={{ marginTop: "10px" }}>
            {" "}
            <strong>
              <ins>Choisi(e)</ins>
            </strong>
          </p>
        </div>
      )}
    </div>
  );
}
export default App;

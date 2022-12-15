# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



{/* <div class="container">
  <div class="row">
  <div class="col-sm">
      <p><u>Rendez-vous</u></p>

    </div>
    <div class="col-sm">

 <FontAwesomeIcon icon="fa-regular fa-calendar" />

 
    </div>
    <div class="col-sm">
    <div class="form-check form-switch">
    <label class="switch">
  <input type="checkbox"  />
  <span class="slider round"></span>
</label>
  <label class="form-check-label" for="flexSwitchCheckDefault">SMS de rappel</label>
</div>
<div>
<label class="switch">
  <input type="checkbox"  />
  <span class="slider round"></span>
</label>
  <label class="form-check-label" for="flexSwitchCheckDefault">SMS marketing</label>
</div>
    </div>
  </div>

  <div class="row">
  <div class="col-sm">
    <div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Choisir un client</label>
</div>
    </div>
    <div class="col-sm">
    <MuiTelInput value={"+21650556209"} />
    </div>
    <div class="col-sm">
    <div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Email</label>
</div>
    </div>
    </div>





    <div class="row">
  <div class="col-sm">
  <ToggleButton
      value="check"
      color="success"
      onChange={() => {
        console.log("cccccc")
      }}
    >
      <CheckIcon />
    </ToggleButton>
   <ToggleButton
      value="check"
      selected={false}
      onChange={() => {
        console.log("cccccc")
      }}
    >
      <ArrowBackIcon />
    </ToggleButton> 
    <ToggleButton
      value="check"

      selected={false}
      onChange={() => {
        console.log("cccccc")
      }}
    >
      <DeleteOutlineIcon />
    </ToggleButton> 
    </div>
    <div class="col-sm">
    <MuiTelInput value={"+21650556209"} />
    </div>
    <div class="col-sm">

    <div class="ui three item menu">
  <a class=" item">Homme</a>
  <a class="active item">Femme</a>
  <a class="active item">Enfant</a>
</div>

    </div>
    <div class="col-sm">

  <p><CardMembershipIcon/> <strong><ins>Carte de fidélité: </ins></strong> Points : 42 - gains: 10.00$ (+) </p>
  <p><ContentCopyIcon/> <strong><ins>Forfait brushing par 5 - cheveux courts </ins></strong> (4) </p>
  <p><InfoOutlinedIcon/> <strong><ins>Info client </ins></strong></p>


</div>

    </div>

    <div class="row">
  <div class="col-sm">
    <p>
  <CalendarTodayOutlinedIcon/>
  <div class="form-floating mb-3">
  
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Lundi 21 Mars</label>
</div>
</p>
    </div>

    <div class="col-sm">

    <div class="ui checkbox">
  <input type="checkbox" name="example"/>
  <label><b>Jour entier</b></label>

</div>
</div>


<div class="col-sm">

<p style={{color: "#48BB78"}}><LoopOutlinedIcon/> <strong><ins>Répéter </ins></strong></p>

</div>

<div class="col-sm">

<p><DescriptionOutlinedIcon/> <strong><ins>Ajouter un titre</ins></strong></p>
<p><ModeEditOutlineOutlinedIcon/> <strong><ins>Ajouter une note</ins></strong></p>
<p><ContentCopyIcon/> <strong><ins>Copier</ins></strong></p>
<p><ContentCutOutlinedIcon/> <strong><ins>Couper</ins></strong></p>
<p><DeleteIcon/> <strong><ins>Supprimer</ins></strong></p>
<p> <strong><ins>Choisi(e)</ins></strong></p>
<p> <strong><ins>Venu</ins></strong></p>
<p><strong><ins>Pas venu</ins></strong></p>
<button type="button" class="btn  btn-lg" style={{backgroundColor: "#48BB78",color: "#fff", padding:"10px"}}>Encaisser 30.00$</button>
<button type="button" class="btn  btn-lg" style={{border: "2px solid #ECEEED", padding:"10px"}}>Plus d'options (produits,remises, ...)</button>

</div>

    </div>


    <div class="row">
  <div class="d-flex justify-content-center align-items-center" style={{border: "1px dashed #5F706A" ,padding: '20px', borderRadius:"5px" }}>
  <p style={{color: "#5F706A"}}><AddCircleOutlineOutlinedIcon/> <strong>Ajouter une prestation a la suite</strong></p>
    </div>
    </div>





    <div class="row">
    <div class="d-flex flex-row mb-3">
  <div  style={{backgroundColor:"#48BB78", borderTopLeftRadius:"5px", borderBottomLeftRadius:"5px", width:"8px"}}></div>
  <div >   <div class="form-floating">
      <select class="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
        <option selected>Coupe homme (cheveux courts) </option>
        <option value="1">Coupe homme (cheveux courts)</option>
        <option value="2">Coupe homme (cheveux courts)</option>
        <option value="3">Coupe homme (cheveux courts)</option>
      </select>
      <label for="floatingSelectGrid">Prestation</label>
    </div></div>
 
</div>



<div class="d-flex flex-row mb-3">
  <div  style={{backgroundColor:"#63B3ED", borderTopLeftRadius:"5px", borderBottomLeftRadius:"5px", width:"8px"}}></div>
  <div >   <div class="form-floating">
      <select class="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
        <option selected>Jean-Micheal </option>
        <option value="1">Jean-Micheal</option>
        <option value="2">Jean-Micheal</option>
        <option value="3">Jean-Micheal</option>
      </select>
      <label for="floatingSelectGrid">Avec</label>
    </div></div>
 
</div>



<div className="col-md-1  ">
<div class="input-group mb-3  " >
  <input type="text" value = "60" class="form-control text-center" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
  <span class="input-group-text" id="inputGroup-sizing-default"> €</span>
</div>
</div>

<div className="col-md-1  ">
<div class="input-group mb-3  " >
  <input type="text" value = "60" class="form-control text-center" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
  <span class="input-group-text" id="inputGroup-sizing-default"> min</span>
</div>
</div>

<div className="col-md-3  ">
<div class="btn-group" role="group" aria-label="Basic radio toggle button group">
  <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked />
  <label class="btn btn-outline-secondary" for="btnradio1">Homme</label>

  <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
  <label class="btn btn-outline-secondary" for="btnradio2">Femme</label>

  <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" />
  <label class="btn btn-outline-secondary" for="btnradio3">Enfant</label>
</div>
</div>







  



    </div>

</div> */}




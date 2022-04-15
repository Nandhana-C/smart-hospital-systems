import React, {useState} from 'react';
import {Grid, Paper, TextField, Button } from '@material-ui/core';
import Checkbox from '@mui/material/Checkbox';
import { useNavigate } from 'react-router-dom';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;



// import usePlacesAutocomplete, {
//     getGeocode,
//     getLatLng,
//   } from "use-places-autocomplete";
// import useOnclickOutside from "react-cool-onclickoutside";


function HospForm() {
    const [hospName, setHospName] = useState("");
    const [hospEmail, setHospEmail] = useState("");
    const [hospNo, setHospNo] = useState("");
    const [hospWeb, setHospWeb] = useState("");
    const [hospAddress, setHospAddress] = useState("");
    const paperStyle = { padding: 20, height: 'full', width: 600, margin: '20px auto', borderRadius: '20px',flexDirection: 'column' }
    const btnStyle = { backgroundColor: '#023047', color: 'white', margin: '20px auto', width: 600 }
    const headStyle = {fontFamily: 'Roboto Condensed', color:'#'}
    const Spl = [
        { Name: 'ENT',grade:2},
        { Name: 'Cardiology'},
        { Name: 'Neurology'},
        { Name: 'Renal'},
        { Name: 'Gynecology'},
        { Name: 'Orthopedics'},
        { Name: 'Dermatology'},
        { Name: 'Pediatrics'},
        { Name: 'Ophthalmology'},
        { Name: 'Pulmonology'}];
    const Navigate = useNavigate();
    const onSubmit = (event) =>{
        event.preventDefault();
        console.log(hospName,hospEmail,hospNo,hospWeb,hospAddress);
        Navigate('/Hospital');
      };
    
    //   const {
    //     ready,
    //     value,
    //     suggestions: { status, data },
    //     setValue,
    //     clearSuggestions,
    //   } = usePlacesAutocomplete({
    //     requestOptions: {
    //       /* Define search scope here */
    //     },
    //     debounce: 300,
    //   });
    //   const ref = useOnclickOutside(() => {
    //     // When user clicks outside of the component, we can dismiss
    //     // the searched suggestions by calling this method
    //     clearSuggestions();
    //   });
    
    //   const handleInput = (e) => {
    //     // Update the keyword of the input element
    //     setValue(e.target.value);
    //   };
    
    //   const handleSelect =
    //     ({ description }) =>
    //     () => {
    //       // When user selects a place, we can replace the keyword without request data from API
    //       // by setting the second parameter to "false"
    //       setValue(description, false);
    //       clearSuggestions();
    
    //       // Get latitude and longitude via utility functions
    //       getGeocode({ address: description })
    //         .then((results) => getLatLng(results[0]))
    //         .then(({ lat, lng }) => {
    //           console.log("📍 Coordinates: ", { lat, lng });
    //         })
    //         .catch((error) => {
    //           console.log("😱 Error: ", error);
    //         });
    //     };
    
    //   const renderSuggestions = () =>
    //     data.map((suggestion) => {
    //       const {
    //         place_id,
    //         structured_formatting: { main_text, secondary_text },
    //       } = suggestion;
    
    //       return (
    //         <li key={place_id} onClick={handleSelect(suggestion)}>
    //           <strong>{main_text}</strong> <small>{secondary_text}</small>
    //         </li>
    //       );
    //     });
  return (
    <form>
    <Grid>
        <Paper elevation={10} style={paperStyle}>
            <Grid>
              <h2 style={headStyle}> Fill in the Details</h2>
            </Grid>
            <TextField
              placeholder="Enter the Name of Hospital"
              label="Hospital Name"
              onChange={(event)=>setHospName(event.target.value)}
              margin="normal"
              fullWidth
              required
            />
            <TextField
              placeholder="Enter the Email Address"
              label="Email Address"
              onChange={(event)=>setHospEmail(event.target.value)}
              margin="normal"
              fullWidth
              required
            />
            <TextField
              placeholder="Enter the Telephone Number"
              label="Telephone Number"
              onChange={(event)=>setHospNo(event.target.value)}
              margin="normal"
              fullWidth
              required
            />
            <TextField
              placeholder="Enter Your address"
              label="Address"
              onChange={(event)=>setHospAddress(event.target.value)}
              margin="normal"
              fullWidth
              required
            />
            <TextField
              placeholder="Enter Website URL"
              label="Hospital Website"
              onChange={(event)=>setHospWeb(event.target.value)}
              margin="normal"
              fullWidth
            />
            {/* <div ref={ref}>
                <input
                value={value}
                onChange={handleInput}
                disabled={!ready}
                placeholder="Where are you going?"
                />
                {status === "OK" && <ul>{renderSuggestions()}</ul>}
            </div> */}
            <Autocomplete
            multiple
            id="checkboxes-tags-demo"
            options={Spl}
            disableCloseOnSelect
            fullWidth
            getOptionLabel={(option) => option.title}
            renderOption={(props, option, { selected }) => (
                <li {...props}>
                <Checkbox
                    icon={icon}
                    checkedIcon={checkedIcon}
                    style={{ marginRight: 8 }}
                    checked={selected}
                />
                {option.title}
                </li>
            )}
            style={{ width: 600, margin: '20px auto' }}
            renderInput={(params) => (
                <TextField {...params} label="Specialties" placeholder="Select all the Specialties" />
            )}
            />
            <Button
              color="secondary"
              variant="contained"
              onSubmit={onSubmit}
              style = {btnStyle}
            >SUBMIT</Button>
          </Paper>
      </Grid>
    </form> 
  )
}

export default HospForm
import React, { useState } from 'react'; // Importing Modules
// Creating a function to track the changes in DropDown List
function DropdownList(props) { 
//Using useState to set the defualt value of DropDown Menu and declare the values
 const [selectedValue, setSelectedValue] = useState(props.misura[0]); 
const handleChange = (event) => {
 setSelectedValue(event.target.value);
 console.log(event.target.value);
 props.updateParentState(event.target.value);
 };
return (
 <select value={selectedValue} onChange={handleChange}>
 <option value={props.prezzi[0]}>{props.misura[0]}l</option>
 <option value={props.prezzi[1]}>{props.misura[1]}l</option>
 <option value={props.prezzi[2]}>{props.misura[2]}l</option>
 </select>
 );
}
export default DropdownList;
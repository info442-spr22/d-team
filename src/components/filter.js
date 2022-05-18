import React, { useState } from 'react';

const checkboxOptions = [{category: "Location", options: ["Greenwood", "Chinatown", "Northlake", "Georgetown"], name: "locationRadioBtn"},{category: "Days Of Week", options: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"], name: "dayOfWeekRadioBtn"}];
const radioOptions =[{value: 1, text: "Currently Open"}, {value: "all", text: "All Locations"}];

function CheckboxOptionMenu(props) {
  const [checkedState, setCheckedState] = useState(new Array(props.filterItem.options.length).fill(false));

  const handleOnChange = (position) => {
    const updateCheckedState = checkedState.map((item, index) => {
      return index === position ? !item : item;
    });
    setCheckedState(updateCheckedState);
    props.handleCheckboxCallback(updateCheckedState, props.filterItem.category);
  }

  const optionList = props.filterItem.options.map((item, index) => {
    const optionID = "checkBox" + index;
    return (
      <div className="form-check" key={optionID}>
        <input className="form-check-input" type="checkbox" name={props.name} id={optionID} onChange={() => handleOnChange(index)} />
        <label className="form-check-label" htmlFor={optionID}>
          {item}
        </label>
      </div>
    )
  });

  return (
    <div className="card mt-3 mb-3 filter-font">
      <div className="card-header">
        <strong>{props.filterItem.category}</strong>
      </div>
      <div className="card-body d-block">
        {optionList}
      </div>
    </div>
  )
}

function RadioOptionMenu(props) {

  const handleSelectDate = (event) => {
    const value = event.target.value;
    props.handleRadioBtnCallback(value);
  }

  const optionList = radioOptions.map((item, index) => {
    index = index + 1;
    const optionID = "radio" + index;
    return(
      <div className="form-check" key={optionID}>
        <input className="form-check-input" type="radio" name="dateRadioBtn" value={item.value} id={optionID} onChange={handleSelectDate} />
        <label className="form-check-label" htmlFor={optionID}>
          {item.text}
        </label>
      </div>
    );
  });

  return (
    <div className="card mt-3 mb-3 filter-font">
      <div className="card-header">
        <strong>Availability</strong>
      </div>
      <div className="card-body d-block">
        {optionList}
      </div>
    </div>
  )
}

export function FilterMenu(props) {
  const [checkboxValues, setCheckboxValues] = useState({});
  const [radioValue, setRadioValue] = useState({});

  const handleRadioBtn = (radioBtnValue) => {
    setRadioValue({availability: radioBtnValue});
  }

  const handleCheckbox = (checkboxArray, category) => {
    let results = [];
    let optionsArray = [];
    if(category === "Location") {
      category = category.toLowerCase();
      optionsArray = checkboxOptions[0];
    } else {
      category = "day_of_week";
      optionsArray = checkboxOptions[1];
    }
    results = optionsArray.options.filter((item, index) => {
      return checkboxArray[index];
    });
    setCheckboxValues({...checkboxValues, [category]: results})
  }

  const checkboxCategories = checkboxOptions.map((item) => {
    return <CheckboxOptionMenu filterItem={item} key={item.category} handleCheckboxCallback={handleCheckbox} />
  });

  const handleClick = () => {
    console.log([radioValue, checkboxValues]);
    props.handleFiltersCallback([radioValue, checkboxValues]);
    if(props.toggleFilterCallback){
      props.toggleFilterCallback();
    }
  }

  return (
     <section className="box filters filter-web-view" style={props.style}>
      <div className="filter-border">
        <h2 className="mb-2">Filter By:</h2>
        <RadioOptionMenu handleRadioBtnCallback={handleRadioBtn} />
        {checkboxCategories}
        <button className="btn btn-info mt-2" type="button" onClick={handleClick}>Filter</button>
      </div>
    </section>
  );
}
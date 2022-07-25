import React,{useState} from 'react';
import {  State, City }  from 'country-state-city';
import { CustomButton,CaseFilterContainer } from '../../components/styledComponents/basicui'


const CaseFilter = () => {
  const [cityList, setCityList] = useState();
  const [stateList, setStateList] = useState();

  
  const handleCountryChange = (e) => {
    const res = State.getStatesOfCountry(e);
    setStateList(res);
  }

  const handleStateChange = (e) => {
    let temp = e.split('+');
    console.log(temp)
    const res = City.getCitiesOfState(temp[1], temp[0]);
    
    setCityList(res);
  }

  return (
    <CaseFilterContainer>
          <h3>FILTERS</h3>
          <select className="form-select" aria-label="Default select example">
            <option selected>Category</option>
            <option value="1">Halala</option>
            <option value="2">Mutah</option>
            <option value="3">Love Jihad</option>
          </select>
          <div className="my-2">
            <label className="form-label">Cut of Date</label>
            <input type="date" className="form-control" />
          </div>
          <div className="my-2">
            <label className="form-label">Country</label>
            <select className="form-select" aria-label="Default select example" onChange={(e)=>{handleCountryChange(e.target.value)}}>
              <option selected>Country</option>
              <option value="IN">India</option>
              <option value="PK">Pakistan</option>
              <option value="BD">Bangladesh</option>
              <option value="AF">Afganistan</option>
              <option value="GB">UK</option>
              <option value="FR">France</option>
              <option value="NP">Nepal</option>
              <option value="BH">Bhutan</option>
            </select>
          </div>
          {stateList && <div className="my-2">
            <label className='form-label'>State</label>
            <select className="form-select" aria-label="Default select example" onChange={(e)=>{handleStateChange(e.target.value)}}>
              {stateList.map((item,index)=>(
                <option key={index} value={`${item.isoCode}+${item.countryCode}`}>{item.name}</option>
              ))}
            </select>
          </div>}

          {cityList && <div className="my-2">
            <label>City</label>
            <select className="form-select" aria-label="Default select example">
              {cityList.map((item,index)=>(
                <option key={index} value={item.isoCode}>{item.name}</option>
              ))}
            </select>
            </div>}
                <CustomButton full>Apply</CustomButton>
        </CaseFilterContainer>
  )
}

export default CaseFilter
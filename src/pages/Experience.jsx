import React from 'react'
import 'react-dropdown/style.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Experience() {

  const [occupation, setOccupation] = useState("");
  const [company, setCompany] = useState("");
  const [summary, setSummary] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [twitter, setTwitter] = useState("");

  const handleClear = () => {
    setOccupation('');
    setCompany('');
    setSummary('');
    setLinkedin('');
    setTwitter('');
    // Clear other fields if needed
  };

  const [experienceEntries, setExperienceEntries] = useState([
    {
      occupation: '',
      company: '',
      summary: '',
      linkedin:'',
      twitter:'',
      startDate: null,
      endDate: null,
      isCurrentlyWorking: false,
    },
  ]);

  const handleInputChange = (index, name, value) => {
    const newEntries = [...experienceEntries];
    newEntries[index][name] = value;
    setExperienceEntries(newEntries);
  };

   const handleCurrentlyWorkingChange = (index, isChecked) => {
    const newEntries = [...experienceEntries];
    newEntries[index].isCurrentlyWorking = isChecked;
    if (isChecked) {
      newEntries[index].endDate = null;
    }
    setExperienceEntries(newEntries);
  };

  const handleAddEntry = () => {
    setExperienceEntries([
      ...experienceEntries,
      {
        occupation: '',
        company: '',
        summary: '',
        startDate: null,
        endDate: null,
        isCurrentlyWorking: false,
      },
    ]);
  };

  const handleClearAll = () => {
    setExperienceEntries([
      {
        occupation: '',
        company: '',
        summary: '',
        startDate: null,
        endDate: null,
        isCurrentlyWorking: false,
      },
    ]);
  };
  
  return (
    <div>
      <h2 className='font-bold relative text-2xl md:text-4xl lg:text-5xl z-10 py-8 pt-20 text-center'>
      AI CHEF MASTER</h2>
      {experienceEntries.map((entry, index) => (
      <div key={index}>
        <form className='mx-44'>
          <label>
            Occupation/Title :
            <input
              className='border rounded border-black my-2 py-2 px-7 block'
              type='text'
              value={entry.occupation}
              onChange={(e) => handleInputChange(index, 'occupation', e.target.value)}
            />
          </label>
        </form>
        <form className='mx-44'>
          <label>
            Company :
            <input
              className='border rounded border-black my-2 py-2 px-7 block'
              type='text'
              value={entry.company}
              onChange={(e) => handleInputChange(index, 'company', e.target.value)}
            />
          </label>
        </form>
        <form className='mx-44'>
          <label>
            Summary :
            <input
              className='border rounded border-black my-2 px-7 py-2 block'
              type='text'
              value={entry.summary}
              onChange={(e) => handleInputChange(index, 'summary', e.target.value)}
            />
          </label>
        </form>
        <h2 className='mx-44'>Duration:</h2>
        <br />
        <div className='mx-44'>
          <label>Start Date:   </label>
          <DatePicker
            selected={entry.startDate}
            onChange={(date) => handleInputChange(index, 'startDate', date)}
            dateFormat='MM/yyyy'
            showMonthYearPicker
          />
          <br />
        </div>
        <br />
        {!entry.isCurrentlyWorking && (
          <div className='mx-44'>
            <label>End Date:   </label>
            <DatePicker
              selected={entry.endDate}
              onChange={(date) => handleInputChange(index, 'endDate', date)}
              dateFormat='MM/yyyy'
              placeholder='Enter end date'
              showMonthYearPicker
            />
          </div>
        )}
        <br />
        <div>
          <label className='mx-44'>
            <input
              type='checkbox'
              checked={entry.isCurrentlyWorking}
              onChange={(e) => handleCurrentlyWorkingChange(index, e.target.checked)}
            />
             I currently work here
          </label>
        </div>
      </div>
    ))}
    <button
      className='bg-blue-600 hover:bg-blue-700 group relative px-9 py-1 overflow-hidden font-medium rounded-xl text-xl md:text-2xl shadow-2xl ml-40 my-8'
      onClick={handleAddEntry}
    >
      <span className='text-white'>Add More</span>
    </button>

    <form className='mx-44'>
      <label>Linkedin :
        <input className='border rounded border-black my-2 py-2 px-7 block'
          type="text" 
          value={linkedin}
          onChange={(e) => setLinkedin(e.target.value)}
        />
      </label>
    </form>
    <form className='mx-44'>
      <label>Twitter :
        <input className='border rounded border-black my-2 px-7 py-2 block'
          type="text" 
          value={twitter}
          onChange={(e) => setTwitter(e.target.value)}
        />
      </label>
    </form>
    <div className='flex justify-evenly'>
      <Link to='/application'>
      <button className="bg-green-600 hover:bg-green-700 group  relative px-9 py-1 overflow-hidden font-medium rounded-xl   text-xl md:text-2xl shadow-2xl  mr-8 my-8">
      <span className=" text-white">Prev</span>
      </button>
      </Link>
      <button
          className="bg-red-600 hover:bg-red-700 group  relative px-9 py-1 overflow-hidden font-medium rounded-xl text-xl md:text-2xl shadow-2xl mr-8 my-8"
          onClick={handleClear}
        >
          <span className="text-white">Clear</span>
        </button>
      <Link to='/education'>
      <button className="bg-green-600 hover:bg-green-700 group  relative px-9 py-1 overflow-hidden font-medium rounded-xl   text-xl md:text-2xl shadow-2xl  mr-8 my-8">
      <span className=" text-white">Next</span>
      </button>
      </Link>
    </div>
    </div>
    
  )
}

export default Experience
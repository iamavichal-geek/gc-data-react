import React, { useState } from 'react'
// import { input, Textarea, Button } from '@tailwindcss/react'
import Image from "../assets/health-ai.jpg"
// import { Audio } from 'react-loader-spinner';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import RiskScore from './Result';
import Result2 from './Result2';

function ContactForm() {
    const initialData = {
        zipCode: '',
        gender: '',
        age: '',
        income: '',
        education: '',
        veteranStatus: '',
        race: '',
        address: '',
    }
    const [formData, setFormData] = useState(initialData)
    const [showForm, setShowForm] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setIsLoading(true);
        console.log('Form submitted:', formData)
        setFormData(initialData)
        setShowForm(false);
        setTimeout(()=>{
            
            
            setIsLoading(false);
        
        }, 3000)
    }

    return (<>
        {isLoading &&  <div className="loader" style={{display:"flex", justifyContent:"center", alignItems:"center", marginTop:"20%", flexDirection:"column"}}
        ><Box >
      <CircularProgress />
    </Box><h2>Getting your results...</h2></div>}
        {showForm  && (<div className="mx-auto px-4 py-8  bg-[#d3d3d3] -md w-[100vw]">
            
            <div className="flex h-[100vh] justify-center gap-0">
                <img src={Image} alt="" className='hidden md:block' style={{borderRadius:"6px"}} />
                <div className="max-w-md mx-0 bg-white p-8 rounded-md shadow-md h-90">
                    <h2 className="text-2xl font-semibold text-center mb-4">ENTER YOUR DETAILS</h2>
                    {/* <p className="text-center text-gray-500 mb-8">
                        24/7 We will answer your questions and problems
                    </p> */}
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 gap-4">
                            <div>
                                <input
                                    type="number"
                                    id="zipCode"
                                    name="zipCode"
                                    placeholder='Zip Code'
                                    className="w-full rounded-md border border-gray-300 px-2 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    value={formData.zipCode}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className='flex flex-col sm:flex-row gap-2'>
                                <div className='w-full'>
                                    <select
                                        type="gender"
                                        id="gender"
                                        name="gender"
                                        className="w-full rounded-md border border-gray-300 px-2 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                        value={formData.gender}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>
                                <div>
                                    <input
                                        type="number"
                                        id="age"
                                        name="age"
                                        placeholder='Age'
                                        className="w-full rounded-md border border-gray-300 px-2 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                        value={formData.age}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <input
                                    type="number"
                                    id="income"
                                    name="income"
                                    placeholder='Income'
                                    className="w-full rounded-md border border-gray-300 px-2 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    value={formData.income}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <input
                                    id="education"
                                    name="education"
                                    placeholder='Education'
                                    className="w-full rounded-md border border-gray-300 px-2 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    value={formData.education}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    id="veteranStatus"
                                    name="veteranStatus"
                                    placeholder='Veteran Status'
                                    className="w-full rounded-md border border-gray-300 px-2 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    value={formData.veteranStatusStatus}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    id="race"
                                    name="race"
                                    placeholder='Race'
                                    className="w-full rounded-md border border-gray-300 px-2 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    value={formData.race}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    id="address"
                                    name="address"
                                    placeholder='Address'
                                    className="w-full rounded-md border border-gray-300 px-2 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    value={formData.address}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="text-center mt-4">
                            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>)}
        {!isLoading && !showForm &&
         (<div className="results" style={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
            <RiskScore />
            <hr/><h1 style={{fontWeight:"bold", textAlign:"center", marginTop:"20px", fontSize:"20px"}}>Contacts</h1>
            <Result2/></div>)}

        </>)
}

export default ContactForm

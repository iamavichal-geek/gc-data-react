import React, { useState } from 'react'
// import { input, Textarea, Button } from '@tailwindcss/react'
import Image from "../assets/health-ai.jpg"

function ContactForm() {
    const initialData = {
        zipCode: '',
        gender: '',
        age: '',
        income: '',
        education: '',
        mentalStatus: '',
        race: '',
        address: '',
    }
    const [formData, setFormData] = useState(initialData)

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('Form submitted:', formData)
        setFormData(initialData)
    }

    return (
        <div className="mx-auto px-4 py-8  bg-[#d3d3d3] -md w-[100vw]">
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
                                    id="mentalStatus"
                                    name="mentalStatus"
                                    placeholder='Mental Status'
                                    className="w-full rounded-md border border-gray-300 px-2 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    value={formData.mentalStatus}
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
        </div>
    )
}

export default ContactForm

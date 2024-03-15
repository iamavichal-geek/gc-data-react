import React from 'react';
import { renderCircleChart } from '../circleChart';
import { renderRadarChart } from '../radarChart';
// import Form from "../components/Form";

function RiskScore(props) {

    const {data} = props
    React.useEffect(() => {
        renderCircleChart();
        renderRadarChart();
    }, [])
    return (

        <div className='flex gap-4 w-screen justify-evenly p-8 bg-[]'>
            <div className="bg-white text-slate-500 rounded-lg w-96 overflow-hidden h-min">
                <h1 className='w-full bg-[#D9D9D9] p-4 text-center text-black font-bold'>User Data</h1>
                <ul className='py-3'>
                    <li className='p-2'>Zip Code: {data.req["ZIP CODE"]}</li>
                    <li className='p-2'>Address: {data.req["ADDRESS"]}</li>
                    <li className='p-2'>Gender: {data.req["GENDER"]}</li>
                    <li className='p-2'>Age: {data.req["AGE"]}</li>
                    <li className='p-2'>Income: {data.req["INCOME"]}</li>
                    <li className='p-2'>Education: {data.req["EDUCATION"]}</li>
                    <li className='p-2'>Veteran Status:{data.req["VETERAN STATUS"]}</li>
                    <li className='p-2'>Race: {data.req["RACE"]}</li>
                </ul>
            </div>
            <div className="bg-white text-slate-500 rounded-lg overflow-hidden w-[70vw]">
                <h1 className='w-full bg-[#D9D9D9] p-4 text-center text-black font-bold'>Problems</h1>
                <div className="flex rounded-md flex-col m-4 y-6 rounded-md border-[#D9D9D9] border-solid border">
                    <div className="question rounded-md p-5 text-black bg-[#b1eecf]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum dignissimos beatae ipsum consequatur veritatis ab illo vel aperiam obcaecati officia.</div>
                    <div className="answer rounded-md m-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia similique quas explicabo error a nam, aperiam magni excepturi distinctio velit itaque? Optio maxime ea architecto fuga harum aliquam voluptatum exercitationem!</div>
                </div>
                <div className="flex flex-col m-4 y-6 rounded-md border-[#D9D9D9] border-solid border">
                    <div className="question rounded-md  p-5 text-black bg-[#b1eecf]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum dignissimos beatae ipsum consequatur veritatis ab illo vel aperiam obcaecati officia.</div>
                    <div className="answer rounded-md m-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia similique quas explicabo error a nam, aperiam magni excepturi distinctio velit itaque? Optio maxime ea architecto fuga harum aliquam voluptatum exercitationem!</div>
                </div>
                <div className="flex flex-col m-4 y-6 rounded-md border-[#D9D9D9] border-solid border">
                    <div className="question rounded-md p-5 text-black bg-[#b1eecf]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum dignissimos beatae ipsum consequatur veritatis ab illo vel aperiam obcaecati officia.</div>
                    <div className="answer rounded-md m-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia similique quas explicabo error a nam, aperiam magni excepturi distinctio velit itaque? Optio maxime ea architecto fuga harum aliquam voluptatum exercitationem!</div>
                </div>
            </div>
            <div >
                <div className="bg-white text-black text-center rounded-lg w-72 overflow-hidden">
                    <h1 className='w-full bg-[#D9D9D9] p-4 text-center text-black font-bold'>Risk Score</h1>
                    <div id="circleChart"></div>
                    <p className='font-bold' >High Risk</p>
                </div>
                <div className="bg-white text-black rounded-lg w-72 overflow-hidden">
                    <h1 className='w-full bg-[#D9D9D9] p-4 text-center text-black font-bold'>Risk Score</h1>
                    <div id="radarChart"></div>
                </div>
            </div>
        </div>
    );
}

export default RiskScore;

import React from "react";
import "../styles/result2.css";

export default function Result2(){
    const tableData = [
        { region: 'R1', contact: 'John Doe, Jane Doe' },
        { region: 'R2', contact: 'Mary Smith, Mike Jones' },
        { region :"R3,", contact: "Avichal, Harsh"},
      ];
    
      return (
        <div className="result2-container">
            
          <table className="result2-table">
            <thead>
              <tr className="result2-tr">
                {/* <th className="result2-th">Region</th> */}
                <th className="result2-th" colSpan={3}>Problem Specific Contacts</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td className="result2-td">{row.contact}</td>
                  <td className="result2-td">{row.contact}</td>
                  <td className="result2-td">{row.contact}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <br/>
          <table className="result2-table">
            <thead>
              <tr className="result2-tr">
                {/* <th className="result2-th">Region</th> */}
                <th className="result2-th" colSpan={3}>Region Specific Contacts</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td className="result2-td">{row.contact}</td>
                  <td className="result2-td">{row.contact}</td>
                  <td className="result2-td">{row.contact}</td>
                </tr>
              ))}
            </tbody>
          </table>

          
        </div>
        )
}
"use client"
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';



const EmployeeTable = ({data}) => {
    const employees = data;
    console.log(employees)
  const [expandedEmployeeId, setExpandedEmployeeId] = useState(null);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short'
    });
};
  const EmployeeListItem = ({ employee }) => {
    const isExpanded = expandedEmployeeId === employee.empId;

    return (
      <div className="border-b last:border-b-0">
        <div 
          className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100"
          onClick={() => setExpandedEmployeeId(isExpanded ? null : employee.empId)}
        >
          <div className="flex-1">{employee.name}</div>
          <div className="flex-1">{employee.city}</div>
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
        {isExpanded && (
          <div className="p-4 bg-gray-50">
            <div className="grid grid-cols-2 gap-2">
              <div className="font-semibold">Employee ID:</div><div>{employee.empId}</div>
              <div className="font-semibold">Age:</div><div>{employee.age}</div>
              <div className="font-semibold">Salary:</div><div>₹ {employee.salary}</div>
              <div className="font-semibold">City:</div><div>{employee.city}</div>
              <div className="font-semibold">Created At:</div><div>{formatDate(employee.createdAt)}</div>
              <div className="font-semibold">Updated At:</div><div>{formatDate(employee.updatedAt)}</div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="p-4 w-full mt-7   ">
      
      
    
      <div className="bg-white mx-auto overflow-clip rounded-xl  md:w-[95%] shadow-lg shadow-cyan-200">
      <div 
          className="flex justify-between items-center min-w-[95%] border-t-2 border-white  p-4 cursor-pointer  rounded-t-xl bg-gray-200"
          
        >
          <div className="flex-1 font-bold">Employee Name</div>
          <div className="flex-1 font-bold">Employee City</div>
         
        </div>
        
        {employees.map((employee) => (
          <EmployeeListItem key={employee.empId} employee={employee} />
        ))}
      </div>
    </div>
  );
};

export default EmployeeTable;
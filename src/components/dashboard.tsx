import axios from 'axios';
import AddEmployee from "./addEmployee";
import { useEffect, useState } from "react";
import DisplayEmployee from './displayEmployee';

interface EmployeeProps {
  _id: string;
  name: string;
  gender: string;
  position: string;
  salary: string;
  address: string;
}

const Dashboard = () => {
  const [data, setData] = useState({ employees: [] });
  const [state, setState] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:5000/api/getEmployees')
      .then(({ data: responseData }) => {
        setData(responseData);
      })
      .then(() => {
        console.log('Rendered...')
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [state]);

  return (
    <div className="p-4 container mx-auto bg-white shadow rounded mt-4" style={{ minHeight: '80vh' }}>
      <div className="d-flex align-items-center justify-content-end my-3">
        <button className="btn btn-sm btn-success" data-bs-toggle="modal" data-bs-target="#addEmployeeModal">Add employee</button>
      </div>
      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Gender</th>
            <th scope="col">Address</th>
            <th scope="col">Position</th>
            <th scope="col">Salary</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            data && data.employees.map((employee: EmployeeProps) => <DisplayEmployee key={employee._id} employee={employee} />)
          }
        </tbody>
      </table>

      {/* add employee modal */}
      <AddEmployee addEmp={setState} />
    </div>
  );
};

export default Dashboard;

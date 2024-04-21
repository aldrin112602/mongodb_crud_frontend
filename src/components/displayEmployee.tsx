

interface DataResponse {
    _id: string;
    name: string;
    gender: string;
    position: string;
    salary: string;
    address: string;
}


interface propsInterface {
    employee: DataResponse
}


const DisplayEmployee = (props: propsInterface) => {
    const { employee } = props;
    return (
        <tr key={employee._id}>
            <td>{employee.name}</td>
            <td>{employee.gender}</td>
            <td>{employee.address}</td>
            <td>{employee.position}</td>
            <td>{employee.salary}</td>
            <td>
                <button className="btn btn-sm btn-primary mx-1">Edit</button>
                <button className="btn btn-sm btn-danger">Delete</button>
            </td>
        </tr>
    )
}

export default DisplayEmployee

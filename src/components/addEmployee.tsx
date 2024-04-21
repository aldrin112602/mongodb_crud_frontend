import axios from 'axios';
import { FormEvent, ChangeEvent, useState } from 'react';
import Swal from 'sweetalert2';


const AddEmployee = () => {
    const [inputs, setInputs] = useState({});

    const handleSubmit = (ev: FormEvent) => {
        ev.preventDefault();
        axios.post('http://localhost:5000/api/saveEmployee', inputs).then((res) => {
            const { message, success } = res.data;
            if (success) {
                Swal.fire({
                    title: 'Success!',
                    text: message,
                    icon: 'success'
                });
            } else {
                Swal.fire({
                    title: 'Error!',
                    text: message,
                    icon: 'error'
                });

            }

        })
            .catch(err => console.error(err));
    }

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }));
    };

    const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target;
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }));
    };

    const handleTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }));
    };


    return (
        <form onSubmit={handleSubmit} className="modal fade" id="addEmployeeModal" data-bs-backdrop="static" data-bs-keyboard="false" tab-index="-1" aria-labelledby="addEmployeeModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-6" id="addEmployeeModalLabel">Add employee</h1>
                        <button type="button" className="btn-close btn-sm" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label py-0 my-0">Name</label>
                            <input onChange={handleInputChange} required type="text" className="form-control" name="name" id="name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="gender" className="form-label py-0 my-0">Gender</label>
                            <select onChange={handleSelectChange} required name="gender" id="gender" className="form-select">
                                <option value="Male">Male</option>
                                
                                <option value="Female">Female</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="position" className="form-label py-0 my-0">Position</label>
                            <input onChange={handleInputChange} required type="text" className="form-control" name="position" id="position" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="salary" className="form-label py-0 my-0">Salary</label>
                            <input onChange={handleInputChange} required type="number" className="form-control" name="salary" id="salary" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="address" className="form-label py-0 my-0">Address</label>
                            <textarea onChange={handleTextareaChange} className="form-control" name="address" id="address"></textarea>
                        </div>


                    </div>
                    <div className="modal-footer">
                        <button type="reset" className="btn btn-secondary btn-sm" data-bs-dismiss="modal">Cancel</button>
                        <button type="submit" className="btn btn-primary btn-sm">Add</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default AddEmployee

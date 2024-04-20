import axios from 'axios';
import { FormEvent, ChangeEvent, useState } from 'react';
import Swal from 'sweetalert2';

const Login = () => {

    const [inputs, setInputs] = useState({});

    const handleSubmit = (ev: FormEvent) => {
        ev.preventDefault();
        axios.post('http://localhost:5000/api/login', inputs).then((res) => {
            const { message, success } = res.data;
            if (success) {
                Swal.fire({
                    title: 'Success!',
                    text: message,
                    icon: 'success'
                }).then(()=> {
                    window.location.href = './dashboard'
                });

                const { user } = res.data;

                sessionStorage.setItem('userData', JSON.stringify(user));

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

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }));
    };

    return (
        <section style={{
            backgroundColor: "#9A616D"
        }}>
            <div className="container py-5">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col col-xl-10">
                        <div className="card" style={{
                            borderRadius: '1rem'
                        }}>
                            <div className="row g-0">
                                <div className="col-md-6 col-lg-5 d-none d-md-block">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                                        alt="login form" className="img-fluid" style={{ borderRadius: "1rem 0 0 1rem" }} />
                                </div>
                                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div className="card-body p-4 p-lg-5 text-black">

                                        <form onSubmit={handleSubmit}>

                                            <div className="d-flex align-items-center mb-3 pb-1">
                                                <i className="fas fa-cubes fa-2x me-3" style={{ color: '#ff6219' }}></i>
                                                <span className="h1 fw-bold mb-0">Logo</span>
                                            </div>

                                            <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Sign into your account</h5>

                                            <div className="form-outline mb-4">
                                                <label className="form-label my-0" >Email address</label>
                                                <input
                                                    name='email'
                                                    onChange={handleChange} required type="email" className="form-control form-control-md" />

                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label my-0" >Password</label>
                                                <input
                                                    name='password'
                                                    onChange={handleChange} required type="password" className="form-control form-control-md" />

                                            </div>



                                            <div className="pt-1 mb-4 d-grid">
                                                <button className="btn btn-dark btn-md btn-block" type="submit">Login</button>
                                            </div>


                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login

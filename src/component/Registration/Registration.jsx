import { useContext, useEffect, useRef, useState } from 'react';
import loginImg from '../../assets/others/authentication1.png';

import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa6';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
// import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from 'react-simple-captcha';
import Swal from 'sweetalert2';

const Registration = () => {
    const { handleCreateUser, googleLogin, updateUserProfile } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()
    // const [isCaptchaValid, setisCapchaValid] = useState(false);
    // const [disable, setDisable] = useState(true);

    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
                if (res.user) {
                    let timerInterval;
                    Swal.fire({
                        title: "Auto close alert!",
                        html: "I will close in <b></b> milliseconds.",
                        timer: 500,
                        timerProgressBar: true,
                        didOpen: () => {
                            Swal.showLoading();
                            const timer = Swal.getPopup().querySelector("b");
                            timerInterval = setInterval(() => {
                                timer.textContent = `${Swal.getTimerLeft()}`;
                            }, 100);
                        },
                        willClose: () => {
                            clearInterval(timerInterval);
                        }
                    }).then((result) => {
                        /* Read more about handling dismissals below */
                        if (result.dismiss === Swal.DismissReason.timer) {
                            console.log("I was closed by the timer");
                        }
                    });
                    navigate(location?.state ? location.state : '/')

                }
            })
            .catch(error => {
                if (error.message) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: `${error.code}`,
                    });
                }
            })
    }

    const handleForm = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const pass = e.target.password.value;
        const userName = e.target.name.value;
        const photo = e.target.photo.value;
        handleCreateUser(email, pass)
            .then(res => {
                if (res.user) {
                    updateUserProfile(userName, photo)
                        .then(() => {
                            console.log('updated')
                        })
                        .catch(error => {
                            console.log(error)
                        })
                    let timerInterval;
                    Swal.fire({
                        title: "Auto close alert!",
                        html: "I will close in <b></b> milliseconds.",
                        timer: 500,
                        timerProgressBar: true,
                        didOpen: () => {
                            Swal.showLoading();
                            const timer = Swal.getPopup().querySelector("b");
                            timerInterval = setInterval(() => {
                                timer.textContent = `${Swal.getTimerLeft()}`;
                            }, 100);
                        },
                        willClose: () => {
                            clearInterval(timerInterval);
                        }
                    }).then((result) => {
                        /* Read more about handling dismissals below */
                        if (result.dismiss === Swal.DismissReason.timer) {
                            console.log("I was closed by the timer");
                        }
                    });
                    navigate(location?.state ? location.state : '/')

                }
            })
            .catch(error => {
                if (error.message) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: `${error.code}`,
                    });
                }
            })

    }
    return (
        <div className='flex justify-between flex-col md:flex-row items-center shadow-2xl w-full lg:w-3/4 max-h-fit top-1/2 left-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2 md:absolute mt-5'>
            <div className='w-full space-y-20 md:space-y-0'>
                <Link to={'/'} className="btn btn-outline top-5 left-5 absolute">Go Home</Link>
                <img src={loginImg} alt="" />
            </div>
            <div className="hero w-full h-full">
                <div className="hero-content w-full bg-white lg:w-3/4 flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl font-bold">Register here!</h1>
                    </div>
                    <div className=" w-full max-w-full shadow-sm ">
                        <form onSubmit={handleForm} className="flex flex-col justify-center gap-2 lg:p-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" name="photo" placeholder="Your Profile Pic" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            </div>

                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-outline hover:text-orange-500">Registration</button>
                            </div>
                            <Link to={'/login'} className="text-center space-y-3">
                                <p className="capitalize">Already have an account ? <span className="font-bold text-orange-500">Login</span></p>
                                <p className="capitalize">Or sing in with</p>
                            </Link>
                            <div className=" w-full mx-auto flex justify-center gap-3 mt-2">
                                <button onClick={handleGoogleLogin} className='btn btn-outline btn-circle hover:text-orange-500'><FaGoogle></FaGoogle></button>
                                <button className='btn btn-outline btn-circle hover:text-orange-500'><FaFacebook></FaFacebook></button>
                                <button className='btn btn-outline btn-circle hover:text-orange-500'><FaGithub></FaGithub></button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;
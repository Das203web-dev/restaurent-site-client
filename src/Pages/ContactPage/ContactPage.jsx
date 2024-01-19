import Cover from "../Shared/Cover/Cover";
import contactImg from "../../assets/contact/banner.jpg"
import SectionTitle from "../../component/SectionTitle/SectionTitle";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { MdWatchLater } from "react-icons/md";
import { IoIosPaperPlane } from "react-icons/io";

const ContactPage = () => {
    const handleContactForm = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const message = form.message.value;
        console.log(name, email, phone, message)
    }
    return (
        <div>
            <Cover img={contactImg} title={'contact us'} details={'Would you like to try a dish?'}></Cover>
            <section className="mx-5">
                <SectionTitle subTitle={'Visit Us'} title={'OUR LOCATION'}></SectionTitle>
                {/* contact info div  */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:w-3/4 w-full md:mx-auto">
                    <div className="card w-full bg-base-100 shadow-lg border-0 rounded-none">
                        <div className="card-body text-center p-0 mb-5">
                            <h2 className="card-title text-white p-2 w-full bg-[#D1A054]"><BiSolidPhoneCall className="mx-auto"></BiSolidPhoneCall></h2>
                            <div className="p-5">

                                <p className="text-2xl font-medium">Phone</p>
                                <p>0178653454</p>
                            </div>
                        </div>
                    </div>
                    <div className="card w-full bg-base-100 shadow-lg rounded-none">
                        <div className="card-body text-center p-0 mb-5">
                            <h2 className="card-title text-white p-2 w-full bg-[#D1A054]"><FaLocationDot className="mx-auto"></FaLocationDot></h2>
                            <div className="p-5">
                                <p className="text-2xl font-medium">Address</p>
                                <p>+38 (012) 34 56 789</p>
                            </div>
                        </div>
                    </div>
                    <div className="card w-full bg-base-100 shadow-lg rounded-none">
                        <div className="card-body text-center p-0 mb-5">
                            <h2 className="card-title text-white p-2 w-full bg-[#D1A054]"><MdWatchLater className="mx-auto"></MdWatchLater></h2>
                            <div className="p-5">
                                <p className="text-2xl font-medium">Phone</p>
                                <p>0178653454</p>
                            </div>
                        </div>
                    </div>
                </div>
                <SectionTitle subTitle={'Send Us a Message'} title={'CONTACT FORM'}></SectionTitle>
                {/* contact form  */}
                <div className="hero md:w-3/4 md:mx-auto w-full">
                    <div className="w-full flex-col">
                        <div className="card shrink-0 w-full shadow-lg bg-base-100">
                            <form onSubmit={handleContactForm} className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full md:px-5 py-10">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="name" name="name" placeholder="Your Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control col-span-full w-full ">
                                    <label className="label">
                                        <span className="label-text">Phone</span>
                                    </label>
                                    <input type="phone" name="phone" placeholder="phone" className="input input-bordered" required />
                                </div>
                                <label className="form-control col-span-full w-full">
                                    <div className="label">
                                        <span className="label-text">Your Message</span>
                                    </div>
                                    <textarea name="message" className="textarea textarea-bordered h-24" placeholder="Type your message"></textarea>

                                </label>
                                <div className="form-control col-span-full mt-6 md:mx-auto lg:w-1/4 w-full">
                                    <button type="submit" className="btn btn-outline">Send Message <IoIosPaperPlane></IoIosPaperPlane></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
import img from "../assets/Layer2.png"
import BirthIcon from "../assets/BirthIcon.svg"
import gender from "../assets/FemaleIcon.svg"
import PhoneIcon from "../assets/PhoneIcon.svg"
import Insurance from "../assets/InsuranceIcon.svg"

export default function PatientCard({ patient }) {

    return (
        <div className=" lg:w-[367px]  w-full">
            <div className='bg-white rounded-2xl p-5 '>
                <div className="flex items-center justify-center py-8">
                    <img className="w-32" src={patient?.profile_picture} alt="" />
                </div>
                <div className="flex items-center justify-center py-1">
                    <h3 className="card-title">{patient?.name}</h3>
                </div>
                <div className="flex flex-col px-2 pt-8 gap-7">
                    <div className="flex gap-3 items-center ">
                        <div className="shrink-0">
                            <img src={BirthIcon} alt="" />
                        </div>
                        <div >
                            <p className="body-bold">Date Of Birth</p>
                            <span className="body-secondary">{patient?.date_of_birth}</span>
                        </div>
                    </div>
                    <div className="flex gap-3 items-center ">
                        <div className="shrink-0">
                            <img src={gender} alt="" />
                        </div>
                        <div >
                            <p className="body-bold">Date Of Birth</p>
                            <span className="body-secondary">{patient?.date_of_birth}</span>
                        </div>
                    </div>
                    <div className="flex gap-3 items-center ">
                        <div className="shrink-0">
                            <img src={PhoneIcon} alt="" />
                        </div>
                        <div >
                            <p className="body-bold">Contact</p>
                            <span className="body-secondary">{patient?.phone_number}</span>
                        </div>
                    </div>
                    <div className="flex gap-3 items-center ">
                        <div className="shrink-0">
                            <img src={PhoneIcon} alt="" />
                        </div>
                        <div >
                            <p className="body-bold">Emergency Contacts</p>
                            <span className="body-secondary">{patient?.phone_number}</span>
                        </div>
                    </div>
                    <div className="flex gap-3 items-center ">
                        <div className="shrink-0">
                            <img src={Insurance} alt="" />
                        </div>
                        <div >
                            <p className="body-bold">Insurance Type</p>
                            <span className="body-secondary">{patient?.insurance_type}</span>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

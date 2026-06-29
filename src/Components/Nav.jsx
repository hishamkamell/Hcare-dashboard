import logo from '../assets/TestLogo.svg'
import patiants from '../assets/group_FILL0_wght300_GRAD0_opsz24.svg'
import person from '../assets/image.png'
import { useState } from 'react'


export default function Nav() {
    const [selected, setSelected] = useState("Patients")
    const [isOpen, setIsOpen] = useState(false);
    console.log(selected)
    return (
        <div className='flex items-center justify-between m-[18px] h-[72px] bg-white rounded-[70px] px-[32px]'>
            <div className='flex items-center shrink-0 w-[100px]'>
                <img src={logo} alt="" />
            </div>
            <div className='flex items-center gap-4 transtion-allrounded-full px-4 py-2'>
                <button
                    onClick={(e) => setSelected(e.target.innerText)}
                    className={`flex items-center gap-2 body-bold hover:bg-primary rounded-full px-4 py-2 transtion-all duration-300 ${selected === "Patients" ? "bg-primary " : ""}`}>
                    <img src={patiants} alt="" />
                    Patients
                </button>
            </div>
            <div className='flex gap-4 justify-end items-center'
                onClick={() => setIsOpen(!isOpen)}>
                <div className='h-[44px] w-[44px]'>
                    <img src={person} alt="" />
                </div>

                <div className='relative flex flex-col items-start' >
                    <p className='body-bold'>Dr. Hesham Kamel</p>
                    <p className='body-secondary'>Admin</p>
                </div>
                {isOpen && (
                    <div className="absolute mt-50 w-48 bg-white border-1 border-gray-400 rounded-lg">
                        <a
                            className="block px-4 py-2 hover:bg-gray-100"
                        >
                            Profile
                        </a>
                        <a
                            className="block px-4 py-2 hover:bg-gray-100"
                        >
                            Settings
                        </a>
                        <a
                            className="block px-4 py-2 hover:bg-gray-100"
                        >
                            Logout
                        </a>
                    </div>
                )}
            </div>

        </div>
    )
}

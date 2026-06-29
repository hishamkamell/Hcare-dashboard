import search from '../assets/search.svg'
import dots from '../assets/3dots.svg'
import { all } from 'axios'

export default function Sidebar({ patient, setPatient, allPatients }) {
    return (
        <div className=' lg:w-[367px] w-full'>
            <div className='bg-white rounded-2xl'>
                <div className='flex items-center justify-between p-5 '>
                    <h2 className='card-title'>Patients</h2>
                    <img src={search} alt="" />
                </div>
                <div className='h-screen overflow-y-auto scrollbar-custom pb-4 overflow-x-hidden rounded-2xl'>
                    {allPatients?.map((patient_) => (
                        <div key={patient_?.name} className={`h-[80px]  flex items-center justify-between px-5 ${patient_?.name === patient?.name ? 'bg-[#D8FCF7]' : 'bg-white rounded-2xl'}`}
                            onClick={() => setPatient(patient_)}>
                            <div className='flex gap-3'>
                                <img className='h-[48px]' src={patient_?.profile_picture} alt="" />
                                <div className='flex flex-col items-start' >
                                    <p className='body-bold'>{patient_?.name}</p>
                                    <p className='body-secondary'>{patient_?.gender} , {patient_?.age}</p>
                                </div>
                            </div>
                            <div>
                                <img src={dots} alt="" />
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}

import DiagnoChart from "./DiagnoChart"
import card1 from "../assets/respiratoryrate.svg"
import card2 from "../assets/temperature.svg"
import card3 from "../assets/HeartBPM.svg"


export default function DiagnoHistory({ patient }) {
    const Respiratory = patient?.diagnosis_history
        ?.slice(0, 6)
        ?.map((item) => item.respiratory_rate.value)
    const RespiratoryAve = Math.round(Respiratory?.reduce((a, b) => a + b, 0) / Respiratory?.length)


    const temprature = patient?.diagnosis_history
        ?.slice(0, 6)
        ?.map((item) => item.temperature.value)
    const tempratureAvg = Math.round(temprature?.reduce((a, b) => a + b, 0) / temprature?.length)

    const heartRate = patient?.diagnosis_history
        ?.slice(0, 6)
        ?.map((item) => item.heart_rate.value)
    const heartRateAvg = Math.round(heartRate?.reduce((a, b) => a + b, 0) / heartRate?.length)

    return (
        <div className='bg-white w-[766px] rounded-2xl p-5 flex flex-col gap-5'>
            <div className='flex items-center justify-between'>
                <h2 className='card-title'>Diagnosis History</h2>
            </div>
            <div className=' bg-[#F4F0FE] rounded-[12px] px-5 pt-5 h-[50%]'>
                <DiagnoChart patient={patient} />
            </div>
            <div className="flex items-center justify-between gap-5 ">
                <div className="flex  bg-[#E0F3FA] rounded-[12px] flex-col gap-3 w-full p-5">
                    <div className="w-30">
                        <img src={card1} alt="" />
                    </div>
                    <p className='body-md'>Respiratory Rate</p>
                    <p className='inner-card-title text-3xl'>{RespiratoryAve} bpm</p>
                    <p className='body-regular'>{patient?.diagnosis_history[0]?.respiratory_rate.levels}</p>
                </div>
                <div className="flex  bg-[#FFE6E9] rounded-[12px] flex-col gap-3 w-full p-5">
                    <div className="w-30">
                        <img src={card2} alt="" />
                    </div>
                    <p className='body-md'>Temprature</p>
                    <p className='inner-card-title text-3xl'>{tempratureAvg} °F</p>
                    <p className='body-regular'>{patient?.diagnosis_history[0]?.temperature.levels}</p>
                </div>
                <div className="flex  bg-[#FFE6F1] rounded-[12px] flex-col gap-3 w-full p-5">
                    <div className="w-30">
                        <img src={card3} alt="" />
                    </div>
                    <p className='body-md'>Heart Rate</p>
                    <p className='inner-card-title text-3xl'>{heartRateAvg} bpm</p>
                    <p className='body-regular'>{patient?.diagnosis_history[0]?.heart_rate.levels}</p>
                </div>
            </div>
        </div>
    )
}

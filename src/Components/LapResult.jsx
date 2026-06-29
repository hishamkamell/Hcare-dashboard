
import download from "../assets/download.svg"

export default function LapResult({ patient }) {
    return (
        <div className='bg-white w-full lgw-[367px] rounded-2xl p-5  flex flex-col gap-5'>
            <div className='flex items-center justify-between pb-3'>
                <h2 className='card-title'>Lap Result</h2>
            </div>
            <div className=" overflow-x-auto max-h-[200px] overflow-y-auto pr-3 scrollbar-custom ">
                {
                    patient?.lab_results.map((item) => (
                        <div key={item} className="flex justify-between hover:bg-gray-100/50">
                            <p className='body-regular p-2  rounded-lg'>{item}</p>
                            <img src={download} alt="" />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

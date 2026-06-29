
export default function DiagnoList({ patient }) {
    const diagnoses = patient?.diagnostic_list
    return (
        <div className='bg-white w-[766px] rounded-2xl pt-5 px-5  flex flex-col gap-5'>
            <div className='flex items-center justify-between pb-3'>
                <h2 className='card-title'>Diagnosis List</h2>
            </div>


            <div className="">
                <div className=" overflow-x-auto max-h-[300px] overflow-y-auto pr-2 scrollbar-custom">

                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className=" body-bold bg-[#F6F7F8] ">
                                <th className="p-4 rounded-l-2xl">Problem/Diagnosis</th>
                                <th className="p-4">Description</th>
                                <th className="p-4 rounded-r-2xl">Status</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-50 body-regular">
                            {diagnoses?.map((item) => (
                                <tr key={item.name} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="p-4 font-medium py-5">{item.name}</td>
                                    <td className="p-4 font-normal text-[#4a5a67] py-5">{item.description}</td>
                                    <td className="p-4 font-normal text-[#1e303e] py-5">{item.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div >
            </div>
        </div>
    )
}

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
import arrowup from '../assets/ArrowUp.svg'
import arrowdown from '../assets/ArrowDown.svg'



export default function DiagnoChart({ patient }) {
    const DignoHistory = patient?.diagnosis_history.slice(0, 6) || [];
    const labels = DignoHistory?.map((item) => {
        const month = item.month.slice(0, 3)
        return `${month},${item.year}`;
    }
    )
    const diastolic = DignoHistory?.map((item) => item.blood_pressure.diastolic.value) || [];
    const systolic = DignoHistory?.map((item) => item.blood_pressure.systolic.value) || [];

    const avgSystolic =
        systolic.length > 0
            ? Math.round(
                systolic.reduce((a, b) => a + b, 0) / systolic.length
            )
            : 0;

    const avgDiastolic =
        diastolic.length > 0
            ? Math.round(
                diastolic.reduce((a, b) => a + b, 0) / diastolic.length
            )
            : 0;

    const data = {
        labels: labels,
        datasets: [
            {
                label: "Blood Pressure",
                data: diastolic,
                pointRadius: 4,
                pointBackgroundColor: "#8C6FE6",
                borderColor: "#8C6FE6",
                backgroundColor: "rgba(1,240,208,.15)",
                tension: 0.45,
                legend: {
                    position: "bottom"
                }
            },
            {
                label: "Blood Pressure",
                data: systolic,
                pointRadius: 4,
                pointBackgroundColor: "#C26EB4",
                borderColor: "#C26EB4",
                backgroundColor: "rgba(1,240,208,.15)",
                tension: 0.45,
                legend: {
                    position: "bottom"
                }
            },
        ],

    };
    const options = {

        scales: {
            y: {
                ticks: {
                    color: "#64748B",
                },
            },
            x: {
                ticks: {
                    color: "#64748B",
                },
                grid: {
                    display: false,
                },
            },
        },
        plugins: {

            legend: {
                display: false,
            },
        },
    };

    return (
        <div className="flex" >
            <div className="flex-5">
                <div className="flex justify-between">
                    <p className='inner-card-title pb-4'>Blood Pressure</p>
                    <p className="px-6 body-regular">Last 6 months</p>
                </div>
                <div className="flex">
                    <div className="flex-3 h-[300px]">
                        <Line data={data} options={options} />
                    </div>


                </div>
            </div>
            <div className="flex-2">
                <div >
                    <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#ec60be]"></span>
                        <span className="body-bold text-[#324558]">Systolic</span>
                    </div>

                    <div className="flex flex-col gap-2">
                        <span className="inner-card-title text-2xl pt-2">{avgSystolic}</span>
                        <p className="body-regular flex gap-2 text-xs">
                            <img src={arrowup} alt="" />

                            {DignoHistory && DignoHistory[0]?.blood_pressure?.systolic.levels}
                        </p>
                    </div>
                </div>
                <div className="w-full h-px bg-gray-200 my-5"></div>

                <div >
                    <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#8C6FE6]"></span>
                        <span className="body-bold">Diastolic</span>
                    </div>

                    <div className="flex flex-col gap-2">
                        <span className="inner-card-title text-2xl pt-2">{avgDiastolic}</span>
                        <p className="body-regular flex gap-2 text-xs">
                            <img src={arrowdown} alt="" />
                            {DignoHistory && DignoHistory[0]?.blood_pressure.diastolic.levels}
                        </p>
                    </div>
                </div>
            </div>
        </div >
    )
}

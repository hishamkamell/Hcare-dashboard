import { useEffect, useState } from "react"
import Nav from "./Components/Nav"
import Sidebar from "./Components/Sidebar"
import api from "./services/api"
import DiagnoHistory from "./Components/DiagnoHistory"
import DiagnoList from "./Components/DiagnoList"
import PatientCard from "./Components/PatientCard"
import LapResult from "./Components/LapResult"



function App() {
  const [patient, setPatient] = useState(null)
  const [allPatients, setAllPatients] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get();
        const getPatient = response.data.filter((item) => item.name === "Jessica Taylor");
        setPatient(getPatient[0])
        setAllPatients(response.data)
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [])
  return (
    <>
      <nav >
        <Nav />
      </nav>
      <main className="lg:flex-row flex mx-auto p-5 mb-5 gap-4 flex-col">
        <Sidebar patient={patient} allPatients={allPatients} setPatient={setPatient} />
        <div className="flex flex-col gap-5">
          <DiagnoHistory patient={patient} />
          <DiagnoList patient={patient} />
        </div>
        <div className="flex flex-col gap-5">
          <PatientCard patient={patient} />
          <LapResult patient={patient} />
        </div>

      </main>
    </>
  )
}

export default App

import axios from "axios";
import { useEffect, useState } from "react";


const names = {
    "aspek_penilaian_1": [
    ],
    "aspek_penilaian_2": [
    ],
    "aspek_penilaian_3": [
    ],
    "aspek_penilaian_4": [
    ]
  };

  for (const key in names) {
    console.log(`${key}: ${JSON.stringify(names[key], null, 2)}`);
  }

function Output({ newData }){
    const [data, setData] = useState({})

    const onGetData = async() => {
        let res = await axios.get(`http://localhost:5000/aspek_penilaian`)
        setData(res.data)
    }

    useEffect(() => {
    onGetData()
    }, [newData])
    return(
         <>
  <div className="div">JSON Data</div>
  {Object.keys(data).map((key) => (
      <pre key={key}>
        {`${key}: ${JSON.stringify(data[key], null, 2)}`}
      </pre>
    ))}
</>
    )
}

export default Output;
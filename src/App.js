import "./App.css";
import { useEffect, useState } from "react";
import NilaiSelect from "./component/NilaiSelect";
import Output from "./component/output";
import axios from "axios"


function App() {

  const [rows, setRows] = useState([
    {id:1, name: 'Mahasiswa 1', aspek_penilaian_1: '', aspek_penilaian_2: '', aspek_penilaian_3: '', aspek_penilaian_4: '' },
    {id:2, name: 'Mahasiswa 2', aspek_penilaian_1: '', aspek_penilaian_2: '', aspek_penilaian_3: '', aspek_penilaian_4: '' },
    {id:3, name: 'Mahasiswa 3', aspek_penilaian_1: '', aspek_penilaian_2: '', aspek_penilaian_3: '', aspek_penilaian_4: '' },
    {id:4, name: 'Mahasiswa 4', aspek_penilaian_1: '', aspek_penilaian_2: '', aspek_penilaian_3: '', aspek_penilaian_4: '' },
    {id:5, name: 'Mahasiswa 5', aspek_penilaian_1: '', aspek_penilaian_2: '', aspek_penilaian_3: '', aspek_penilaian_4: '' },
    {id:6, name: 'Mahasiswa 6', aspek_penilaian_1: '', aspek_penilaian_2: '', aspek_penilaian_3: '', aspek_penilaian_4: '' },
    {id:7, name: 'Mahasiswa 7', aspek_penilaian_1: '', aspek_penilaian_2: '', aspek_penilaian_3: '', aspek_penilaian_4: '' },
    {id:8, name: 'Mahasiswa 8', aspek_penilaian_1: '', aspek_penilaian_2: '', aspek_penilaian_3: '', aspek_penilaian_4: '' },
    {id:9, name: 'Mahasiswa 9', aspek_penilaian_1: '', aspek_penilaian_2: '', aspek_penilaian_3: '', aspek_penilaian_4: '' },
    {id:10, name: 'Mahasiswa 10', aspek_penilaian_1: '', aspek_penilaian_2: '', aspek_penilaian_3: '', aspek_penilaian_4: '' },
  ]);


  const handleSelectChange = (mhsName, value, idx) => {
      setRows(prevRows => {
        const newRow = { ...prevRows[idx], [mhsName]: value };
        const newRows = [...prevRows];
        newRows[idx] = newRow;
        return newRows;
      });
  };

  const [newData, setNewData] = useState(false);

  let onSubmit = async() => {
    const dataToSend = {
      "aspek_penilaian": {
        "aspek_penilaian_1" : {
            "mahasiswa_1": rows[0]?.aspek_penilaian_1,
            "mahasiswa_2": rows[1]?.aspek_penilaian_1,
            "mahasiswa_3": rows[2]?.aspek_penilaian_1,
            "mahasiswa_4": rows[3]?.aspek_penilaian_1,
            "mahasiswa_5": rows[4]?.aspek_penilaian_1,
            "mahasiswa_6": rows[5]?.aspek_penilaian_1,
            "mahasiswa_7": rows[6]?.aspek_penilaian_1,
            "mahasiswa_8": rows[7]?.aspek_penilaian_1,
            "mahasiswa_9": rows[8]?.aspek_penilaian_1,
            "mahasiswa_10": rows[9]?.aspek_penilaian_1
        },
        "aspek_penilaian_2": {
          "mahasiswa_1": rows[0]?.aspek_penilaian_2,
          "mahasiswa_2": rows[1]?.aspek_penilaian_2,
          "mahasiswa_3": rows[2]?.aspek_penilaian_2,
          "mahasiswa_4": rows[3]?.aspek_penilaian_2,
          "mahasiswa_5": rows[4]?.aspek_penilaian_2,
          "mahasiswa_6": rows[5]?.aspek_penilaian_2,
          "mahasiswa_7": rows[6]?.aspek_penilaian_2,
          "mahasiswa_8": rows[7]?.aspek_penilaian_2,
          "mahasiswa_9": rows[8]?.aspek_penilaian_2,
          "mahasiswa_10": rows[9]?.aspek_penilaian_2
          },
          "aspek_penilaian_3": {
            "mahasiswa_1": rows[0]?.aspek_penilaian_3,
            "mahasiswa_2": rows[1]?.aspek_penilaian_3,
            "mahasiswa_3": rows[2]?.aspek_penilaian_3,
            "mahasiswa_4": rows[3]?.aspek_penilaian_3,
            "mahasiswa_5": rows[4]?.aspek_penilaian_3,
            "mahasiswa_6": rows[5]?.aspek_penilaian_3,
            "mahasiswa_7": rows[6]?.aspek_penilaian_3,
            "mahasiswa_8": rows[7]?.aspek_penilaian_3,
            "mahasiswa_9": rows[8]?.aspek_penilaian_3,
            "mahasiswa_10": rows[9]?.aspek_penilaian_3
          },
          "aspek_penilaian_4": {
            "mahasiswa_1": rows[0]?.aspek_penilaian_4,
            "mahasiswa_2": rows[1]?.aspek_penilaian_4,
            "mahasiswa_3": rows[2]?.aspek_penilaian_4,
            "mahasiswa_4": rows[3]?.aspek_penilaian_4,
            "mahasiswa_5": rows[4]?.aspek_penilaian_4,
            "mahasiswa_6": rows[5]?.aspek_penilaian_4,
            "mahasiswa_7": rows[6]?.aspek_penilaian_4,
            "mahasiswa_8": rows[7]?.aspek_penilaian_4,
            "mahasiswa_9": rows[8]?.aspek_penilaian_4,
            "mahasiswa_10": rows[9]?.aspek_penilaian_4
          }
      }
    }
    try {
      let res = await axios.post(`http://localhost:5000/aspek_penilaian`, dataToSend )
      alert("Data berhasil disimpan!");
      setNewData((prevData) => !prevData);
    } catch (error) {
      alert("Terjadi kesalahan saat menyimpan data!");
      console.log(error.response.data)
    }
  }

  useEffect(() => {
  }, [rows]);
  return (
    <div className="my-36">
      <div className="tittle flex justify-center items-center text-2xl font-semibold mb-5">
        Aplikasi Penilaian Mahasiswa
      </div>
      <div className="container mx-auto ">
        <div className="top grid grid-cols-5 justify-items-center mt-2">
          <div className="div col-start-2 col-end-3">Aspek Penilaian 1</div>
          <div className="div col-start-3 col-end-4">Aspek Penilaian 2</div>
          <div className="div col-start-4 col-end-5">Aspek Penilaian 3</div>
          <div className="div col-start-5 col-end-6">Aspek Penilaian 4</div>
        </div>
        {rows.map((val, idx) => {
          return(
            <>
            <div className="bottom border border-1 border-gray-600 my-5" key={idx}>
          <div className="contain grid grid-cols-5 gap-3 my-2 px-5">
            <div className="flex items-center">
              <img
                src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
                class="w-12 rounded-full"
                alt="Avatar"
              />
              <div
                className="mt ml-2 px-2.5">
                  {val.name}
              </div>
            </div>
            <NilaiSelect
              name="aspek_penilaian_1"
              value={val.aspek_penilaian_1}
              onSelectChange={(mhsName, value) =>
                handleSelectChange(mhsName, value, idx)
              }
            />
            <NilaiSelect
              name="aspek_penilaian_2"
              value={val.aspek_penilaian_2}
              onSelectChange={(mhsName, value) =>
                handleSelectChange(mhsName, value, idx)
              }
            />
            <NilaiSelect
              name="aspek_penilaian_3"
              value={val.aspek_penilaian_3}
              onSelectChange={(mhsName, value) =>
                handleSelectChange(mhsName, value, idx)
              }
            />
            <NilaiSelect
              name="aspek_penilaian_4"
              value={val.aspek_penilaian_4}
              onSelectChange={(mhsName, value) =>
                handleSelectChange(mhsName, value, idx)
              }
            />
          </div>
        </div>
            </>
          )
        })}
      <div className="flex justify-end pr-5">
      <button className="text-white bg-black px-4 py-3 rounded-lg "
       onClick={onSubmit}>
        Simpan
      </button>
      </div>
      </div>

      <Output newData={newData} />
      
    </div>
  );
}

export default App;

import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthHeader } from 'Helper';
import { Error } from 'Pages';
import { PageContext } from 'Context';
import { PageList } from 'Components';
import { Loader } from 'Layout';

const headCells = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Submission' },
  { id: 'source', numeric: false, disablePadding: true, label: 'Nama' },
  { id: 'departemen', numeric: false, disablePadding: false, label: 'Departemen' },
  { id: 'tingkat', numeric: false, disablePadding: false, label: 'Jenis' },
];

const titleCase = (string)  => {
  var sentence = string.toLowerCase().split(" ");
  for(var i = 0; i< sentence.length; i++){
     sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
  }
  return sentence;
}

function createData(id, name, source, tingkat, departemen) {
  const apiType = tingkat === 'kuliahtamu' ? 'kultam' : tingkat
  const modul = tingkat === 'kuliahtamu' ? 'Kuliah Tamu' : titleCase(tingkat);
  return { id, type:"Submission", name, source, link:`/detail/${apiType}/${id}`, tingkat: modul, departemen };
}

const Submission = () => {
  const [isLoading, setLoading] = useState(true)
  const {dispatchPage} = useContext(PageContext)
  const [error, setError] = useState(0)
  const [rows, setRows] = useState([])
  useEffect(() => {
    setLoading(true)
    const pageDetail = {
      title: "Submission",
      routeStack: ["Submission"],
    }
    dispatchPage({type: 'STACK_REPLACE', data: pageDetail}) 
    const fetchAPI = async () => {
      try {
        const resp = await axios.get(`${process.env.REACT_APP_API_URL}submission/`, {
          headers: AuthHeader()
        })
        const departemen = await axios.get(`${process.env.REACT_APP_API_URL}departemen/`, {
          headers: AuthHeader()
        })
        const nama = departemen.data
        const { data } = resp
        let r = []
        for (let i = 0; i < resp.data.length; i++) {
          const cur = data[i]
          r.push(createData(cur.id, cur.judul, cur.nama, cur.modul, cur.departemen ? nama[cur.departemen - 1].nama : "undefined"))
        }
        setRows(r)
      } catch (error) {
        setError(error.response.status)
      }
      setLoading(false)
    }
    fetchAPI()
  }, [dispatchPage])
  return (
    <React.Fragment>
      <Loader isLoading={isLoading} />
      {!isLoading && (
        error !== 0 ? 
        <Error error={error}/> :
        <PageList title="Submission" rows={rows} headCells={headCells} />
      )
      }
    </React.Fragment>
  )
}

export { Submission }

import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthHeader } from 'Helper';
import { PageContext } from 'Context';
import { PageList } from 'Components';
import { Loader } from 'Layout';

const headCells = [
  { id: 'detail', numeric: false, disablePadding: true, label: 'Sertifikasi' },
  { id: 'tempat', numeric: false, disablePadding: false, label: 'Lembaga' },
  { id: 'departemen', numeric: false, disablePadding: false, label: 'Departemen' },
];

function createData(id, name, source, date, tempat, departemen) {
  return { id, type:"Sertifikasi", name, source, date, link:'/detail/sertifikasi/' + id, tempat, departemen};
}

const Sertifikasi = () => {
  const [isLoading, setLoading] = useState(true)
  const {dispatchPage} = useContext(PageContext)
  const [rows, setRows] = useState([])
  useEffect(() => {
    setLoading(true)
    const pageDetail = {
      title: "Sertifikasi",
      routeStack: ["Sertifikasi"],
    }
    dispatchPage({type: 'STACK_REPLACE', data: pageDetail}) 
    const fetchAPI = async () => {
      const resp = await axios.get(`${process.env.REACT_APP_API_URL}sertifikasi/`, {
        headers: AuthHeader()
      })
      const departemen = await axios.get(`${process.env.REACT_APP_API_URL}departemen/`, {
        headers: AuthHeader()
      })
      const nama = departemen.data
      const { data } = resp
      console.log(data)
      let r = []
      for (let i = 0; i < data.length; i++) {
        const cur = data[i]
        r.push(createData(cur.id, cur.nama_sertifikasi, cur.nama, cur.tanggal, cur.lembaga_sertifikasi, cur.departemen ? nama[cur.departemen - 1].nama : "undefined"))
      }
      setRows(r)
      setLoading(false)
    }
    fetchAPI()
  }, [dispatchPage])
  return (
    <React.Fragment>
      <Loader isLoading={isLoading} />
      {!isLoading && <PageList title="Training" rows={rows} headCells={headCells} />}
    </React.Fragment>
  )
}

export { Sertifikasi }

import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthHeader } from 'Helper';
import { PageContext } from 'Context';
import { PageList } from 'Components';
import { Loader } from 'Layout';

const headCells = [
  { id: 'detail', numeric: false, disablePadding: true, label: 'Detail' },
  { id: 'category', numeric: false, disablePadding: false, label: 'Detail Jurnal' },
  { id: 'departemen', numeric: false, disablePadding: false, label: 'Departemen' },
  { id: 'tingkat', numeric: false, disablePadding: false, label: 'Tingkat' },
];

function createData(id, type, name, tingkat, source, date, detail, departemen) {
  return { id, type, name, tingkat, source, date, link:'/detail/' + type.toLowerCase() + "/" + id, detail, departemen };
}

const Jurnal = () => {
  const [isLoading, setLoading] = useState(true)
  const {dispatchPage} = useContext(PageContext)
  const [rows, setRows] = useState([])
  useEffect(() => {
    setLoading(true)
    const pageDetail = {
      title: "Jurnal",
      routeStack: ["Jurnal"],
    }
    dispatchPage({type: 'STACK_REPLACE', data: pageDetail}) 
    const fetchAPI = async () => {
      const resp = await axios.get(`${process.env.REACT_APP_API_URL}jurnal/`, {
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
        r.push(createData(cur.id, "Jurnal", cur.judul, cur.tingkat, cur.author, cur.uploaded_at, { vol: cur.jurnal_vol, no: cur.jurnal_no, category: []}, cur.departemen ? nama[cur.departemen - 1].nama : "undefined"))
      }
      setRows(r)
      setLoading(false)
    }
    fetchAPI()
  }, [dispatchPage])
  return (
    <React.Fragment>
      <Loader isLoading={isLoading} />
      {!isLoading && <PageList title="Jurnal" rows={rows} headCells={headCells} />}
    </React.Fragment>
  )
}

export { Jurnal }

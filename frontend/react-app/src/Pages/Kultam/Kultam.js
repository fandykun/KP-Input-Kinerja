import React, { useContext, useEffect, useState } from 'react';
import { AuthHeader } from 'Helper';
import axios from 'axios';
import { PageContext } from 'Context';
import { PageList } from 'Components';
import { Loader } from 'Layout';

const headCells = [
  { id: 'detail', numeric: false, disablePadding: true, label: 'Kuliah Tamu' },
  { id: 'departemen', numeric: false, disablePadding: false, label: 'Departemen' },
  { id: 'tingkat', numeric: false, disablePadding: false, label: 'Tingkat' },
];

function createData(id, name, departemen, tingkat, source, date) {
  return { id, type:"Kultam", name, departemen, tingkat, source, date, link:'/detail/kultam/' + id };
}

// let rows = [{}];

const Kultam = () => {
  const [isLoading, setLoading] = useState(true)
  const {dispatchPage} = useContext(PageContext)
  const [rows, setRows] = useState([])
  useEffect(() => {
    setLoading(true)
    const pageDetail = {
      title: "Kuliah Tamu",
      routeStack: ["Kuliah Tamu"],
    }
    dispatchPage({type: 'STACK_REPLACE', data: pageDetail}) 
    const fetchAPI = async () => {
      const resp = await axios.get(`${process.env.REACT_APP_API_URL}kuliah-tamu/`, {
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
        r.push(createData(cur.id, cur.topik, nama[cur.departemen - 1].nama, cur.tingkat, cur.pemateri, cur.tanggal))
      }
      setRows(r)
      setLoading(false)
    }
    fetchAPI()
  }, [dispatchPage])
  return (
    <React.Fragment>
      <Loader isLoading={isLoading} />
      {!isLoading && <PageList title="Kuliah Tamu" rows={rows} headCells={headCells} />}
    </React.Fragment>
  )
}

export { Kultam }

import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthHeader } from 'Helper';
import { PageContext } from 'Context';
import { PageList } from 'Components';
import { Loader } from 'Layout';

const headCells = [
  { id: 'detail', numeric: false, disablePadding: true, label: 'Detail' },
  { id: 'konferensi', numeric: false, disablePadding: false, label: 'Detail Konferensi' },
  { id: 'tingkat', numeric: false, disablePadding: false, label: 'Tingkat' },
];

function createData(id, type, name, tingkat, source, date, detail) {
  return { id, type, name, tingkat, source, date, link:'/detail/' + type.toLowerCase() + "/" + id, detail };
}

const Konferensi = () => {
  const [isLoading, setLoading] = useState(true)
  const {dispatchPage} = useContext(PageContext)
  const [rows, setRows] = useState([])
  useEffect(() => {
    setLoading(true)
    const pageDetail = {
      title: "Konferensi",
      routeStack: ["Konferensi"],
    }
    dispatchPage({type: 'STACK_REPLACE', data: pageDetail}) 
    const fetchAPI = async () => {
      const resp = await axios.get(`${process.env.REACT_APP_API_URL}konferensi/`, {
        headers: AuthHeader()
      })
      const { data } = resp
      let r = []
      for (let i = 0; i < resp.data.length; i++) {
        const cur = data[i]
        r.push(createData(cur.id, "Konferensi", cur.judul, cur.tingkat, cur.author, cur.tanggal_mulai, { konfhal: cur.konf_hal, tempat: cur.tempat, category: []}))
      }
      setRows(r)
      setLoading(false)
    }
    fetchAPI()
  }, [dispatchPage])
  return (
    <React.Fragment>
      <Loader isLoading={isLoading} />
      {!isLoading && <PageList title="Konferensi" rows={rows} headCells={headCells} />}
    </React.Fragment>
  )
}

export { Konferensi }

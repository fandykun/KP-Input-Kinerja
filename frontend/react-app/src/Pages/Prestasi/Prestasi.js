import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthHeader } from 'Helper';
import { PageContext } from 'Context';
import { PageList } from 'Components';
import { Loader } from 'Layout';

const headCells = [
  { id: 'detail', numeric: false, disablePadding: true, label: 'Lomba' },
  { id: 'tingkat', numeric: false, disablePadding: false, label: 'Tingkat' },
];

function createData(id, name, tingkat, source, date) {
  return { id, type:"Prestasi", name, tingkat, source, date, link:'/detail/prestasi/' + id};
}


const Prestasi = () => {
  const [isLoading, setLoading] = useState(true)
  const {dispatchPage} = useContext(PageContext)
  const [rows, setRows] = useState([])
  useEffect(() => {
    setLoading(true)
    const pageDetail = {
      title: "Prestasi",
      routeStack: ["Pretasi"],
    }
    dispatchPage({type: 'STACK_REPLACE', data: pageDetail}) 
    const fetchAPI = async () => {
      const resp = await axios.get(`${process.env.REACT_APP_API_URL}prestasi/`, {
        headers: AuthHeader()
      })
      const { data } = resp
      let r = []
      for (let i = 0; i < resp.data.length; i++) {
        const cur = data[i]
        r.push(createData(cur.id, cur.lomba, cur.tingkat, cur.name, cur.tanggal))
      }
      setRows(r)
      setLoading(false)
    }
    fetchAPI()
  }, [dispatchPage])
  return (
    <React.Fragment>
      <Loader isLoading={isLoading} />
      {!isLoading && <PageList title="Prestasi" rows={rows} headCells={headCells} />}
    </React.Fragment>
  )
}

export { Prestasi }

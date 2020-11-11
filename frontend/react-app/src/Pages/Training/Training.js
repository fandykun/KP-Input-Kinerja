import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthHeader } from 'Helper';
import { PageContext } from 'Context';
import { PageList } from 'Components';
import { Loader } from 'Layout';

const headCells = [
  { id: 'detail', numeric: false, disablePadding: true, label: 'Pelatihan' },
  { id: 'tempat', numeric: false, disablePadding: false, label: 'Tempat' },
  { id: 'tingkat', numeric: false, disablePadding: false, label: 'Jenis' },
];

function createData(id, name, tingkat, source, date, tempat) {
  return { id, type:"Training", name, tingkat, source, date, link:'/detail/training/' + id, tempat};
}

const Training = () => {
  const [isLoading, setLoading] = useState(true)
  const {dispatchPage} = useContext(PageContext)
  const [rows, setRows] = useState([])
  useEffect(() => {
    setLoading(true)
    const pageDetail = {
      title: "Training",
      routeStack: ["Training"],
    }
    dispatchPage({type: 'STACK_REPLACE', data: pageDetail}) 
    const fetchAPI = async () => {
      const resp = await axios.get(`${process.env.REACT_APP_API_URL}trainingkaryawan/`, {
        headers: AuthHeader()
      })
      const karyawan = resp.data
      let r = []
      for (let i = 0; i < karyawan.length; i++) {
        const cur = karyawan[i]
        r.push(createData(cur.id, cur.jenis_pelatihan, 'Karyawan', 'Abdul', cur.tanggal, cur.tempat))
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

export { Training }

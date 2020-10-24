import React, { useContext, useEffect, useState } from 'react';
import { PageContext } from 'Context';
import { PageList } from 'Components';
import { Loader } from 'Layout';

const headCells = [
  { id: 'detail', numeric: false, disablePadding: true, label: 'Pelatihan' },
  { id: 'tempat', numeric: false, disablePadding: false, label: 'Tempat' },
  { id: 'tingkat', numeric: false, disablePadding: false, label: 'Jenis' },
];

function createData(id, name, tingkat, source, date, tempat) {
  return { id, type:"Training", name, tingkat, source, date, link:'/dashboard', tempat};
}

const rows = [
  createData(1, "Pelatihan VM", "Dosen", "Muhammad Rafi F.", '2019-10-23', "Ruang Dosen"),
  createData(2, "Competitive Programming", "Karyawan", "Novan Ardhana", '2019-06-11', "Aula"),
];

const Training = () => {
  const [isLoading, setLoading] = useState(false)
  const {dispatchPage} = useContext(PageContext)
  useEffect(() => {
    setLoading(true)
    const pageDetail = {
      title: "Training",
      routeStack: ["Training"],
    }
    dispatchPage({type: 'STACK_REPLACE', data: pageDetail}) 
    const fetchAPI = async () => {
      await new Promise(r => setTimeout(r, 2000));
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

import React, { useContext, useEffect, useState } from 'react';
import { PageContext } from 'Context';
import { PageList } from 'Components';
import { Loader } from 'Layout';

const headCells = [
  { id: 'detail', numeric: false, disablePadding: true, label: 'Lomba' },
  { id: 'tingkat', numeric: false, disablePadding: false, label: 'Tingkat' },
];

function createData(id, name, tingkat, source, date) {
  return { id, type:"Prestasi", name, tingkat, source, date, link:'/dashboard'};
}

const rows = [
  createData(1, "Lomba Makan Kerupuk", "Internasional", "Fandy Kuncoro", '2019-10-23'),
  createData(2, "Competitive Programming", "Kampung", "Arif Darma", '2019-06-11'),
];

const Prestasi = () => {
  const [isLoading, setLoading] = useState(false)
  const {dispatchPage} = useContext(PageContext)
  useEffect(() => {
    setLoading(true)
    const pageDetail = {
      title: "Prestasi",
      routeStack: ["Pretasi"],
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
      {!isLoading && <PageList title="Prestasi" rows={rows} headCells={headCells} />}
    </React.Fragment>
  )
}

export { Prestasi }

import React, { useContext, useEffect, useState } from 'react';
import { PageContext } from 'Context';
import { PageList } from 'Components';
import { Loader } from 'Layout';

const headCells = [
  { id: 'detail', numeric: false, disablePadding: true, label: 'Submission' },
  { id: 'jenis', numeric: false, disablePadding: false, label: 'Jenis' },
];

function createData(id, name, tingkat) {
  return { id, type:"Submission", name, tingkat, link:'/dashboard'};
}

const rows = [
  createData(1, "Lomba Makan Kerupuk", "Prestasi"),
  createData(2, "Competitive Programming", "Jurnal"),
];

const Submission = () => {
  const [isLoading, setLoading] = useState(false)
  const {dispatchPage} = useContext(PageContext)
  useEffect(() => {
    setLoading(true)
    const pageDetail = {
      title: "Submission",
      routeStack: ["Submission"],
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
      {!isLoading && <PageList title="Submission" rows={rows} headCells={headCells} />}
    </React.Fragment>
  )
}

export { Submission }

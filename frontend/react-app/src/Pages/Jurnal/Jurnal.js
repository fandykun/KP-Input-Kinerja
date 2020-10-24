import React, { useContext, useEffect, useState } from 'react';
import { PageContext } from 'Context';
import { PageList } from 'Components';
import { Loader } from 'Layout';

const headCells = [
  { id: 'detail', numeric: false, disablePadding: true, label: 'Detail' },
  { id: 'journal', numeric: false, disablePadding: false, label: 'Detail Jurnal / Konferensi' },
  { id: 'tingkat', numeric: false, disablePadding: false, label: 'Tingkat' },
];

function createData(id, type, name, tingkat, source, date, detail) {
  return { id, type, name, tingkat, source, date, link:'/dashboard', detail };
}

const rows = [
  createData(1, "Jurnal", "ABC", "Internasional", "Fandy Kuncoro", '2019-10-23', { vol: '1', no: '1', category: ["Pi",  "Scopus"]}),
  createData(2, "Jurnal", "ML/AI", "Provinsi", "Arif Darma", '2019-06-11', { vol: '1', no: '1', category: ["Pn",  "Scopus"]}),
  createData(3, "Konferensi", "ML/AI", "Provinsi", "Arif Darma", '2019-06-11', { konfhal: '20', tempat: 'Konferensi Nasional Indonesia, Jakarta', category:['Scopus']}),
];

const Jurnal = () => {
  const [isLoading, setLoading] = useState(false)
  const {dispatchPage} = useContext(PageContext)
  useEffect(() => {
    setLoading(true)
    const pageDetail = {
      title: "Konferensi / Jurnal",
      routeStack: ["Konferensi / Jurnal"],
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
      {!isLoading && <PageList title="Konferensi / Jurnal" rows={rows} headCells={headCells} />}
    </React.Fragment>
  )
}

export { Jurnal }

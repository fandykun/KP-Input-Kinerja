import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthHeader } from 'Helper';
import { Error } from 'Pages';
import { PageContext } from 'Context';
import { PageList } from 'Components';
import { Loader } from 'Layout';

const headCells = [
  { id: 'detail', numeric: false, disablePadding: true, label: 'Submission' },
  { id: 'nama', numeric: false, disablePadding: true, label: 'Nama' },
  { id: 'jenis', numeric: false, disablePadding: false, label: 'Jenis' },
];

const titleCase = (string)  => {
  var sentence = string.toLowerCase().split(" ");
  for(var i = 0; i< sentence.length; i++){
     sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
  }
  return sentence;
}

function createData(id, name, source, tingkat) {
  const apiType = tingkat === 'kuliahtamu' ? 'kultam' : tingkat
  const modul = tingkat === 'kuliahtamu' ? 'Kuliah Tamu' : titleCase(tingkat);
  return { id, type:"Submission", name, source, link:`/detail/${apiType}/${id}`, tingkat: modul };
}

const Submission = () => {
  const [isLoading, setLoading] = useState(false)
  const {dispatchPage} = useContext(PageContext)
  const [error, setError] = useState(0)
  const [rows, setRows] = useState([])
  useEffect(() => {
    setLoading(true)
    const pageDetail = {
      title: "Submission",
      routeStack: ["Submission"],
    }
    dispatchPage({type: 'STACK_REPLACE', data: pageDetail}) 
    const fetchAPI = async () => {
      const resp = await axios.get(`${process.env.REACT_APP_API_URL}submission/`, {
        headers: AuthHeader()
      })
      const user_info = await axios.get(`${process.env.REACT_APP_API_URL}account/info/`, {
        headers: AuthHeader()
      })
      if (!user_info.data.is_admin) {
        setError(403)
      }
      const { data } = resp
      let r = []
      for (let i = 0; i < resp.data.length; i++) {
        const cur = data[i]
        r.push(createData(cur.id, cur.judul, cur.nama, cur.modul))
      }
      setRows(r)
      setLoading(false)
    }
    fetchAPI()
  }, [dispatchPage])
  return (
    <React.Fragment>
      <Loader isLoading={isLoading} />
      {!isLoading && (
        error !== 0 ? 
        <Error error={error}/> :
        <PageList title="Submission" rows={rows} headCells={headCells} />
      )
      }
    </React.Fragment>
  )
}

export { Submission }

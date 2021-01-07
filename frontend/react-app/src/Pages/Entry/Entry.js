import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthHeader } from 'Helper';
import { PageContext } from 'Context';
import { EntryForm } from 'Components';
import { Loader } from 'Layout';

const Entry = () => {
  const {dispatchPage} = useContext(PageContext)
  const [isLoading, setLoading] = useState(true)
  const [departemen, setDepartemen] = useState([])
  const [dosen, setDosen] = useState([])
  useEffect(() => {
    setLoading(true)
    const pageDetail = {
      title: "Entry Baru",
      routeStack: ["Entry Baru"],
    }
    dispatchPage({type: 'STACK_REPLACE', data: pageDetail}) 
    const fetchAPI = async () => {
      const resp = await axios.get(`${process.env.REACT_APP_API_URL}departemen/`, {
        headers: AuthHeader()
      })
      const master_dosen = await axios.get(`${process.env.REACT_APP_API_URL}master/dosen/`, {
        headers: AuthHeader()
      })
      let r = []
      let m  = []
      resp.data.forEach((val) => {
        r.push({"label": val.nama, "value": val.id})
      })
      master_dosen.data.forEach((val) => {
        m.push({"nama": val.nama, "departemen": val.departemen})
      })
      setDepartemen(r)
      setDosen(m)
      setLoading(false)
    }
    fetchAPI()
  }, [dispatchPage])
  return (
    <React.Fragment>
      <Loader isLoading={isLoading} />
      {!isLoading && <EntryForm departemen={departemen} masterDosen={dosen}/>}
    </React.Fragment>
  )
}

export { Entry }

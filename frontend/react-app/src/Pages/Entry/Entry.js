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
      let r = []
      resp.data.forEach((val) => {
        r.push({"label": val.nama, "value": val.id})
      })
      setDepartemen(r)
      setLoading(false)
    }
    fetchAPI()
  }, [dispatchPage])
  return (
    <React.Fragment>
      <Loader isLoading={isLoading} />
      {!isLoading && <EntryForm departemen={departemen}/>}
    </React.Fragment>
  )
}

export { Entry }

import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthHeader } from 'Helper';
import { Error } from 'Pages';
import { PageContext } from 'Context';
import { Loader } from 'Layout';
import { DownloadForm } from 'Components';

const Download = () => {
  const [departemen, setDepartemen] = useState([])
  const [year, setYear] = useState([])
  const [isLoading, setLoading] = useState(true)
  const {dispatchPage} = useContext(PageContext)
  const [error, setError] = useState(0)
  useEffect(() => {
    setLoading(true)
    const pageDetail = {
      title: "Download",
      routeStack: ["Download"],
    }
    dispatchPage({type: 'STACK_REPLACE', data: pageDetail}) 
    const fetchAPI = async () => {
      try {
        const departemen = await axios.get(`${process.env.REACT_APP_API_URL}departemen/`, {
          headers: AuthHeader()
        })
        let r = [{"label": "Semua Departemen", "value": 0}]
        departemen.data.forEach((val) => {
          r.push({"label": val.nama, "value": val.id})
        })
        setDepartemen(r)
        const currentYear = new Date().getFullYear()
        let y = []
        for (let i = 2015; i <= currentYear; i++) {
          y.push({"label": i.toString(), "value": i})
        }
        setYear(y)
      } catch (error) {
        setError(error.response.status)
      }
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
        <DownloadForm departemen={departemen} year={year}/>
      )
      }
    </React.Fragment>
  )
}

export { Download }

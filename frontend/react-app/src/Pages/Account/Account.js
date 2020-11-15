import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthHeader } from 'Helper';
import { PageContext } from 'Context';
import { Loader } from 'Layout';
import { AccountForm } from 'Components';

const Account = () => {
  const [isLoading, setLoading] = useState(true)
  const {dispatchPage} = useContext(PageContext)
  const [data, setData] = useState()
  useEffect(() => {
    setLoading(true)
    const pageDetail = {
      title: "Account Info",
      routeStack: ["Account Info"],
    }
    dispatchPage({type: 'STACK_REPLACE', data: pageDetail}) 
    const fetchAPI = async () => {
      const user_info = await axios.get(`${process.env.REACT_APP_API_URL}account/info/`, {
        headers: AuthHeader()
      })
      const departemen = await axios.get(`${process.env.REACT_APP_API_URL}departemen`, {
        headers: AuthHeader()
      })
      const { data } = user_info
      const departmentName = data.departemen ? departemen.data[data.department - 1].nama : departemen.data[0].nama
      setData({
        ...data,
        'departemen': departmentName,
      })
      setLoading(false)
    }
    fetchAPI()
  }, [dispatchPage])
  return (
    <React.Fragment>
      <Loader isLoading={isLoading} />
      {!isLoading && <AccountForm data={data}/>}
    </React.Fragment>
  )
}

export { Account }

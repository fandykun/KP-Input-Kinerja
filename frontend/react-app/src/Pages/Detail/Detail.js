import React, { useContext, useEffect, useState } from 'react';
import { PageContext } from 'Context';
import { Loader } from 'Layout';
import { ViewDetail } from 'Components';
import { useParams } from 'react-router-dom'

const Detail = () => {
  const { type, id } = useParams()
  const [isLoading, setLoading] = useState(false)
  const {dispatchPage} = useContext(PageContext)
  useEffect(() => {
    setLoading(true)
    const pageDetail = {
      title: "Detail",
      routeStack: ["Detail"],
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
      {!isLoading && <ViewDetail type={type} id={id} />}
    </React.Fragment>
  )
}

export { Detail }

import React, { useContext, useEffect, useState } from 'react';
import { PageContext } from 'Context';
import { Loader } from 'Layout';
import { EntryForm } from 'Components';

const Entry = () => {
  const [isLoading, setLoading] = useState(false)
  const {dispatchPage} = useContext(PageContext)
  useEffect(() => {
    setLoading(true)
    const pageDetail = {
      title: "Entry Baru",
      routeStack: ["Entry Baru"],
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
      {!isLoading && <EntryForm />}
    </React.Fragment>
  )
}

export { Entry }

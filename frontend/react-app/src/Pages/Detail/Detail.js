import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthHeader } from 'Helper';
import { PageContext } from 'Context';
import { Loader } from 'Layout';
import { ViewDetail } from 'Components';
import { useParams } from 'react-router-dom'

const viewKultam = (data) => {
  return [
    { type: "kultam", label: "Judul Kegiatan", value: data.topik },
    { type: "kultam", label: "Pemateri", value: data.pemateri },
    { type: "kultam", label: "Institusi", value: data.institusi },
    { type: "kultam", label: "Tingkat", value: data.tingkat },
    { type: "kultam", label: "Tanggal", value: data.tanggal },
    { type: "kultam", label: "media", value: data.filepath },
  ]
}

const viewJurnal = (data) => {
  return [
    { type: "konferensi", label: "Judul Kegiatan", value: data.judul },
    { type: "konferensi", label: "Author", value: data.author },
    { type: "konferensi", label: "Dipublish di", value: data.published_at },
    { type: "konferensi", label: "Tingkat", value: data.tingkat },
    { type: "konferensi", label: "Konf Hal.", value: data.konf_hal },
    { type: "konferensi", label: "Tempat", value: data.tempat },
    { type: "konferensi", label: "Tanggal Mulai", value: data.tanggal_mulai },
    { type: "konferensi", label: "Tanggal Selesai", value: data.tanggal_selesai },
  ]
}

const viewPrestasi = (data) => {
  return [
    { type: "prestasi", label: "Judul Kegiatan", value: data.lomba },
    { type: "prestasi", label: "Pelaku", value: data.name },
    { type: "prestasi", label: "Tingkat", value: data.tingkat },
    { type: "prestasi", label: "Peringkat", value: data.peringkat },
    { type: "prestasi", label: "Tanggal", value: data.tanggal },
    { type: "prestasi", label: "URL", value: data.url },
    { type: "prestasi", label: "media", value: data.filepath },
  ]
}

const titleCase = (string)  => {
  var sentence = string.toLowerCase().split(" ");
  for(var i = 0; i< sentence.length; i++){
     sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
  }
  return sentence;
}

const Detail = () => {
  const { type, id } = useParams()
  const [ data, setData ] = useState([])
  const [isLoading, setLoading] = useState(true)
  const {dispatchPage} = useContext(PageContext)
  useEffect(() => {
    setLoading(true)
    const detailTitle = type === 'kultam' ? 'Kuliah Tamu' : titleCase(type) 
    const pageDetail = {
      title: "Detail " + detailTitle,
      routeStack: ["Detail" + detailTitle],
    }
    dispatchPage({type: 'STACK_REPLACE', data: pageDetail}) 
    const fetchAPI = async () => {
      let apiType = type === 'kultam' ? 'kuliah-tamu' : type;
      const resp = await axios.get(`${process.env.REACT_APP_API_URL}${apiType}/${id}`, {
        headers: AuthHeader()
      })
      const { data } = resp
      switch (type) {
        case 'kultam':
          setData(viewKultam(data));
          break;
        case 'konferensi':
          setData(viewJurnal(data));
          break;
        case 'prestasi':
          setData(viewPrestasi(data));
          break;
        default:
          break;
      }
      setLoading(false)
    }
    fetchAPI()
  }, [type, id, dispatchPage])
  return (
    <React.Fragment>
      <Loader isLoading={isLoading} />
      {!isLoading && <ViewDetail data={data} type={type}/>}
    </React.Fragment>
  )
}

export { Detail }

import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthHeader } from 'Helper';
import { PageContext } from 'Context';
import { Loader } from 'Layout';
import { Error } from 'Pages';
import { ViewDetail } from 'Components';
import { useParams } from 'react-router-dom'

const viewKultam = (data) => {
  return [
    { type: "kultam", form: "text", label: "Judul Kegiatan", value: data.topik },
    { type: "kultam", form: "text", label: "Pemateri", value: data.pemateri },
    { type: "kultam", form: "text", label: "Institusi", value: data.institusi },
    { type: "kultam", form: "text", label: "Departemen", value: data.departemen },
    { type: "kultam", form: "text", label: "Tingkat", value: data.tingkat },
    { type: "kultam", form: "text", label: "Tanggal", value: data.tanggal },
    { type: "kultam", form: "media", label: "media", value: data.filepath },
  ]
}

const viewKonferensi = (data) => {
  return [
    { type: "konferensi", form: "text", label: "Judul Kegiatan", value: data.judul },
    { type: "konferensi", form: "text", label: "Author", value: data.author },
    { type: "konferensi", form: "text", label: "Departemen", value: data.departemen },
    { type: "konferensi", form: "text", label: "Dipublish di", value: data.published_at },
    { type: "konferensi", form: "text", label: "URL", value: data.url },
    { type: "konferensi", form: "text", label: "Tingkat", value: data.tingkat },
    { type: "konferensi", form: "text", label: "Konf Hal.", value: data.konf_hal },
    { type: "konferensi", form: "text", label: "Tempat", value: data.tempat },
    { type: "konferensi", form: "checkbox", label: "Scopus", value: data.scopus },
    { type: "konferensi", form: "text", label: "Tanggal Mulai", value: data.tanggal_mulai },
    { type: "konferensi", form: "text", label: "Tanggal Selesai", value: data.tanggal_selesai },
  ]
}

const viewJurnal = (data) => {
  return [
    { type: "konferensi", form: "text", label: "Judul Kegiatan", value: data.judul },
    { type: "konferensi", form: "text", label: "Author", value: data.author },
    { type: "konferensi", form: "text", label: "Departemen", value: data.departemen },
    { type: "konferensi", form: "text", label: "Dipublish di", value: data.published_at },
    { type: "konferensi", form: "text", label: "URL", value: data.url },
    { type: "konferensi", form: "text", label: "Tingkat", value: data.tingkat },
    { type: "konferensi", form: "text", label: "Volume", value: data.jurnal_vol },
    { type: "konferensi", form: "text", label: "Nomor", value: data.jurnal_no },
    { type: "konferensi", form: "checkbox", label: "Scopus", value: data.scopus },
    { type: "konferensi", form: "text", label: "Tahun", value: data.tahun },
  ]
}

const viewPrestasi = (data) => {
  return [
    { type: "prestasi", form: "text", label: "Judul Kegiatan", value: data.lomba },
    { type: "prestasi", form: "text", label: "Pelaku", value: data.name },
    { type: "prestasi", form: "text", label: "Departemen", value: data.departemen },
    { type: "prestasi", form: "text", label: "Jenis", value: data.jenis },
    { type: "prestasi", form: "text", label: "Tingkat", value: data.tingkat },
    { type: "prestasi", form: "text", label: "Peringkat", value: data.peringkat },
    { type: "prestasi", form: "text", label: "Tanggal", value: data.tanggal },
    { type: "prestasi", form: "text", label: "URL", value: data.url },
    { type: "prestasi", form: "media", label: "media", value: data.filepath },
  ]
}

const viewTraining = (data) => {
  return [
    { type: "training", form: "text", label: "Judul Kegiatan", value: data.judul },
    { type: "training", form: "text", label: "Jenis", value: data.jenis },
    { type: "training", form: "text", label: "Pelaku", value: data.peserta },
    { type: "training", form: "text", label: "Departemen", value: data.departemen },
    { type: "training", form: "text", label: "Tempat", value: data.tempat },
    { type: "training", form: "text", label: "Tanggal Mulai", value: data.date_start },
    { type: "training", form: "text", label: "Tanggal Selesai", value: data.date_end },
    { type: "training", form: "media", label: "media", value: data.filepath },
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
  const [ isAdmin, setIsAdmin ] = useState(false)
  const [ isValidated, setIsValidated ] = useState(false)
  const [ error, setError] = useState(0)
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
      const apiType = type === 'kultam' ? 'kuliah-tamu' : type;
      try {
        const resp = await axios.get(`${process.env.REACT_APP_API_URL}${apiType}/${id}`, {
          headers: AuthHeader()
        })
        const departemen = await axios.get(`${process.env.REACT_APP_API_URL}departemen/`, {
          headers: AuthHeader()
        })
        const user_info = await axios.get(`${process.env.REACT_APP_API_URL}account/info/`, {
          headers: AuthHeader()
        })
        setIsValidated(resp.data.is_validated)
        setIsAdmin(user_info.data.is_admin)
        const { data } = resp
        data.departemen = data.departemen ? departemen.data[data.departemen - 1].nama : "undefined"
        switch (type) {
          case 'kultam':
            setData(viewKultam(data));
            break;
          case 'konferensi':
            setData(viewKonferensi(data));
            break;
          case 'jurnal':
            setData(viewJurnal(data));
            break;
          case 'prestasi':
            setData(viewPrestasi(data));
            break;
          case 'training':
            setData(viewTraining(data));
            break;
          default:
            break;
        }
      }
      catch (error) {
        setError(error.response.status)
      }
      setLoading(false)
    }
    fetchAPI()
  }, [type, id, dispatchPage])
  return (
    <React.Fragment>
      <Loader isLoading={isLoading} />
      {!isLoading && (
        error !== 0 ? 
        <Error error={error}/> :
        <ViewDetail data={data} type={type} id={id} isAdmin={isAdmin} isValidated={isValidated} setIsValidated={setIsValidated}/>
      )
      }
    </React.Fragment>
  )
}

export { Detail }

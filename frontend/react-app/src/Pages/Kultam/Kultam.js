import React from 'react';
import { PageList } from 'Components';

const headCells = [
  { id: 'detail', numeric: false, disablePadding: true, label: 'Detail Kuliah Tamu' },
  { id: 'departemen', numeric: false, disablePadding: false, label: 'Departemen' },
  { id: 'tingkat', numeric: false, disablePadding: false, label: 'Tingkat' },
];

function createData(id, name, departemen, tingkat, company, date) {
  return { id, name, departemen, tingkat, company, date};
}

const rows = [
  createData(1, "ABC", "Informatika", "Internasional", "Sinarmas", '2019-10-23'),
  createData(2, "ML/AI", "Sistem Informasi", "Provinsi", "ICPC", '2019-06-11'),
  createData(3, "ML/AI", "Sistem Informasi", "Provinsi", "ICPC", '2019-06-11'),
  createData(4, "ML/AI", "Sistem Informasi", "Provinsi", "ICPC", '2019-06-11'),
  createData(5, "ML/AI", "Sistem Informasi", "Provinsi", "ICPC", '2019-06-11'),
  createData(6, "ML/AI", "Sistem Informasi", "Provinsi", "ICPC", '2019-06-11'),
  createData(7, "ML/AI", "Sistem Informasi", "Provinsi", "ICPC", '2019-06-11'),
  createData(8, "ML/AI", "Sistem Informasi", "Provinsi", "ICPC", '2019-06-11'),
  createData(9, "ML/AI", "Sistem Informasi", "Provinsi", "ICPC", '2019-06-11'),
  createData(10, "ML/AI", "Sistem Informasi", "Provinsi", "ICPC", '2019-06-11'),
  createData(11, "ML/AI", "Sistem Informasi", "Provinsi", "ICPC", '2019-06-11'),
  createData(12, "ML/AI", "Sistem Informasi", "Provinsi", "ICPC", '2019-06-11'),
  createData(13, "ML/AI", "Sistem Informasi", "Provinsi", "ICPC", '2019-06-11'),
  createData(14, "ML/AI", "Sistem Informasi", "Provinsi", "ICPC", '2019-06-11'),
  createData(15, "ML/AI", "Sistem Informasi", "Provinsi", "ICPC", '2019-06-11'),
  createData(16, "ML/AI", "Sistem Informasi", "Provinsi", "ICPC", '2019-06-11'),
  createData(17, "ML/AI", "Sistem Informasi", "Provinsi", "ICPC", '2019-06-11'),
  createData(18, "ML/AI", "Sistem Informasi", "Provinsi", "ICPC", '2019-06-11'),
  createData(19, "ML/AI", "Sistem Informasi", "Provinsi", "ICPC", '2019-06-11'),
];

const Kultam = () => {
  return (
    <React.Fragment>
      <PageList title="Kuliah Tamu" rows={rows} headCells={headCells} />
    </React.Fragment>
  )
}

export { Kultam }

import React, { useContext } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { LoginRoute } from './LoginRoute';
import { ProtectedRoute } from './ProtectedRoute';
import { Sertifikasi, Download, Account, Konferensi, Error, Detail, Entry, Dashboard, Login, Prestasi, Kultam, Jurnal, Training, Submission } from 'Pages';
import { UserContext } from 'Context';
import { Navbar } from 'Layout';
import './index.css';

const RouterContainer = () => {
  let location = useLocation()
  const {user} = useContext(UserContext)
  return (
    <>
    {user.isAuthenticated && <Navbar />}
    <Switch location={location}>
      <Route path="/" exact>
        <Redirect to="/dashboard" /> 
      </Route>
      <ProtectedRoute component={Dashboard} path="/dashboard" exact />
      <ProtectedRoute component={Kultam} path="/kultam" exact />
      <ProtectedRoute component={Konferensi} path="/konferensi" exact />
      <ProtectedRoute component={Jurnal} path="/jurnal" exact />
      <ProtectedRoute component={Prestasi} path="/prestasi" exact />
      <ProtectedRoute component={Training} path="/training" exact />
      <ProtectedRoute component={Sertifikasi} path="/sertifikasi" exact />
      <ProtectedRoute component={Submission} path="/submission" exact />
      <ProtectedRoute component={Entry} path="/entry" exact />
      <ProtectedRoute component={Detail} path="/detail/:type/:id" exact />
      <ProtectedRoute component={Account} path="/account" exact />
      <ProtectedRoute component={Download} path="/download" exact />
      <LoginRoute component={Login} path="/login" exact />
      <Route path="*">
        <Error error={404} /> 
      </Route>
    </Switch>
    </>
  )
}


export { RouterContainer }

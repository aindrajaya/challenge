import React, { Fragment } from 'react'
import Landing from './Landing'

export default function Layout() {
  return (
    <Fragment>    
      <Header />
      <Route>
        <Landing />
        <Login />
      </Route>
      <Footer />
    </Fragment>
  )
}
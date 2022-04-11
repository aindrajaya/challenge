import React, { Fragment } from 'react'
import Landing from './Landing'

export default function Layout() {
  return (
    <>
      <Header />
      <Route>
        <Landing />
        <Login />
      </Route>
      <Footer />
    </>
  )
}

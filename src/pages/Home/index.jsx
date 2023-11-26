import React from 'react'
import { Header, Main, Services, Footer } from 'components'
import TopButton from 'components/topButton/TopButton'

const Home = () => {

  return (
    <div>
      <Header />
      <Main />
      <Services/>
      <Footer />
      <TopButton/>
    </div>
  )
}

export default Home
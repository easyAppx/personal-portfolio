import React from 'react'
import { Header, About, Footer } from 'components'
import TopButton from 'components/topButton/TopButton'

const AboutMe = () => {
  return (
    <div className='w-screen'>
      <Header />
      <About/>
      <Footer />
      <TopButton />
    </div>
  );
};
export default AboutMe
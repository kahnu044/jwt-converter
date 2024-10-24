import React from 'react'
import Head from 'next/head'
function Home() {
  return (
    <div>
      <Head>
        <title>JWT Converter</title>
      </Head>
      <div className='h-screen flex justify-center items-center'>
        <p> Welcome To JWT Converter </p>
      </div>
    </div>
  )
}

export default Home

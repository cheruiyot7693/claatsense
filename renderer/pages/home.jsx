import React from 'react'
import Head from 'next/head'


export default function HomePage() {
  const [message, setMessage] = React.useState('No message found')

  React.useEffect(() => {
    window.ipc.on('message', (message) => {
      setMessage(message)
    })
  }, [])

  return (
    <React.Fragment>
      <Head>
        <title>ClaatSense</title>
      </Head>
    </React.Fragment>
  )
}

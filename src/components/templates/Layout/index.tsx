import React, { ReactNode } from 'react'

import Head from 'next/head'

type Props = {
  children: ReactNode
  title?: string
}

export default function Layout({ children, title }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex h-full">
        <main>{children}</main>
      </div>
    </>
  )
}

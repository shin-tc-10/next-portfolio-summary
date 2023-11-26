'use client'

import Image from 'next/image'
import NextLink from 'next/link'

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <section>
        <p>Webアプリ</p>
        <div><NextLink href="/webApp">Webアプリ一覧</NextLink></div>
      </section>
      <section>
        <p>Webデザイン</p>
        <div><NextLink href="/webDesign">Webデザイン一覧</NextLink></div>
      </section>
      <section>
        <p>Webサイト</p>
        <div><NextLink href="/webSite">Webサイト一覧</NextLink></div>
      </section>
    </main >
  )
}

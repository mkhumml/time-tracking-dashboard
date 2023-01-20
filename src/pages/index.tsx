import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Card from '@/components/Card/Card'


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div style={{ backgroundColor: "hsl(235, 46%, 20%)", borderRadius: "1em" }}>
          <div style={{ padding: "2em", backgroundColor: " hsl(246, 80%, 60%)", borderRadius: "1em" }}>Top</div>
          <div style={{ padding: "2em" }}>Bottom</div>
        </div>
      </main>
    </>
  )
}
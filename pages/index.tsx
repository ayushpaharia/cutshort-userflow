import type { NextPage } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

import Logo from "components/Logo"
import Progress from "components/Progress"
import { Page1, Page2, Page3, Page4 } from "layouts"

const Home: NextPage = () => {
  const router: any = useRouter()
  const [currentProgress, setCurrentProgress] = useState(1)
  const [activeCard, setActiveCard] = useState(0)

  const progressItems = [
    <Page1 key="p-1" />,
    <Page2 key="p-2" />,
    <Page3 activeCard={activeCard} setActiveCard={setActiveCard} key="p-3" />,
    <Page4 key="p-4" />,
  ]

  useEffect(() => {
    setCurrentProgress(router.query.progress || 1)
  }, [router.query.progress])

  return (
    <div>
      <Head>
        <title>Eden</title>
        <meta name="description" content="Eden | Signup" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid min-h-screen pt-20">
        <div className="flex flex-col items-center">
          <Logo />
          <Progress
            progressItems={progressItems}
            currentProgress={currentProgress}
            setCurrentProgress={setCurrentProgress}
          />
          <div className="flex flex-col items-center w-full mt-16">
            {progressItems[currentProgress - 1]}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

import { UsersIcon, UserIcon } from "@heroicons/react/solid"
import { useRouter } from "next/router"
import { Dispatch, SetStateAction } from "react"

type ActiveCardProps = {
  activeCard: number
  setActiveCard: Dispatch<SetStateAction<number>>
}

const Page3: React.FC<ActiveCardProps> = ({ activeCard, setActiveCard }) => {
  const router = useRouter()
  return (
    <>
      <h1 className="text-4xl font-bold tracking-tight text-center">
        How are you planning to use Eden?
      </h1>
      <p className="pt-2 text-lg tracking-tight text-center text-gray-500">
        We&apos;ll streamline your setup experience accordingly.
      </p>
      <div className="flex mt-8 space-x-8 w-[28rem]">
        <div
          className={`flex flex-col w-1/2 p-6 border-2 rounded-lg cursor-pointer ${
            !activeCard ? "border-primary" : "border-gray-200"
          }`}
          onClick={() => setActiveCard(0)}
        >
          <UserIcon
            className={`w-8 h-8 ${!activeCard ? "text-primary" : ""}`}
          />
          <h3 className="mt-4 text-lg font-semibold tracking-tight">
            For myself
          </h3>
          <p className="mt-2 text-gray-400">
            Write better. Think more clearly. Stay organized.
          </p>
        </div>
        <div
          className={`flex flex-col w-1/2 p-6 border-2 rounded-lg ${
            activeCard ? "border-primary" : "border-gray-200"
          }`}
          onClick={() => setActiveCard(1)}
        >
          <UsersIcon
            className={`w-8 h-8 ${activeCard ? "text-primary" : ""}`}
          />
          <h3 className="mt-4 text-lg font-semibold tracking-tight">
            With my team
          </h3>
          <p className="mt-2 text-gray-400">
            Wikis, docs, taks & projects, all in one place.
          </p>
        </div>
      </div>
      <button
        className="py-4 mx-auto mt-8 text-white rounded-md bg-primary w-[28rem]"
        onClick={() => {
          router.replace("?progress=4")
        }}
      >
        Create Workspace
      </button>
    </>
  )
}
export default Page3

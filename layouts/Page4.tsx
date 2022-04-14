import { CheckIcon } from "@heroicons/react/solid"

const Page4: React.FC = () => {
  return (
    <>
      <span className="p-5 mt-8 rounded-full bg-primary">
        <CheckIcon className="w-8 h-8 text-white " />
      </span>
      <h1 className="mt-16 text-4xl font-bold tracking-tight text-center">
        Congratulations, Eren!
      </h1>
      <p className="pt-2 text-lg tracking-tight text-center text-gray-500">
        You have completed onboarding, you can start using eden
      </p>
      <button className="py-4 mx-auto mt-8 text-white rounded-md bg-primary w-[28rem]">
        Launch Eden
      </button>
    </>
  )
}

export default Page4

import { useRouter } from "next/router"

const Page1: React.FC = () => {
  const router = useRouter()
  return (
    <>
      <h1 className="text-4xl font-bold tracking-tight text-center">
        Welcome! First things first...
      </h1>
      <p className="pt-2 text-lg tracking-tight text-center text-gray-500">
        You can always change them later
      </p>
      <span className="flex flex-col justify-start mt-8">
        <label
          className="font-semibold tracking-tight text-gray-600"
          htmlFor="fullname"
        >
          Full Name
        </label>
        <input
          className="p-4 mt-2 border-gray-200 rounded-md outline-none border-[1px] tracking-tight w-[28rem]"
          type="text"
          name="fullname"
          id="fullname"
          placeholder="Steve Job"
          required
        />
      </span>
      <span className="flex flex-col justify-start mt-8">
        <label
          className="font-semibold tracking-tight text-gray-600"
          htmlFor="displayname"
        >
          Display Name
        </label>
        <input
          className="p-4 mt-2 border-gray-200 rounded-md outline-none border-[1px] tracking-tight w-[28rem]"
          type="text"
          name="displayname"
          id="displayname"
          placeholder="Steve"
          required
        />
      </span>
      <button
        className="py-4 mx-auto mt-8 text-white rounded-md bg-primary w-[28rem]"
        onClick={() => {
          router.replace("?progress=2")
        }}
      >
        Create Workspace
      </button>
    </>
  )
}

export default Page1

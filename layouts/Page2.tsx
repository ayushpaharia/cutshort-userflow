import { useRouter } from "next/router"

const Page2: React.FC = () => {
  const router = useRouter()
  return (
    <>
      <h1 className="text-4xl font-bold tracking-tight text-center">
        Let&apos;s set up a home for all your work
      </h1>
      <p className="pt-2 text-lg tracking-tight text-center text-gray-500">
        You can always create another workspace later
      </p>
      <span className="flex flex-col justify-start mt-8">
        <label
          className="font-semibold tracking-tight text-gray-600"
          htmlFor="workspacename"
        >
          Workspace Name
        </label>
        <input
          className="p-4 mt-2 border-gray-200 rounded-md outline-none border-[1px] tracking-tight w-[28rem]"
          type="text"
          name="workspacename"
          id="workspacename"
          placeholder="Eden"
          required
        />
      </span>
      <span className="flex flex-col justify-start mt-8">
        <label
          className="font-semibold tracking-tight text-gray-600"
          htmlFor="workspaceurl"
        >
          Workspace URL <span className="text-gray-300">(optional)</span>
        </label>
        <span className="flex w-[28rem]">
          <input
            className="p-4 mt-2 border-gray-200 rounded-l-md outline-none border-[1px] tracking-tight w-[35%] bg-gray-200 font-semibold"
            type="text"
            name="workspacedomain"
            id="workspacedomain"
            placeholder="www.eden.com/"
            disabled
          />
          <input
            className="p-4 mt-2 border-gray-200 rounded-r-md outline-none border-[1px] tracking-tight w-[65%]"
            type="text"
            name="workspaceurl"
            id="workspaceurl"
            placeholder="Steve"
          />
        </span>
      </span>
      <button
        className="py-4 mx-auto mt-8 text-white rounded-md bg-primary w-[28rem]"
        onClick={() => {
          router.replace("?progress=3")
        }}
      >
        Create Workspace
      </button>
    </>
  )
}

export default Page2

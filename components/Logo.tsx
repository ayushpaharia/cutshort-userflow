import { AtSymbolIcon } from "@heroicons/react/solid"

export default function Logo() {
  return (
    <div className="flex items-center">
      <AtSymbolIcon className="w-10 h-10 text-neemlu text-primary" />
      <h3 className="pl-2 text-3xl font-bold tracking-tighter ">Eden</h3>
    </div>
  )
}

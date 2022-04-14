import Link from "next/link"
import React, { Dispatch, SetStateAction, useEffect } from "react"
import makeId from "util/makeId"

type ProgressProps = {
  progressItems: JSX.Element[]
  currentProgress: number
  setCurrentProgress: Dispatch<SetStateAction<number>>
}

type LineProps = {
  type: "full" | "half" | "empty"
}

export const Progress: React.FC<ProgressProps> = ({
  progressItems,
  currentProgress,
  setCurrentProgress,
}) => {
  return (
    <div className="flex mt-16">
      <ul className="flex items-center">
        {progressItems.map((_, index) => {
          let isLastElement = index < progressItems.length - 1
          // All completed Sections
          if (index < currentProgress) {
            return (
              <React.Fragment key={makeId()}>
                <Link href={`?progress=${index + 1}`} passHref>
                  <li className="list-item-active">{index + 1}</li>
                </Link>
                {index === currentProgress - 1 && isLastElement && (
                  <Line type="half" />
                )}
                {index < currentProgress - 1 && <Line type="full" />}
              </React.Fragment>
            )
          } else {
            // All incomplete Sections
            return (
              <React.Fragment key={makeId()}>
                <Link href={`?progress=${index + 1}`} passHref>
                  <li className="list-item-inactive">{index + 1}</li>
                </Link>
                {isLastElement && <Line type="empty" />}
              </React.Fragment>
            )
          }
        })}
      </ul>
    </div>
  )
}

const Line: React.FC<LineProps> = ({ type }) => {
  return (
    <>
      <hr
        className={`w-8 h-0.5 ${
          type === "full" || type === "half" ? "bg-primary" : "bg-gray-300"
        }`}
      />
      <hr
        className={`w-8 h-0.5 ${
          type === "half" || type === "empty" ? "bg-gray-300" : "bg-primary"
        }`}
      />
    </>
  )
}

export default Progress

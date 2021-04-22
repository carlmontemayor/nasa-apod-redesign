import { ReactElement } from 'react'

// This is a demo of husky, a git tool.
export const NavigationBar = (): ReactElement => {
  return (
    <nav>
      <div className="flex relative">
        <div className="font-bold text-5xl p-4 pr-0">APOD</div>
        <div className="font-bold text-sm center pr-4 pt-10 ">
          (astronomy picture of the day)
        </div>
      </div>
      <div className="font-bold text-sm  bottom-0 right-0 absolute p-2 ">
        Astronomy Picture of the Day
      </div>
    </nav>
  )
}

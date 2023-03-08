import React from "react";
import {Sub} from '../types'
interface Props {
  subs: Array<Sub>
}

const List = ({subs}: Props) => {
  const renderList = (): JSX.Element[] => {
    return subs.map(sub => {
      return (
        <li className=" border-[1px] list-none max-w-[320px] p-[8px] p-[32px] mt-2" key={sub.nick}>
          <img className="rounded-[100px]  mx-16 w-[60px]" src={sub.avatar} alt={'Avatar for ${sub.nick}'}/>
          <h4 className="text-[18px] font-semibold">{sub.nick}(<small>{sub.subMonths}</small>)</h4>
          <p className="text-[16px]">{sub.description?.substring(0, 100)}</p>
        </li>
      )
    })
  }
  return (
    <ul>
      {renderList()}
    </ul>
  )
}


export default List;
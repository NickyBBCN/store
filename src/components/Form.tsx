import {Sub} from '../types'
import useNewSubForm from "../hooks/useNewSubForm"

interface FormProps {
  onNewSub: (newSub: Sub) => void
}

const From = ({ onNewSub }: FormProps) => {
  const [inputValues, dispatch] = useNewSubForm()

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    onNewSub(inputValues)
    dispatch({type: "clear"})
  }
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = evt.target

    dispatch({
      type: "change_value",
      payload: {
        inputName: name,
        inputValue: value
      }
    })
  }
  const handleClear = () => {
    dispatch({type: "clear"})
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange}
        />
        <input onChange={handleChange}
               value={inputValues.nick}
               type='text'
               name='nick'
               placeholder='nick'
               className="flex flex-col rounded-2xl border-[1px] border-solid pr-2 pl-4 mb-2 mt-6"/>
        <input onChange={handleChange}
               value={inputValues.subMonths}
               type='text'
               name='subMonths'
               placeholder='subMonths'
               className="flex rounded-2xl border-[1px] border-solid pr-2 pl-4  mb-2 mt-6"/>
        <input onChange={handleChange}
               value={inputValues.avatar}
               type='text'
               name='avatar'
               placeholder='avatar '
               className="flex rounded-2xl border-[1px] border-solid pr-2 pl-4  mb-2 mt-6"/>
        <textarea onChange={handleChange}
                  value={inputValues.description}
                  name='description'
                  placeholder='description'
                  className="flex rounded-2xl border-[1px] border-solid pr-2 pl-4 border-inherit mb-[8px] w-[210px] h-[100px]"/>
        <button onClick={handleClear} className="flex decoration-gray-600 text-3xl transition-colors mt-2 "> delete
        </button>
        <button className="decoration-gray-600 text-3xl transition-colors mt-2 "> save nuew sub!</button>

      </form>
    </div>
  )
}
export default From;
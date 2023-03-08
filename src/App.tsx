import React, {useEffect,useRef ,useState} from 'react';
import List from "./components/List";
import Form from './components/Form';
import {Sub} from "./types";
import './App.css';

interface AppState {
  subs: Array<Sub>
  newSubsNumber: number;
}

const INITIAL_STATE = [

  {
    nick: 'dapelu',
    subMonths: 3,
    avatar: 'https://i.pravatar.cc/150?u=dapelu',
    description: 'Buenos dias'
  }, {
    nick: 'Sergios_serrano',
    subMonths: 2,
    avatar: 'https://i.pravatar.cc/150?u=Sergios_serrano'
  }

]

function App() {

  const [subs, setSubs] = useState<AppState["subs"]>([])
  const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubsNumber"]>(0)
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setSubs(INITIAL_STATE)
  }, [])

  const handleNewSub = (newSub: Sub):void=>{
    setSubs(subs=>[...subs,newSub])
  }
  return (
    <div className="App flex justify-center" ref={divRef}>
      <h1 className="">midu
        <List subs={subs}/>
        <Form onNewSub={handleNewSub}/>
      </h1>
    </div>
  );
}

export default App;

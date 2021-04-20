import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import React from 'react'
import Node from '../stories/Node'
import { FirstStory } from '../stories/Node.stories'
import Link from 'next/link';
import Layout from '../components/layout.jsx';
import MenuButton from '../stories/MenuButton';
import { SMap } from '../stories/MenuButton.stories';




export default function Home() {
  return (
    <>
    <div className='row justify-content-center'>  
      <div className='col-9'>
        SSZ SimpleSerialize
      </div>
    </div>
    <div>
      Hi Piper
    </div>
    </>
      )

}

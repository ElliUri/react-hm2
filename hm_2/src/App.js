import React from 'react'
import Card from './components/Card/Card'
import { datas } from './datas/datas'
import './App.css';


function App() {
  return (
    <div className='App'>
     {datas.map(data => (
					<Card
        id={data.id}  
        title={data.title}
        body={data.body}
        />
				))}
			</div>
		)
}
export default App;
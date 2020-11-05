import React from 'react'
import Atom from './Atom'
import periodData from '../data/data'
const uuidv4 = require(`uuid/v4`)
const {elements} = periodData

class Tabela extends React.Component {

	generateCards = () => elements.map(card => <Card key={uuidv4()} data={card} />)

	render() {
		return (
			<div className='tabela'>
				{this.generateCards()}
			</div>
		)
	}
}
export default Tabela


class Card extends React.Component {

	render() {
		const {data} = this.props
		return (
			<div className='tabela-card' style={{gridArea: `${data.ypos} / ${data.xpos} / span 1 / span 1`}}>
				<div className='tabela-card-num'>{data.number}</div>
				<div>
					<div className='tabela-card-sy'>{data.symbol}</div>
					<div className='tabela-card-name'>{data.name}</div>
					{/* <div className='tabela-card-name'>{data.phase}</div> */}
					{/* <div className='tabela-card-name'>{data.appearance}</div> */}
				</div>
				{/* <div className='tabela-card-svg'>
					<Atom/>
				</div> */}
			</div>
		)
	}
}


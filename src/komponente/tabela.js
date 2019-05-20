import React from 'react'
import periodData from '../data/data'
const {elements} = periodData

class Tabela extends React.Component {
	generateCards = () => elements.map(card => <div className='tabela-card' style={{gridColumn: `${card.xpos} / span 1`,
		gridRow: `${card.ypos} / span 1`}}>{card.symbol}</div>)

	render() {
		return (
			<div className='tabela'>
				{this.generateCards()}
			</div>
		)
	}
}
export default Tabela
import React from 'react'
const uuidv4 = require(`uuid/v4`)

const shells = [
	`M950,500c0,248.5-201.5,450-450,450S50,748.5,50,500 S251.5,50,500,50S950,251.5,950,500`, 
	`M900,500c0,220.9-179.1,400-400,400S100,720.9,100,500 s179.1-400,400-400S900,279.1,900,500`, 
	`M850,500c0,193.3-156.7,350-350,350S150,693.3,150,500 s156.7-350,350-350S850,306.7,850,500`, 
	`M800,500c0,165.7-134.3,300-300,300S200,665.7,200,500 s134.3-300,300-300S800,334.3,800,500`, 
	`M750,500c0,138.1-111.9,250-250,250S250,638.1,250,500 s111.9-250,250-250S750,361.9,750,500`, 
	`M700,500c0,110.5-89.5,200-200,200s-200-89.5-200-200 s89.5-200,200-200S700,389.5,700,500`, 
	`M650,500c0,82.8-67.2,150-150,150s-150-67.2-150-150 s67.2-150,150-150S650,417.2,650,500`, 
	`M600,500c0,55.2-44.8,100-100,100s-100-44.8-100-100 s44.8-100,100-100S600,444.8,600,500`, 
	`M550,500c0,27.6-22.4,50-50,50c-27.6,0-50-22.4-50-50 c0-27.6,22.4-50,50-50C527.6,450,550,472.4,550,500z`
]

class Atom extends React.Component {

	generateElectrons = (shells)=> {
		let atoms= []
		for (let i = 1; i <= shells.length; i++) {
			atoms.push(<circle id={`atom${i}`} r='10px' style={{ cx: 0, cy: 0, fill: `blue` }} key={uuidv4()} />)
		}
		return atoms
	}

	render() {
		// const {data} = this.props
		let centar = {cx: 500, cy: 500}
		let jezgro = {
			...centar,
			// r: 150,
			fill:`red`
		}
		let shellK = {
			...centar,
			// r: 300,
			fill: `none`,
			stroke: `red`,
			strokeWidth: `3px`
		}

		
		return (
			<svg className='atom' viewBox='0 0 1000 1000'>
				{shells.map(shell=><path style={shellK} key={uuidv4()} d={shell}/>)}
				{this.generateElectrons(shells)}
			</svg>
		)
	}
}

export default Atom
import React from 'react'
import Carousel from '../Carousel/Carousel'

interface WelcomeProps {
	id: string
}

export default function Welcome({ id }: WelcomeProps) {
	return (
		<div id={id}>
			<Carousel />
		</div>
	)
}

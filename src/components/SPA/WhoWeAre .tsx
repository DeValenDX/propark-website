import React from 'react'

interface WhoWeAreProps {
	id: string
}

export default function WhoWeAre({ id }: WhoWeAreProps) {
	return (
		<div id={id} className="h-screen flex items-center justify-center text-3xl">
			Quienes somos
		</div>
	)
}

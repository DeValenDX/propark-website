import React from 'react'

interface ParkingsProps {
	id: string
}

export default function Parkings({ id }: ParkingsProps) {
	return (
		<div id={id} className="h-screen flex items-center justify-center text-3xl">
			Parkings
		</div>
	)
}

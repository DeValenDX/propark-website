import React from 'react'

interface ServicesProps {
	id: string
}

export default function Services({ id }: ServicesProps) {
	return (
		<div id={id} className="h-screen flex items-center justify-center text-3xl">
			Servicios
		</div>
	)
}

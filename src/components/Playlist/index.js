import React from 'react'
import { useParams } from 'react-router-dom'

const Playlist = () => {
	const { id } = useParams()

	return (
		<div>
			Playlist: {id}
		</div>
	)
}

export default Playlist
import { Box, Typography } from '@mui/material'
import React from 'react'

const Rightbar = () => {
	return (
		<Box
			p={6}
			flex={1}>
			<Box position="fixed">
				<Typography variant='h6'
					fontWeight={100}
				>Online Friends</Typography>
			</Box>
		</Box>
	)
}

export default Rightbar
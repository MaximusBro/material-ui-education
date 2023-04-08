
import { Box } from '@mui/material'
import React from 'react'
import Post from './Post'

const posts = [
	{
		img: "https://retailers.ua/media/news/1100-s-crop-w/00/10/10137/750x485-17701.jpg",
		title: "Shrimp and Chorizo Paella",
		text: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests.Add 1 cup of frozen peas along with the mussels,if you like."
	},
	{
		img: "https://retailers.ua/media/news/1100-s-crop-w/00/10/10137/750x485-17701.jpg",
		title: "Shrimp and Chorizo Paella",
		text: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests.Add 1 cup of frozen peas along with the mussels,if you like."
	},
	{
		img: "https://retailers.ua/media/news/1100-s-crop-w/00/10/10137/750x485-17701.jpg",
		title: "Shrimp and Chorizo Paella",
		text: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests.Add 1 cup of frozen peas along with the mussels,if you like."
	},
	{
		img: "https://retailers.ua/media/news/1100-s-crop-w/00/10/10137/750x485-17701.jpg",
		title: "Shrimp and Chorizo Paella",
		text: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests.Add 1 cup of frozen peas along with the mussels,if you like."
	},
	{
		img: "https://retailers.ua/media/news/1100-s-crop-w/00/10/10137/750x485-17701.jpg",
		title: "Shrimp and Chorizo Paella",
		text: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests.Add 1 cup of frozen peas along with the mussels,if you like."
	}
]

const Feed = () => {
	return (
		<Box flex={2}>
			{posts.map(item => {
				return <Post {...item} />
			})}
		</Box>
	)
}

export default Feed
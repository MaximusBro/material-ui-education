import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'



const Rightbar = () => {
	return (

		<Box
			p={6}
			flex={1}

			sx={{ display: { xs: "none", sm: "block" }, }}>
			<Box position="fixed" width={300} height="80%" sx={{ overflow: 'auto' }}>
				<Typography variant='h6'
					fontWeight={100}
				>Online Friends</Typography>
				<AvatarGroup max={6}>
					<Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
					<Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
					<Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />
					<Avatar alt="Agnes Walker" src="https://material-ui.com/static/images/avatar/4.jpg" />
					<Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/5.jpg" />
					<Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/6.jpg" />
					<Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/7.jpg" />
				</AvatarGroup>
				<Typography variant='h6'
					fontWeight={100}
					mt={2} mb={2}
				>Latest Photos</Typography>
				<ImageList cols={3} row={100} gap={5}>
					<ImageListItem>
						<img src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=164&h=164&fit=crop&auto=format" alt="" />
					</ImageListItem>
					<ImageListItem>
						<img src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=164&h=164&fit=crop&auto=format" alt="" />
					</ImageListItem>
					<ImageListItem>
						<img src="https://images.unsplash.com/photo-1567306301408-9b74779a11af?w=164&h=164&fit=crop&auto=format" alt="" />
					</ImageListItem>
					<ImageListItem>
						<img src="https://images.unsplash.com/photo-1567306301408-9b74779a11af?w=164&h=164&fit=crop&auto=format" alt="" />
					</ImageListItem>
				</ImageList>
				<Typography variant='h6'
					fontWeight={100}
					mt={2} mb={2}
				>Latest Conversations</Typography>
				<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
					<ListItem alignItems="flex-start">
						<ListItemAvatar>
							<Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
						</ListItemAvatar>
						<ListItemText
							primary="Brunch this weekend?"
							secondary={
								<>
									<Typography
										sx={{ display: 'inline' }}
										component="span"
										variant="body2"
										color="text.primary"
									>
										Ali Connors
									</Typography>
									{" — I'll be in your neighborhood doing errands this…"}
								</>
							}
						/>
					</ListItem>
					<Divider variant="inset" component="li" />
					<ListItem alignItems="flex-start">
						<ListItemAvatar>
							<Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
						</ListItemAvatar>
						<ListItemText
							primary="Summer BBQ"
							secondary={
								<>
									<Typography
										sx={{ display: 'inline' }}
										component="span"
										variant="body2"
										color="text.primary"
									>
										to Scott, Alex, Jennifer
									</Typography>
									{" — Wish I could come, but I'm out of town this…"}
								</>
							}
						/>
					</ListItem>
					<Divider variant="inset" component="li" />
					<ListItem alignItems="flex-start">
						<ListItemAvatar>
							<Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />
						</ListItemAvatar>
						<ListItemText
							primary="Oui Oui"
							secondary={
								<>
									<Typography
										sx={{ display: 'inline' }}
										component="span"
										variant="body2"
										color="text.primary"
									>
										Sandra Adams
									</Typography>
									{' — Do you have Paris recommendations? Have you ever…'}
								</>
							}
						/>
					</ListItem>
				</List>
			</Box>
		</Box>
	)
}

export default Rightbar
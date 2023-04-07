import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import React from 'react'
import { AccountBox, Groups, ModeNight, Person, Settings, Storefront } from '@mui/icons-material';
import ArticleIcon from '@mui/icons-material/Article';


const Sidebar = () => {
	return (
		<Box
			flex={1}
			sx={{ display: { xs: "none", sm: "block" } }}
			p={2}
		>
			<Box position="fixed">
				<List>
					<ListItem disablePadding>
						<ListItemButton component="a" href="#home">
							<ListItemIcon>
								<HomeIcon />
							</ListItemIcon>
							<ListItemText primary="Homepage" />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component="a" href="#home">
							<ListItemIcon>
								<ArticleIcon />
							</ListItemIcon>
							<ListItemText primary="Pages" />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component="a" href="#home">
							<ListItemIcon>
								<Groups />
							</ListItemIcon>
							<ListItemText primary="Groups" />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component="a" href="#home">
							<ListItemIcon>
								<Storefront />
							</ListItemIcon>
							<ListItemText primary="Marketplace" />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component="a" href="#home">
							<ListItemIcon>
								<Person />
							</ListItemIcon>
							<ListItemText primary="Friends" />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component="a" href="#simple-list">
							<ListItemIcon>
								<Settings />
							</ListItemIcon>
							<ListItemText primary="Settings" />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component="a" href="#home">
							<ListItemIcon>
								<AccountBox />
							</ListItemIcon>
							<ListItemText primary="Profile" />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component="a" href="#home">
							<ListItemIcon>
								<ModeNight />
							</ListItemIcon>
							<Switch />
						</ListItemButton>
					</ListItem>
				</List>
			</Box>

		</Box>
	)
}

export default Sidebar
import { Mail, Notifications, Pets } from '@mui/icons-material'
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography, styled } from '@mui/material'
import React, { useState } from 'react'


const StyledToolbar = styled(Toolbar)({
	display: "flex",
	justifyContent: "space-between"
});

const Search = styled("div")(({ theme }) => ({
	backgroundColor: "white",
	padding: "0 10px",
	borderRadius: theme.shape.borderRadius,
	width: "40%"
}));

const Icons = styled(Box)(({ theme }) => ({
	display: "none",
	gap: "20px",
	alignItems: "center",
	[theme.breakpoints.up("sm")]: {
		display: "flex"
	}
}));

const UserBox = styled(Box)(({ theme }) => ({
	display: "none",
	gap: "10px",
	alignItems: "center",
	[theme.breakpoints.down("sm")]: {
		display: "flex"
	}
}));

const Navbar = () => {
	const [open, setOpen] = useState(false)
	return (
		<AppBar position='sticky'>
			<StyledToolbar>
				<Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>Maksym</Typography>
				<Pets sx={{ display: { xs: "block", sm: "none" } }} />
				<Search><InputBase placeholder='search...' /></Search>
				<Icons>
					<Badge badgeContent={4} color="error">
						<Mail />
					</Badge>
					<Badge badgeContent={4} color="error">
						<Notifications />
					</Badge>
					<Avatar sx={{ width: 30, height: 30 }}
						onClick={e => setOpen(true)}
						src="https://maksym-shydlovskyi.netlify.app/static/media/avatar.1874664e8f24806c3e3d.jpg" />
				</Icons>
				<UserBox>
					<Avatar sx={{ width: 30, height: 30 }}
						onClick={e => setOpen(true)}
						src="https://maksym-shydlovskyi.netlify.app/static/media/avatar.1874664e8f24806c3e3d.jpg" />
					<Typography variant='span'>Maksym</Typography>
				</UserBox>
			</StyledToolbar>
			<Menu
				id="demo-positioned-menu"
				aria-labelledby="demo-positioned-button"
				open={open}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				onClose={e => setOpen(false)}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
			>
				<MenuItem>Profile</MenuItem>
				<MenuItem >My account</MenuItem>
				<MenuItem >Logout</MenuItem>
			</Menu>
		</AppBar>
	)
}

export default Navbar
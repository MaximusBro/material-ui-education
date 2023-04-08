import { DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material'
import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography, styled } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';

const StyledModal = styled(Modal)({
	display: "flex",
	alignItems: "center",
	justifyContent: "center"
});
const UserBox = styled(Box)({
	display: "flex",
	alignItems: "center",
	gap: "10px",
	marginBottom: "20px"
});

const Add = () => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<Tooltip title="Delete"
				sx={{ position: "fixed", bottom: 20, left: { xs: "calc(50% - 25px)", md: 30 } }}
				onClick={() => setOpen(true)}>
				<Fab color="primary" aria-label="add">
					<AddIcon />
				</Fab>
			</Tooltip>
			<StyledModal
				open={open}
				onClose={() => setOpen(false)}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box width={400} height={280} p={3} borderRadius={5}
					bgcolor="background.default" color="text.primary">
					<Typography variant='h6' color="gray" textAlign="center">Create Post</Typography>
					<UserBox>
						<Avatar src="https://maksym-shydlovskyi.netlify.app/static/media/avatar.1874664e8f24806c3e3d.jpg"
							sx={{ width: 30, height: 30 }} />
						<Typography fontWeight={500} variant="h6">Maksym</Typography>
					</UserBox>
					<TextField
						sx={{ width: "100%" }}
						id="standard-multiline-static"
						multiline
						rows={3}
						placeholder="What's on your mind?"
						variant="standard"
					/>
					<Stack direction="row" gap={1} mt={2} mb={3}>
						<EmojiEmotions />
						<Image color="secondary" />
						<VideoCameraBack color="success" />
						<PersonAdd color="error" />
					</Stack>
					<ButtonGroup
						fullWidth
						variant="contained"
						aria-label="outlined primary button group">
						<Button>Post</Button>
						<Button sx={{ width: "100px" }}>

							<DateRange />
						</Button>

					</ButtonGroup>
				</Box>
			</StyledModal >
		</>
	)
}

export default Add
import React from "react";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import ExpandIcon from "./ExpandIcon";
import { SidebarButton } from "./SidebarButton";
import { Drawer, DrawerHeader } from "./Drawer";
import { Add, ArrowForward, Home, Search } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";

export const Navbar = () => {
	const [open, setOpen] = React.useState(false);

	const handleToggleDrawer = () => {
		setOpen((prev) => !prev);
	};

	return (
		<>
			<CssBaseline />
			<Drawer variant="permanent" open={open}>
				{/* <DrawerHeader> */}
				{/* // TODO: Seems like the drawer will be necessary and it would work for us as a separated section just like the original Spotify */}
				<List>
					<ListItem disablePadding sx={{ display: "block" }}>
						<ListItemButton disableRipple disableTouchRipple>
							<ListItemIcon>
								<Home></Home>
							</ListItemIcon>
							<ListItemText primary='Home' sx={{ opacity: open ? 1 : 0 }} />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding sx={{ display: "block" }}>
						<ListItemButton disableRipple
							sx={{
								minHeight: 48,
								px: 2.5,
							}}
						>
							<ListItemIcon
								sx={{
									minWidth: 0,
									mr: open ? 3 : 'auto',
									justifyContent: 'center',
								}}

							>
								<Search></Search>
							</ListItemIcon>
							<ListItemText primary='Search' sx={{ opacity: open ? 1 : 0 }} />
						</ListItemButton>
					</ListItem>
				</List>
				{/* </DrawerHeader> */}

				<Divider />
				<List>
					<ListItem disablePadding sx={{ justifyContent: 'space-between' }}>
						<ListItemButton onClick={handleToggleDrawer} disableTouchRipple
							sx={{
								minHeight: 48,
								px: 2.5,
							}}
						>
							<ListItemIcon
								sx={{
									minWidth: 0,
									justifyContent: "center",
								}}
							>
								<ExpandIcon isExpanded={open}></ExpandIcon>
							</ListItemIcon>
							<ListItemText primary='Your Library' sx={{ opacity: open ? 1 : 0 }} />
						</ListItemButton>
						{open ? <div>
							<IconButton aria-label="add">
								<Add />
							</IconButton>
							<IconButton aria-label="more">
								<ArrowForward />
							</IconButton>
						</div> : ''}
					</ListItem>
					{/* // TODO: From here on we will have some pills below the library button.
				// and the other items that will have pictures of "Your likes"
				// your playlists and saved albums or playlists or Artists */}

				</List>
			</Drawer >
		</>
	);
};

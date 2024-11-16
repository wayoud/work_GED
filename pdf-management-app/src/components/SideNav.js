import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Box } from '@mui/material';
import { styled } from '@mui/system';
import { useLocation, useNavigate } from 'react-router-dom';
import DescriptionIcon from '@mui/icons-material/Description';
import TableChartIcon from '@mui/icons-material/TableChart';

const StyledDrawer = styled(Drawer)({
  width: 240,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: 240,
    boxSizing: 'border-box',
    marginTop: '6%',
  },
});

const SideNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <StyledDrawer variant="permanent">
      <List>
        <ListItem
          button
          selected={location.pathname === '/pdf-reader'}
          onClick={() => handleNavigation('/pdf-reader')}
          sx={{
            color: location.pathname === '/pdf-reader' ? 'primary.main' : 'text.primary',
            backgroundColor: location.pathname === '/pdf-reader' ? 'action.selected' : 'inherit',
            '&:hover': {
              backgroundColor: 'action.hover',
            },
          }}
        >
          <ListItemIcon>
            <DescriptionIcon />
          </ListItemIcon>
          <ListItemText primary="PDF Reader" />
        </ListItem>
        <ListItem
          button
          selected={location.pathname === '/pdf-table'}
          onClick={() => handleNavigation('/pdf-table')}
          sx={{
            color: location.pathname === '/pdf-table' ? 'primary.main' : 'text.primary',
            backgroundColor: location.pathname === '/pdf-table' ? 'action.selected' : 'inherit',
            '&:hover': {
              backgroundColor: 'action.hover',
            },
          }}
        >
          <ListItemIcon>
            <TableChartIcon />
          </ListItemIcon>
          <ListItemText primary="PDF Table" />
        </ListItem>
      </List>
    </StyledDrawer>
  );
};

export default SideNav;

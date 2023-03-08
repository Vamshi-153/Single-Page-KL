import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";

import About from "./components/About";


function Header(props) {
  const { sections, title } = props;

  return (    
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Typography
          component="h2"
          variant="h5"
          color="Red"
          align="left"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
        <Button className='btn' size='small'>Home</Button>
        <Router>
          <Link to = '/About' ><Button className='btn' size='small'>About</Button></Link>
          <Routes>
            <Route exact path='/About' element={<About/>}/>
          </Routes>
        </Router>
        <Button className='btn' size='small'>Contact</Button>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined"  size="small"  className='button1'  >
          Sign up
        </Button>
        <Button variant="contained" size="medium" className='button2'>
          ADIMISSIONS
        </Button>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: '15px' }}

      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
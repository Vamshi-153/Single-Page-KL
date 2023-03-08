import { Button, Toolbar, Typography } from '@mui/material'
import PropTypes from 'prop-types';
import React from 'react'
import './btn.css'
import { HashRouter as Router,Routes,Route, Link} from 'react-router-dom'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import About from './About'
import ContactForm from './ContactForm';
import SignUp from './SignUp';
import Admission from './Admission';
function Header(props) {
  const { sections, title } = props;
  return (
    <>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Router>
          <Link to = '/' ><Button className='btn'  size='small'>Home</Button></Link>
          <Link to = '/About' ><Button className='btn'  size='small'>About</Button></Link>
          <Link to = '/Admission' ><Button className='btn'  size='small'>Admission</Button></Link>
          <Link to = '/ContactForm' ><Button className='btn'  size='small'>Contact</Button></Link>
          <Routes>
            <Route exact path='/About' element={<About/>}/>
            <Route exact path='/Admission' element={<Admission/>}/>
            <Route exact path='/ContactForm' element={<ContactForm/>}/>
          </Routes>
        </Router>
        <Typography component="h2" className='btn'
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}>{title}</Typography>
          <Router>
            <Link to = '/SignUp' target='_blank'><Button className='btn' target='_blank' size='small'><ExitToAppIcon/></Button></Link>
          <Routes>
            <Route exact path='/SignUp' element={<SignUp/>}/>
          </Routes>
        </Router>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        {sections.map((section) => (
          <Button
            color="inherit"
            noWrap
            key={section.title}
            variant="body"
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
            className='btn'
          >
            {section.title}
          </Button>
        ))}
      </Toolbar>
    </>
  )
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

export default Header
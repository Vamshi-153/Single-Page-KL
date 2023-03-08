import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';

const sections = [
  // { title: 'Home', url: '#' },
  // { title: 'About KL', url: '#' },
  // { title: 'Admissions', url: '#' },
  // { title: 'Academics', url: '#' },
  // { title: 'Colleges', url: '#' },
  // { title: 'Skill Dev', url: '#' },
  // { title: 'Placements', url: '#' },
  // { title: 'R&D', url: '#' },
  // { title: 'Global Connect', url: '#' },
//  { title: 'Facilities', url: '#' },
];

const mainFeaturedPost = {
  title: 'Admissions Are Open',
  description:
    "",
  image: 'https://klh.edu.in/admissions/img/banner-1.jpg',
  imageText: 'main image description',
};

const featuredPosts = [
  {
    title: 'Research Bulletin',
    date: '',
    description:
      '2020-2021 Fulbright-Kalam Climate Fellowship.Ph.D.Synopsis Open Talk of SUNNY AGARWAL, Regd.No.163020029, Dept of CE, KL.Deemed to be University on 31.07.2021, 03.00 PM onwards.',
    image: 'https://www.kluniversity.in/img/static/research2.jpg',
    imageLabel: 'Image Text',
  },
  {
    title: 'Admissions 2023',
    date: '',
    description:
      'KLEEE-2023 Phase-II Admit CardsKLEEE-2023 Phase-I ResultsKLMAT-2023 Phase-I Admit CardsInstructions tothecandidates for Online (Take from Home) KLEEE-2022 ExaminationPh.D admission 2021-22 Provisional list of candidates for Odd Semester.Online Counselling Registration. Click HerePh.D Admissions are open throughout the year for NRIs, ForeignNationals, IndustryPeopleandGovernmentOfficials.PhD Admission Notification for 2022-23 (Even Semester)Click here to fill the P.hd Application online',
    image: 'https://www.kluniversity.in/admissions/img/mobile-banner-1.jpg',
    imageLabel: 'Image Text',
  },
];

const posts = [post1, post2, post3];

const sidebar = {
  title: 'About',
  description:
    'To impart quality higher education and to undertake research and extension with emphasis on application and innovation that cater to the emerging societal needs through all-round development of students of all sections enabling them to be globally competitive and socially responsible citizens with intrinsic values.',
  
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

const theme = createTheme();

function Blog() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="KL UNIVERSITY" sections={sections}  />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={0}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}
export default Blog

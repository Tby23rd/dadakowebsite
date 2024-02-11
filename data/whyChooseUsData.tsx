// data/whyChooseUsData.ts
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import BuildIcon from '@mui/icons-material/Build';
import WomanIcon from '@mui/icons-material/Woman'; // Assuming you have a suitable icon component named WomanIcon
import InnovationIcon from '@mui/icons-material/FiberNew';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import PartnersIcon from '@mui/icons-material/Handshake';

export const whyChooseUsData = [
  {
    title: 'Local Company',
    icon: <LocalAtmIcon/>,
    description: 'Local presence with a focus on Calgary.'
  },
  {
    title: 'Customized Solutions',
    icon: <BuildIcon/>,
    description: 'Tailored software solutions for your unique needs.'
  },
    {
      title: '100% Woman-Owned & Operated',
      icon: <WomanIcon />, // Assuming you have a suitable icon component named WomanIcon
      description: 'Exclusively run by women, specializing in supporting other female-led businesses.'
    },
  
  {
    title: 'Commitment to Innovation',
    icon: <InnovationIcon/>,
    description: 'Staying ahead with the latest technologies.'
  },
  
  {
    title: 'Exceptional Client Service',
    icon: <SupervisorAccountIcon/>,
    description: 'Clear communication and active involvement in development.'
  },
  
  {
    title: 'Sustainable Growth Partnership',
    icon: <PartnersIcon/>,
    description: 'Your partner in achieving sustainable growth.'
  }
];

import './App.css';
import ConcactIcons from './ConcactIcons';
import FileSaver from "file-saver";
import contact from "./contact.json";
import { Button, Typography } from "@mui/material";
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import LanguageIcon from '@mui/icons-material/Language';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function App() {
  const handleDownLoadCard = async (e) => {
    e.preventDefault();
    const file = new Blob(
      [
        `BEGIN:VCARD
          VERSION:3.0
          N:${contact.lastName};${contact.firstName};;;
          FN:${contact.firstName} ${contact.lastName}
          TITLE:${contact.title};
          EMAIL;type=INTERNET;type=pref:${contact.email}
          TEL;type=MAIN:${contact.work}
          TEL;type=CELL;type=VOICE;type=pref:${contact.mobile}
          ADR;type=WORK;type=pref:;;;${contact.location};;;
          END:VCARD
        `
      ],
      { type: "text/vcard;charset=utf-8" }
    );
    FileSaver.saveAs(
      file,
      `${contact.firstName}${contact.lastName}.vcf`,
      true
    );
  }
  return (
    <div className="App">
      <section className='contact-card'>
        <div className='banner'>
          <img className='profile-img' src='https://as1.ftcdn.net/v2/jpg/00/97/83/56/1000_F_97835683_bO8Eb355x4DezP3ngpiIM5x6px0ecDz4.jpg' alt='profile'></img>
        </div>
        <h2>{contact.firstName} {contact.lastName}</h2>

        <ul>
          <li><MailIcon /><a href={`mailto:${contact.email}`}><Typography>{contact.email}</Typography></a></li>
          <li><CallIcon /> <a href={`tel: ${contact.mobile}`}><Typography>{contact.mobile}</Typography></a></li>
          <li><LanguageIcon /><a href={contact.website}><Typography>{contact.website}</Typography></a></li>
          <li><LocationOnIcon /><Typography>{contact.location}</Typography></li>
          <li><ConcactIcons /></li>
        </ul>

        <Button variant="contained" onClick={handleDownLoadCard}>
          Download Card
        </Button>

      </section >
    </div >
  );
}

export default App

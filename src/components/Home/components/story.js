import SchoolIcon from "@mui/icons-material/School";
import BabyChangingStationIcon from "@mui/icons-material/BabyChangingStation";
import HouseIcon from "@mui/icons-material/House";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import CampaignIcon from "@mui/icons-material/Campaign";
import EngineeringIcon from "@mui/icons-material/Engineering";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ScreenSearchDesktopIcon from "@mui/icons-material/ScreenSearchDesktop";
import NoAccountsIcon from "@mui/icons-material/NoAccounts";
import Face3Icon from "@mui/icons-material/Face2";
import CakeIcon from "@mui/icons-material/Cake";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";

const story = [
  {
    year: "1985",
    icon: (
      <BabyChangingStationIcon sx={{ width: 30, height: 30, color: "#fff" }} />
    ),
    icon2: (
      <BabyChangingStationIcon sx={{ width: 36, height: 36, color: "#fff" }} />
    ),
    title: "Birth of a Legend",
    description: "Oluseun Onigbinde was born at Osogbo, Osun State",
  },
  {
    year: "1990",
    icon: <HouseIcon sx={{ width: 30, height: 30, color: "#fff" }} />,
    icon2: <HouseIcon sx={{ width: 36, height: 36, color: "#fff" }} />,
    title: "Migration to Ibadan",
    description:
      "The family relocated to Ibadan and lived at No 20, Aromolaran Street, Ibadan, Oyo State.",
  },
  {
    year: "1991-1994",
    icon: <LocalLibraryIcon sx={{ width: 30, height: 30, color: "#fff" }} />,
    icon2: <LocalLibraryIcon sx={{ width: 36, height: 36, color: "#fff" }} />,
    title: "Primary School Education",
    description:
      " Oluseun attended 4 primary schools in Ibadan namely; Olumide Day Nursery & Primary School, Bishop Finn Memorial School, Adesola Kings & Queens School, and finally, Queen of Apostle Primary School. He changed school frequently because of his mum's passion for quality education.",
  },
  {
    year: "1994-1996",
    icon: <SchoolIcon sx={{ width: 30, height: 30, color: "#fff" }} />,
    icon2: <SchoolIcon sx={{ width: 36, height: 36, color: "#fff" }} />,
    title: "Secodary School in Lagos",
    description:
      "Oluseun was admitted to St John Secondary School in Onipanu, Lagos.",
  },
  {
    year: "1996-2001",
    icon: <SchoolIcon sx={{ width: 30, height: 30, color: "#fff" }} />,
    icon2: <SchoolIcon sx={{ width: 36, height: 36, color: "#fff" }} />,
    title: "Secodary School in Ibadan",
    description:
      "Oluseun continued his secondary school education at Loyola College, Ibadan after the family couldn't afford a private school in Lagos.",
  },
  {
    year: "2001",
    icon: <SchoolIcon sx={{ width: 30, height: 30, color: "#fff" }} />,
    icon2: <SchoolIcon sx={{ width: 36, height: 36, color: "#fff" }} />,
    title: "University Education",
    description:
      "Oluseun gained admission to the University of Agriculture, Abeokuta (UNAAB) now Federal University of Agriculture, Abeokuta (UNAAB)University of Agriculture, Abeokuta (FUNAAB), to study Electrical and Electronics Engineering.",
  },
  {
    year: "2002-2003",
    icon: <EngineeringIcon sx={{ width: 30, height: 30, color: "#fff" }} />,
    icon2: <EngineeringIcon sx={{ width: 36, height: 36, color: "#fff" }} />,
    title: "President, COLENG",
    description:
      "Oluseun Onigbinde was elected the first President of the College of Engineering (COLENG) in UNAAB",
  },
  {
    year: "2002-2005",
    icon: <CampaignIcon sx={{ width: 30, height: 30, color: "#fff" }} />,
    icon2: <CampaignIcon sx={{ width: 36, height: 36, color: "#fff" }} />,
    title: "Coordinator, CDHR, UNAAB Chapter",
    description:
      "Oluseun Onigbinde was the Coordinator of the Committee for the Defence of Human Right (CDHR), UNAAB Chapter",
  },
  {
    year: "2006",
    icon: <CampaignIcon sx={{ width: 30, height: 30, color: "#fff" }} />,
    icon2: <CampaignIcon sx={{ width: 36, height: 36, color: "#fff" }} />,
    title: "Student Union President Election",
    description:
      "Oluseun contested for the Student Union Government Election in UNAAB but lost by 21 votes.",
  },
  {
    year: "2008-2012",
    icon: <AccountBalanceIcon sx={{ width: 30, height: 30, color: "#fff" }} />,
    icon2: <AccountBalanceIcon sx={{ width: 36, height: 36, color: "#fff" }} />,
    title: "Job at First Bank",
    description:
      "Oluseun joined the First Bank of Nigeria as an Executive Trainee. He worked as a Customer Service Officer, Marketing Officer at the branch level before he was transferred to the Strategy Department at the Head Office in Marina.",
  },
  {
    year: "2011",
    icon: (
      <ScreenSearchDesktopIcon sx={{ width: 30, height: 30, color: "#fff" }} />
    ),
    icon2: (
      <ScreenSearchDesktopIcon sx={{ width: 36, height: 36, color: "#fff" }} />
    ),
    title: "Co-founded BudgIT",
    description:
      "Oluseun co-founded BudgIT after the idea came as the 1st Runner Up in the Tech-in-Governance hackathon organized by the Co-Creation Hub, CcHub. BudgIT won $5,000 from this event that was sponsored by Indigo Trust.",
  },
  {
    year: "2014",
    icon: <NoAccountsIcon sx={{ width: 30, height: 30, color: "#fff" }} />,
    icon2: <NoAccountsIcon sx={{ width: 36, height: 36, color: "#fff" }} />,
    title: "Lost his father",
    description: "Oluseun lost his father, Mr Olatunbosun Iyiola Onigbinde.",
  },
  {
    year: "2015",
    icon: <Face3Icon sx={{ width: 30, height: 30, color: "#fff" }} />,
    icon2: <Face3Icon sx={{ width: 36, height: 36, color: "#fff" }} />,
    title: "Got Married",
    description:
      "Oluseun got married to Oluwaseun Agbelusi in Akure, Ondo State.",
  },
  {
    year: "2018",
    icon: <SchoolIcon sx={{ width: 30, height: 30, color: "#fff" }} />,
    icon2: <SchoolIcon sx={{ width: 36, height: 36, color: "#fff" }} />,
    title: "Technology Lab at Loyola College",
    description:
      "Oluseun renovated the old Intro-Tech Lab into a Technology Lab in honour of his late father. The Lab was equipped with computers for students.",
  },
  {
    year: "2018-2019",
    icon: <SchoolIcon sx={{ width: 30, height: 30, color: "#fff" }} />,
    icon2: <SchoolIcon sx={{ width: 36, height: 36, color: "#fff" }} />,
    title: "Obama Foundation Scholars' Program",
    description:
      "Oluseun got admitted to Columbia University through the maiden edition of Obama Foundation Scholars' Program.",
  },
  {
    year: "2019",
    icon: <RecordVoiceOverIcon sx={{ width: 30, height: 30, color: "#fff" }} />,
    icon2: (
      <RecordVoiceOverIcon sx={{ width: 36, height: 36, color: "#fff" }} />
    ),
    title: "Technical Adviser to the Minister",
    description:
      "Oluseun was appointed as the Technical Adviser to the Minister of State for Finance but resigned after 2 weeks due to political pressure.",
  },
  {
    year: "2024",
    icon: <SchoolIcon sx={{ width: 30, height: 30, color: "#fff" }} />,
    icon2: <SchoolIcon sx={{ width: 36, height: 36, color: "#fff" }} />,
    title: "Masters at George Washington University",
    description:
      "Oluseun obtained Masters in International Policy and Practice from the George Washington University, The Elliot School of International Affairs.",
  },
  {
    year: "2024",
    icon: <LocalLibraryIcon sx={{ width: 30, height: 30, color: "#fff" }} />,
    icon2: <LocalLibraryIcon sx={{ width: 36, height: 36, color: "#fff" }} />,
    title: "The Oluseun Onigbinde Resource Centre",
    description:
      "Oluseun launched the Oluseun Onigbinde Resource Centre in Ogbomoso which is dedicated to fostering postive change and empowerment within communities across Oyo State.",
  },
  {
    year: "2025",
    icon: <CakeIcon sx={{ width: 30, height: 30, color: "#fff" }} />,
    icon2: <CakeIcon sx={{ width: 36, height: 36, color: "#fff" }} />,
    title: "A Toast to the Fabulous Forty",
    description: "Celebrating Oluseun Onigbinde as he turns forty.",
  },
];

export default story;

import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'
import Apps from '@material-ui/icons/Apps'
import SchoolIcon from '@material-ui/icons/School'
import SettingsIcon from '@material-ui/icons/Settings'

const state = {
  header: {
    mainInfo: {
      title: 'Łukasz Konieczny',
      subheader: 'PHP Backend Developer',
    },
    info: [
      {
        p:
          'Junior PHP Backend Devloperem z podstawową znajomością frontend. Programuję w fraemworku Symfony 3.4 i 4.4. Z fraemworków frontend posiadam podstawową znajomość React.',
      },
      {
        p:
          'W dotychczasowej karierze zawodowej zawsze starałem się wykorzystać technologie do poprawy wydajności pracy. Początkowo było to Excel z VBA później PHP i MySQL. Jako, że programowanie przynosi mi coraz więcej satysfakcji postanowiłem pójść na profesjonalny kurs, wybrałem Backend Developer PHP z rozszerzeniem o JavaScript: React + Redux. Tworząc aplikację do zarządzania fermą reprodukcyjną początkowo myślałem o usprawnieniu swojej pracy. Sukcesywnie rozbudowując jej funkcjonalności sprawiłem, że w chwili obecnej nie wyobrażamy sobie bez niej pracy na fermie.',
      },
    ],
    tooltip: [
      {
        text: '+48 669 905 464',
        icon: <PhoneIcon style={{ fill: 'orange' }} />,
      },
      {
        text: 'lookasziebice@gmail.com',
        icon: <EmailIcon style={{ fill: 'orange' }} />,
      },
    ],
    technologies: [
      { experience: '7 years', tech: 'PHP' },
      { experience: '7 years', tech: 'MySQL' },
      { experience: '2 years', tech: 'Symfony' },
      { experience: '2 years', tech: 'JavaScript' },
      { experience: '2 years', tech: 'JQuery' },
      { experience: '1 year', tech: 'Scrum' },
      { experience: '1 year', tech: 'React' },
    ],
    social: {
      linkedin: 'https://www.linkedin.com/in/%C5%82ukasz-konieczny-48a33aa6/',
      github: 'https://github.com/LookasNorman',
    },
  },

  main: {
    cards: [
      {
        cardIcon: <Apps />,
        header: 'Portfolio',
        accordion: [
          {
            header: 'System zarządzania utrzymania ruchu - backend',
            text:
              'Aplikacja do zarządzania zadaniami w dziale utrzymania ruchu. Podział na typy zadań, lokalizacje, maszyny. Karty przeglądów i napraw maszyn. Zamówienia i reklamacje.',
            chip: ['Symfony 4.4', 'MySQL', 'ApiPlatform'],
            gitLink: 'https://github.com/LookasNorman/hatcheryTodoSymfony',
          },
          {
            header: 'System zarządzania fermą - backend',
            text:
              'Aplikacja służąca do gromadzenia parametrów chowu stad kur reprodukcyjnych. Endpointy dla aplikacji tworzonej w React. Upgrade poprzedniej aplikacji do REST Api z wykorzystaniem Symfony i React',
            chip: ['Symfony 4.4', 'MySQL', 'ApiPlatform'],
            gitLink: 'https://github.com/LookasNorman/FarmManagementRestApi',
          },
          {
            header: 'System zarządzania fermą',
            text:
              'Aplikacja służąca do gromadzenia parametrów chowu stad kur reprodukcyjnych. Prezentuje bieżące i archiwalne wyniki w postaci wykresów oraz raportów.',
            chip: ['PHP', 'MySQL'],
          },
          {
            header: 'Interaktywna mapa',
            text:
              'Stworzenie interaktywnej mapy dla fundacji PEPY Empowering Youth z Kambodży. Projekt wykonywany w ramach fundacji A Bit Of Help.',
            chip: ['HTML', 'SVG', 'JavaScript', 'CSS'],
            siteLink: 'https://lookaskonieczny.pl/cambodia2',
          },
          {
            header: 'Donations',
            text: 'Aplikacja służąca do dzielenia się niepotrzebnymi rzeczami. Projekt w ramach kursu Coders Lab.',
            chip: ['PHP', 'MySQL', 'Symfony', 'JavaScript'],
            gitLink: 'https://github.com/LookasNorman/Donation/tree/develop',
          },
          {
            header: 'Jedzonko',
            text: 'Aplikacja do planowania posiłków, Projekt w ramach kursu Coders Lab.',
            chip: ['PHP', 'MySQL', 'Symfony', 'Scrum'],
            gitLink: 'https://github.com/LookasNorman/Jedzonko/tree/develop',
          },
          {
            header: 'Paczkolab',
            text: 'Aplikacja do nadawania przesyłek. Projekt w ramach kursu Coders Lab.',
            chip: ['PHP', 'MySQL'],
            gitLink: 'https://github.com/LookasNorman/paczkolab/tree/lukasz',
          },
          {
            header: 'Bookstore',
            text: 'Aplikacja do ewidencji książek. Projekt w ramach kursu Coders Lab.',
            chip: ['JavaScript'],
            gitLink: 'https://github.com/LookasNorman/Bookstore',
          },
        ],
      },
      {
        cardIcon: <SchoolIcon />,
        header: 'Szkolenia',
        accordion: [
          {
            header: 'Coders Lab JavaScript: React + Redux',
            text: 'nr dyplomu 4639/2019',
            chip: ['React', 'Redux'],
          },
          {
            header: 'Coders Lab Backend Developer PHP',
            text: 'nr dyplomu 4120/2019',
            chip: ['PHP', 'MySQL', 'Symfony', 'JavaScript', 'Scrum'],
          },
          {
            header: 'Akademia ekonomiczna - Kraków / Wrocław',
            text: 'Informatyka i ekonometria. Zarządzanie informacją i wiedzą. Studia przerwane na 5 roku.',
            chip: false,
          },
        ],
      },
      {
        cardIcon: <SettingsIcon />,
        header: 'Doświadczenie',
        technologies: [
          { experience: '7 years', tech: 'PHP' },
          { experience: '7 years', tech: 'MySQL' },
          { experience: '2 years', tech: 'Symfony' },
          { experience: '2 years', tech: 'JavaScript' },
          { experience: '2 years', tech: 'JQuery' },
          { experience: '1 year', tech: 'Scrum' },
          { experience: '1 year', tech: 'React' },
        ],
      },
    ],
  },
}

export default state

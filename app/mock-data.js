const messages = [
  {
    firstName: 'Forrest',
    lastName: 'Gump',
    dateOfBirth: '1951-06-06',
    nationality: 'American',
    passportNumber: 'FG123',
    issueDate: '1975-09-15',
    expiryDate: '2030-09-15',
    phone: '98765432101',
    email: 'forrest.gump@bubbagump.com'
  },
  {
    firstName: 'Scarlett',
    lastName: "O'Hara",
    dateOfBirth: '1844-07-04',
    nationality: 'American',
    passportNumber: 'SO456',
    issueDate: '1862-03-20',
    expiryDate: '1922-03-20',
    phone: '87654321098',
    email: 'scarlett.ohara@tara.com'
  },
  {
    firstName: 'Hannibal',
    lastName: 'Lecter',
    dateOfBirth: '1933-01-20',
    nationality: 'Lithuanian',
    passportNumber: 'HL789',
    issueDate: '1958-11-02',
    expiryDate: '2033-11-02',
    phone: '23456789012',
    email: 'h.lecter@silenceofthelambs.com'
  },
  {
    firstName: 'Indiana',
    lastName: 'Jones',
    dateOfBirth: '1899-07-01',
    nationality: 'American',
    passportNumber: 'IND123',
    issueDate: '1925-12-10',
    expiryDate: '1980-12-10',
    phone: '56789012345',
    email: 'i.jones@archaeologist.org'
  },
  {
    firstName: 'Elizabeth',
    lastName: 'Swann',
    dateOfBirth: '1729-03-12',
    nationality: 'British',
    passportNumber: 'ES987',
    issueDate: '1745-11-03',
    expiryDate: '1795-11-03',
    phone: '10987654321',
    email: 'e.swann@portroyale.co.uk'
  },
  {
    firstName: 'Jack',
    lastName: 'Sparrow',
    dateOfBirth: '1690-05-01',
    nationality: 'British',
    passportNumber: 'JS456',
    issueDate: '1715-03-10',
    expiryDate: '1765-03-10',
    phone: '54321098765',
    email: 'jack.sparrow@blackpearl.com'
  },
  {
    firstName: 'Ebenezer',
    lastName: 'Scrooge',
    dateOfBirth: '1800-12-21',
    nationality: 'British',
    passportNumber: 'ES789',
    issueDate: '1820-08-01',
    expiryDate: '1870-08-01',
    phone: '98701234567',
    email: 'e.scrooge@bahhumbug.co.uk'
  },
  {
    firstName: 'Atticus',
    lastName: 'Finch',
    dateOfBirth: '1888-06-18',
    nationality: 'American',
    passportNumber: 'AF567',
    issueDate: '1915-08-30',
    expiryDate: '1965-08-30',
    phone: '87650123456',
    email: 'a.finch@maycomb.us'
  },
  {
    firstName: 'Holden',
    lastName: 'Caulfield',
    dateOfBirth: '1930-07-16',
    nationality: 'American',
    passportNumber: 'HC123',
    issueDate: '1950-09-03',
    expiryDate: '2000-09-03',
    phone: '98765012345',
    email: 'h.caulfield@catcher.com'
  },
  {
    firstName: 'Tyler',
    lastName: 'Durden',
    dateOfBirth: '1962-11-01',
    nationality: 'American',
    passportNumber: 'TD456',
    issueDate: '1985-04-22',
    expiryDate: '2045-04-22',
    phone: '12345098765',
    email: 't.durden@fightclub.com'
  },
  {
    firstName: 'Neo',
    lastName: 'Anderson',
    dateOfBirth: '1971-09-13',
    nationality: 'American',
    passportNumber: 'NEO123',
    issueDate: '1999-03-31',
    expiryDate: '2099-03-31',
    phone: '56789012345',
    email: 'neo@matrix.com'
  },
  {
    firstName: 'Arya',
    lastName: 'Stark',
    dateOfBirth: '289 AL',
    nationality: 'Westerosi',
    passportNumber: 'ARYA456',
    issueDate: '301 AL',
    expiryDate: '330 AL',
    phone: '32109876543',
    email: 'arya.stark@winterfell.org'
  },
  {
    firstName: 'Tyrion',
    lastName: 'Lannister',
    dateOfBirth: '273 AL',
    nationality: 'Westerosi',
    passportNumber: 'TYRION789',
    issueDate: '285 AL',
    expiryDate: '335 AL',
    phone: '45678901234',
    email: 'tyrion.lannister@casterlyrock.com'
  },
  {
    firstName: 'Geralt',
    lastName: 'of Rivia',
    dateOfBirth: 'Unknown',
    nationality: 'Witcher',
    passportNumber: 'GERALT321',
    issueDate: '1202',
    expiryDate: '1302',
    phone: '65432109876',
    email: 'geralt@witcher.net'
  },
  {
    firstName: 'Ender',
    lastName: 'Wiggin',
    dateOfBirth: '1984-11-11',
    nationality: 'American',
    passportNumber: 'ENDER678',
    issueDate: '1998-05-05',
    expiryDate: '2098-05-05',
    phone: '89012345678',
    email: 'ender@battle.net'
  },
  {
    firstName: 'Bilbo',
    lastName: 'Baggins',
    dateOfBirth: '2890',
    nationality: 'Hobbit',
    passportNumber: 'BILBO456',
    issueDate: '2918',
    expiryDate: '3018',
    phone: '23456789012',
    email: 'bilbo@bagend.com'
  },
  {
    firstName: 'Frodo',
    lastName: 'Baggins',
    dateOfBirth: '2968',
    nationality: 'Hobbit',
    passportNumber: 'FRODO789',
    issueDate: '2980',
    expiryDate: '3080',
    phone: '89012345670',
    email: 'frodo@bagend.com'
  },
  {
    firstName: 'Alice',
    lastName: 'Wonderland',
    dateOfBirth: '1990-04-01',
    nationality: 'British',
    passportNumber: 'AW456',
    issueDate: '2010-08-20',
    expiryDate: '2030-08-20',
    phone: '87654321098',
    email: 'alice.wonderland@example.com'
  },
  {
    firstName: 'Jon',
    lastName: 'Snow',
    dateOfBirth: '283 AL',
    nationality: 'Westerosi',
    passportNumber: 'JON321',
    issueDate: '300 AL',
    expiryDate: '350 AL',
    phone: '34567890123',
    email: 'jon.snow@castleblack.org'
  },
  {
    firstName: 'Gandalf',
    lastName: 'the Grey',
    dateOfBirth: 'Unknown',
    nationality: 'Maia',
    passportNumber: 'GANDALF567',
    issueDate: 'Unknown',
    expiryDate: 'Unknown',
    phone: '87654321098',
    email: 'gandalf@middleearth.com'
  }
]

module.exports = messages

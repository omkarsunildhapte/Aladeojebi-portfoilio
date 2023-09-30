import { Injectable } from '@angular/core';
interface CardItem {
  imageUrl: string;
  text: string;
}

interface CardData {
  [category: string]: CardItem[];
}
@Injectable({
  providedIn: 'root'
})
export class DataService {
  data = {
    name: "Aladeojebi opeyemi",
    jobtitle: "Product Designer",
    phoneNumber: "+2348130658183",
    gmail: 'samuelfreitas.ao@gmail.com',
    location: 'Luanda, Angola',
    profileImage: "../../assets/images/image.png",
    description: "Formado em engenharia informática, com larga de experiência em desenvolvimento web e mobile, sou dedicado em conhecer melhor as tecnologias a fim de dar respostas e soluções que geram excelentes resultados nos negócios e transformar a vida das pessoas."
  }
  socialMedia = [{ logo: "./../../assets/logo/linkedin.svg", link: "https://www.linkedin.com/in/aladeojebi-opeyemi/" },
  { logo: "./../../assets/logo/facebook.svg", link: "https://Facebook.com/aladeojebi.opeyemi" },
  { logo: "./../../assets/logo/whatsapp.svg", link: "https://twitter.com/micorpy" },
  { logo: "./../../assets/logo/github.svg", link: "https://github.com/Micorpy" }
  ]
  cardData: CardData = {
    design: [
      {
        imageUrl: './../assets/projects/PENAPP.jpg',
        text: 'PENAPP'
      },
      {
        imageUrl: './../assets/projects/MEAVANA CHROME EXTENSION.png',
        text: 'MEAVANA CHROME EXTENSION'
      },
      {
        imageUrl: './../assets/projects/KRYPTON.png',
        text: 'KRYPTON'
      },
      {
        imageUrl: './../assets/projects/HealthTap.jpg',
        text: 'HealthTap'
      },
      {
        imageUrl: './../assets/projects/HEALTHBLOCS.jpg',
        text: 'HEALTHBLOCS'
      },
      {
        imageUrl: './../assets/projects/Enkiconnect.jpg',
        text: 'Enkiconnect'
      },
      {
        imageUrl: './../assets/projects/Baddhia.jpg',
        text: 'Baddhia'
      }
    ]
  };
  education = [
    {
      educationName: 'Bachelor of Science in Fisheries and Aquaculture Technology School',
      statingDate: 'Ago 2013',
      endingDate: 'Ago 2018',
      edcationschool: 'Federal University of Technology Akure'
    }]
  experiance = [
    {
      experianceName: 'Designer de produto',
      statingDate: 'Janeiro de 2023',
      endingDate: 'Presente',
      experianceCompany: 'Enkiconnect',
      companylocation: 'Nova Gales do Sul, Austrália'
    },
    {
      experianceName: 'Designer de produto',
      statingDate: 'Maio de 2022',
      endingDate: 'Dezembro de 2022',
      experianceCompany: 'Múltiplos empreendimentos',
      companylocation: 'São Francisco, Califórnia, Estados Unidos'
    },
    {
      experianceName: 'Designer de produto',
      statingDate: 'Novembro de 2021',
      endingDate: 'Abril de 2022',
      experianceCompany: 'BrilloConnetz Limited',
      companylocation: 'Lagos, Nigéria'
    },
    {
      experianceName: 'Designer de experiência do usuário',
      statingDate: 'Maio de 2019',
      endingDate: 'Junho de 2020',
      experianceCompany: 'Sede da Aitechma',
      companylocation: 'Lagos, Nigéria'
    },
    {
      experianceName: 'Designer de experiência do usuário',
      statingDate: 'Agosto de 2018',
      endingDate: 'Maio de 2019',
      experianceCompany: 'HNG',
      companylocation: 'Lagos, Nigéria'
    }]
  skillsArray = [
    {
      header: 'Frontend Frameworks', skills: [
        { name: 'Html', rating: 4 },
        { name: 'Css', rating: 4 },
        { name: 'Javascript', rating: 4 }
      ]
    }, {
      header: 'Design', skills: [
        { name: 'Figma', rating: 4 },
        { name: 'Photoshop', rating: 4 }
      ]
    }
  ];
  reviews = [
    {
      profileimg: './../../assets/images/ShakrudeenRaji.jpeg',
      profilename: 'Shakrudeen Raji',
      position: 'UI/UX Designer',
      describe: "Aladeojebi Opeyemi is an excellent designer with a great eye for detail and a passion for creating user-friendly interfaces. He is also a great communicator and is able to work well with both developers and stakeholders. Opeyemi is an asset to any team and I highly recommend him for any UI/UX design project."
    },
    {
      profileimg: './../../assets/images/LeeEdward.jpeg',
      profilename: 'Lee Edward',
      position: 'ICT Lead',
      describe: 'Opeyemi is a talented and experienced UI/UX designer.He have a great understanding of user experience and design principles and are able to create beautiful, functional designs.I highly recommend him for any UI/UX design project'
    },
    {
      profileimg: './../../assets/images/TimothyBanjoko.jpeg',
      profilename: 'Timothy Banjoko',
      position: 'Product Designer',
      describe: 'I strongly suggest Aladeojebi Opeyemi as a UI/UX Designer due to his exceptional attention to detail and in-depth understanding of user experience. He has a successful history of creating captivating, user-friendly, and visually stunning user interfaces. In addition, he demonstrates excellent collaboration and communication skills, ensuring that everyone is aligned throughout the design process.'
    }
  ]
  constructor() { }
  getData() {
    return this.data
  }
  getSocialMedia() {
    return this.socialMedia
  }
  getProjectData() {
    return this.cardData
  }
  getEdcationsData() {
    return this.education
  }
  getExperiencesData() {
    return this.experiance
  }
  getSkillsData() {
    return this.skillsArray
  }
  getReviesData() {
    return this.reviews
  }
}

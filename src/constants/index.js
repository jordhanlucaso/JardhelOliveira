import {
  mobile,
  backend,
  creator,
  web,
  castle,
  sword,
  foo,
  unity,
  unreal, 
  blender,
  photoshop,
  substance,
  enanddes,
  ricardo,
  matilde,
  jordhan
} from '../assets'
  
export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'experience',
    title: 'Work Experience',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
]
  
const services = [
  {
    title: 'Modeling',
    icon: mobile,
  },
  {
    title: 'Sculping',
    icon: backend,
  },
  {
    title: 'Character Design',
    icon: web,
  },
  {
    title: 'Scene Creation',
    icon: creator,
  },
]
  
const technologies = [
  {
    name: 'Unity',
    icon: unity,
  },
  {
    name: 'Unreal',
    icon: unreal
  },
  {
    name: 'Blender',
    icon: blender,
  },
  {
    name: 'Photoshop',
    icon: photoshop,
  },
  {
    name: 'SubstancePainter',
    icon: substance,
  }
]
  
const experiences = [
  {
    title: '3D Artist',
    company_name: 'Ennandes',
    icon: enanddes,
    iconBg: '#383E56',
    date: 'March 2023 - ',
    points: [
      'I model 3D objects for this 3D printing business as a freelancer.',
      'Collaborating with cross-functional teams including designers and product managers to create high-quality products.',
      'Focusing on developing a quality product following the client expectations.',
      'Participating in model reviews and providing constructive feedback between coworkers.',
    ],
  }
]
  
const testimonials = [
  {
    testimonial:
        'Jardhel is an excelent worker, he still has things to improve to make his art works trully proffesional but you can tell he will get better in no time because he is always working on new things and finding new ways to enhance what he creates. In the end he is already amazing at what he does and will be excelent in no time, trully admirable.',
    name: 'Ricardo Giranda',
    designation: '3D Animator',
    image: ricardo,
  },
  {
    testimonial:
        'Jardhel has become our trusted designer, communication with him is fluid and we always get professional results in record time. Just what we are looking for our 3D printing projects. We will certainly continue to count on him.',
    name: 'Matilde Verdugo',
    designation: 'CEO',
    company: 'of Enanddes',
    image: matilde
  },
  {
    testimonial:
        'Jardhel skills has develop quite fast lately and I was impress with his last projects, his 3D models was perfectly adaptable and optimized for web design, I am pleased with the results. His atitude has proved to be an valuable asset in our last project together. It was wonderful working with him.',
    name: 'Jordhan Oliveira',
    designation: 'Web Developer',
    image: jordhan,
  },
]
  
const projects = [
  {
    name: 'Chinese Temple',
    description:
        'Temple based on asian culture.',
    tags: [
      {
        name: 'Blender',
        color: 'blue-text-gradient',
      },
      {
        name: 'QuixelMixer',
        color: 'green-text-gradient',
      }
    ],
    image: castle,
    source_code_link: 'https://www.artstation.com/artwork/LR4GvA',
  },
  {
    name: 'Foo Dog',
    description:
        'Model of a guardian chinese dog',
    tags: [
      {
        name: 'Blender',
        color: 'blue-text-gradient',
      },
      {
        name: 'SubstancePainter',
        color: 'green-text-gradient',
      }
    ],
    image: foo,
    source_code_link: 'https://www.artstation.com/artwork/1xNQGX',
  },
  {
    name: 'Fantasy demonic blande',
    description:
        '3D model of a Demonic Blade with Eye',
    tags: [
      {
        name: 'Blender',
        color: 'blue-text-gradient',
      }
    ],
    image: sword,
    source_code_link: 'https://www.artstation.com/artwork/lDGqYk',
  },
]
  
export { services, technologies, experiences, testimonials, projects }
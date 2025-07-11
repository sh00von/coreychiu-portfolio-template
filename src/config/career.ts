
// career
export type CareerItemType = {
    company: string
    title: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
  
  
  export const careerList: Array<CareerItemType> = [
    {
      company: 'CUET Cyber Security Club',
      title: 'President',
      logo: 'cyber',
      start: '2025',
      end: 'Present'
    },
    {
      company: 'Nogorful',
      title: 'IT Director',
      logo: 'it',
      start: '2024',
      end: 'Present'
    },
    {
      company: 'ONGKO',
      title: 'Founder & Former President',
      logo: 'ngo',
      start: '2019',
      end: '2020'
    }
  ]

// education 
export type EducationItemType = {
    school: string
    major: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
  
  
  export const educationList: Array<EducationItemType> = [
    {
      school: 'Chittagong University of Engineering & Technology (CUET)',
      major: 'B.Sc. Engineering in Water Resources Engineering',
      logo: 'college',
      start: '2023',
      end: 'Present'
    },
    {
      school: 'Chittagong College',
      major: 'Higher Secondary Certificate',
      logo: 'college',
      start: '2019',
      end: '2021'
    },
    {
      school: 'Chittagong Cantonment Public School & College',
      major: 'Secondary School Certificate',
      logo: 'school',
      start: '2007',
      end: '2019'
    }
  ]
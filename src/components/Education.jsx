import React from 'react'

import './styles/Experience.css'

import ymsImg from '../assets/yms.png'
import maitImg from '../assets/mait.png'

const institutions = [
  {
    id: 1,
    institutionName: 'Yuvashakti Model School',
    institutionWebsiteUrl: 'https://ymsrohini.com/',
    institutionLogo: ymsImg,
    Degree: 'Class X',
    Passed: '2017',
    Marks: 'CGPA : 10.00',
    Align: 'left'
  },
  {
    id: 2,
    institutionName: 'Yuvashakti Model School',
    institutionWebsiteUrl: 'https://ymsrohini.com/',
    institutionLogo: ymsImg,
    Degree: 'Class XII',
    Passed: '2019',
    Marks: 'Percentage : 88',
    Align: 'right'
  },
  {
    id: 3,
    institutionName: 'Maharaja Agrasen Institute of Technology',
    institutionWebsiteUrl: 'https://mait.ac.in/',
    institutionLogo: maitImg,
    Degree: 'Bachelor of Technology',
    Passed: '2023',
    Marks: 'CGPA :  8.72',
    Align: 'left'
  }
]
const Education = () => {
  return (
    <div
      id='education'
      className='education py-4'
      style={
        {
          backgroundColor: '#59C1BD'
        }
      }
    >
      <h2 style={{ color: '#fff' }}>Education</h2>
      <div className="container py-5">
        <div className="main-white-timeline-4 text-white">
          {
            institutions.map((institution) => {
              return (
                <div
                  className={`white-timeline-4 ${institution.Align}-4`}
                  key={institution.id}
                  style={
                    {
                      color: '#82AAE3'
                    }
                  }
                >
                  <div className="card card-white gradient-custom">
                    <div className="card-body p-4">
                      <h3 className="large text-white-100 mb-4">{institution.Passed}</h3>
                      <a
                        href={institution.institutionWebsiteUrl}
                        target='_blank'
                        rel='noreferrer'
                        style={{ color: '#82AAE3', textDecoration: 'none' }}
                      >
                        <img src={institution.institutionLogo} height='80px' width='80px' className='institution-logo' alt="img here" />
                        <h6>{institution.institutionName}</h6>
                      </a>
                      <p>
                        {institution.Degree}
                      </p>
                      <h5 className='marks'>{institution.Marks}</h5>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Education
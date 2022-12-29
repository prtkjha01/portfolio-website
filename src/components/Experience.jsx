import React from 'react'

import './styles/Experience.css'
import lokalImg from '../assets/lokal.png'
import prodoImg from '../assets/prodo.png'

const companies = [
  {
    id: 1,
    companyName: 'Lokal Entrepreneurs Empowerment Pvt. Ltd.',
    companyLogo: lokalImg,
    location: 'Okhla, Delhi',
    companyWebsiteUrl: 'https://www.localee.co.in/',
    Role: 'SDE Intern',
    Started: 'October \'22',
    Align: 'left'
  },
  {
    id: 2,
    companyName: 'Prodo',
    companyLogo: prodoImg,
    location: 'Gurugram, Haryana',
    companyWebsiteUrl: 'https://prodo.in/',
    Role: 'Fullstack Developer Intern',
    Started: 'December \'22',
    Align: 'right'
  }
]
const Experience = () => {
  return (
    <div
      id='experience'
      className="experience"
    >
      <h2 style={{ color: '#0D4C92' }}>Experience</h2>
      <div className="container py-5">
        <div className="main-timeline-4 text-white">
          {
            companies.map((company) => {
              return (
                <div className={`timeline-4 ${company.Align}-4`} key={company.id}>
                  <div className="card card-grey gradient-custom">
                    <div className="card-body p-4">
                      <p className="large text-white-100 mb-4">{company.Started}</p>

                      <a
                        href={company.companyWebsiteUrl}
                        target='_blank'
                        rel='noreferrer'
                        style={{ color: '#fff', textDecoration: 'none' }}
                      >
                        <img src={company.companyLogo} height='70px' width='70px' className='company-logo' alt="img here" />
                        <h6>{company.companyName}</h6>
                        <p>{company.location}</p>
                      </a>
                      <p>
                        {company.Role.toUpperCase()}
                      </p>
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

export default Experience

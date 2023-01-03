import React from 'react'
import './styles/Projects.css'

import newsFirstImg from '../assets/newsFirst.png'
import simonImg from '../assets/simon.png'
import fakeflixImg from '../assets/fakeflix.png'
import shreadNationImg from '../assets/shreadNation.png'

const projects = [
  {
    id: 1,
    projectName: 'NewsFirst',
    projectIcon: newsFirstImg,
    projectDescription: '',
    projectGithubRepo: 'https://github.com/prtkjha01/newsapp',
    projectUrl: 'https://www.youtube.com/watch?v=VLtuqkbu1RU',
  },
  {
    id: 2,
    projectName: 'Simon Game',
    projectIcon: simonImg,
    projectDescription: '',
    projectGithubRepo: 'https://github.com/prtkjha01/Simon-Game',
    projectUrl: 'https://prtkjha01.github.io/Simon-Game/',
  },
  {
    id: 3,
    projectName: 'Movies App',
    projectIcon: fakeflixImg,
    projectDescription: '',
    projectGithubRepo: 'https://github.com/prtkjha01/movie-app',
    projectUrl: 'https://statuesque-beignet-36dda8.netlify.app/',
  },
  {
    id: 4,
    projectName: 'Shread Nation',
    projectIcon: shreadNationImg,
    projectDescription: '',
    projectGithubRepo: 'https://github.com/prtkjha01/Gym-Website',
    projectUrl: 'https://prtkjha01.github.io/Gym-Website/',
  }
]
const Projects = () => {
  return (
    <div
      id='projects'
      className='projects'
    >
      <div className="container p-5">
        <div className="row">
          {
            projects.map((project) => {
              return (
                <div
                  className="col-lg-4 col-sm-12 col-12"
                  key={project.id}
                >
                  <div
                    className="card project-card mb-3 r"
                    style={
                      {
                        backgroundColor: '#86C8BC',

                      }
                    }
                  >
                    <div className="d-flex justify-content-center pt-2">
                      <img
                        height='100px'

                        style={
                          {
                            // display: 'flex',
                            // alignContent: 'center',
                            borderRadius: '100%',
                            width: '100px'
                          }
                        }
                        src={project.projectIcon}
                        className="card-img-top"
                        alt="This should've been project icon"
                      />
                    </div>


                    <div className="card-body">
                      <h5 className="card-title" style={{ color: '#fff' }}>{project.projectName}</h5>
                      <p className="card-text">{project.projectDescription}</p>
                      <div className="row">
                        <a
                          className='col-lg-6 col-6 nav-link py-0'
                          href={project.projectGithubRepo}
                          target='_blank'
                          rel='noreferrer'
                          style={
                            {
                              textDecoration: 'none'
                            }
                          }
                        >
                          <p className="card-text">
                            <small className="text-muted">
                              View Code &lt;/&gt;
                            </small>
                          </p>
                        </a>
                        <a
                          className={`col-lg-6 col-6 nav-link py-0 ${(project.projectUrl.length !== 0) ? '' : 'disabled'}`}
                          href={project.projectUrl}
                          target='_blank'
                          rel='noreferrer'
                          style={
                            {
                              textDecoration: 'none'
                            }
                          }
                        >
                          <p className="card-text">
                            <small className="text-muted">
                              Go to Project
                            </small>
                          </p>
                        </a>
                      </div>

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

export default Projects
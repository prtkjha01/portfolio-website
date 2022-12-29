import React from 'react'

/***********ASSETS********************/
import reactImg from '../assets/react.png'
import nodeImg from '../assets/node.png'
import vueImg from '../assets/vue.png'
import flutterImg from '../assets/flutter.png'
import mySqlImg from '../assets/mySql.png'
import mongoDbImg from '../assets/mongoDb.png'
import cppImg from '../assets/cpp.png'
import jsImg from '../assets/js.png'

import './styles/Skills.css'
const skillItems = [
  {
    id: 1,
    name: 'ReactJs',
    ImageUrl: reactImg
  },
  {
    id: 2,
    name: 'NodeJs',
    ImageUrl: nodeImg
  },
  {
    id: 3,
    name: 'VueJs',
    ImageUrl: vueImg
  },
  {
    id: 4,
    name: 'Flutter',
    ImageUrl: flutterImg
  },
  {
    id: 5,
    name: 'MySQL',
    ImageUrl: mySqlImg
  },
  {
    id: 6,
    name: 'Mongo DB',
    ImageUrl: mongoDbImg
  },
  {
    id: 7,
    name: 'C++',
    ImageUrl: cppImg
  },
  {
    id: 8,
    name: 'Javascript',
    ImageUrl: jsImg
  }
]
const Skills = () => {
  return (
    <div
      id='skills'
      className='skills-container my-5 px-5'
      style={
        {
          padding: '50px',
          color: '#FFF',
          backgroundColor: '#A0E4CB',
        }
      }
    >
      <p>
        I am a <span style={{ color: '#F7FF93' }}>Pro</span>grammer, skilled in various cool technologies, including the one which
        i've used to build this website (reactjs).
      </p>
      <h6 >Some of my skills are :</h6>
      <div className="container">
        <div className="row">
          {
            skillItems.map((skillItem) => {
              return (
                <div
                  className="skillItem col-lg-3 col-4 p-1"
                  key={skillItem.id}
                  style={{ borderRadius: '1rem' }}
                >
                  <div
                    className='skillItem-inner'
                    style={{ backgroundColor: '#227C70', borderRadius: '1rem' }}
                  >
                    <img src={skillItem.ImageUrl} height='50px' width='50px' alt="img here" />
                    <p className='mb-0'>{skillItem.name}</p>
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

export default Skills
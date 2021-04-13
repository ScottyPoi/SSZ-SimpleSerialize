import React from 'react'
import * as ReactBootStrap from 'react-bootstrap';
import Scrollspy from 'react-scrollspy';
import styles from './TOCscroll.module.scss'
export default function TOCscroll(topics, topicToLevel) {
    return (
      <div >
      <div className={`nav  flex-column ${styles.container}`} id='toc'>
          <div className='row'>On This Page</div>
          <div className='row'>
            <div className={`d-flex flex-column navbar-nav-scroll ${styles.nonavbar}`} style={{scrollbarWidth: 0}}>
          <Scrollspy items={ topics } currentClassName={styles.iscurrent} aria-current="true" offset={-150}>
            { topics.map((topic) => { 
                let level = topicToLevel[topic] === "Scrollspy1"
                            ? styles.Scrollspy1
                            : topicToLevel[topic] === "Scrollspy2"
                            ? styles.Scrollspy2
                            : styles.Scrollspy3
                return (
                  <ReactBootStrap.Nav.Link key={topic} className={level} href={`#${topic}`}>
                    {`${topic}`}
                  </ReactBootStrap.Nav.Link>
                )
            })
            }
          </Scrollspy>
          </div>
          </div>
        </div>
        </div>
    )
};





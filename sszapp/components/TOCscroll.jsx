import React from 'react'
import * as ReactBootStrap from 'react-bootstrap';
import Scrollspy from 'react-scrollspy';
import styles from './TOCscroll.module.css'
export default function TOCscroll(topics, topicToLevel) {
    return (
        <ReactBootStrap.Navbar collapseOnSelect expand='lg' className={styles.container} id="toc" >
          <ReactBootStrap.Navbar.Toggle aria-controls="specs-toc" />
          <ReactBootStrap.Navbar.Collapse id='specs-toc'>
          <Scrollspy items={ topics } currentClassName={styles.iscurrent} aria-current="true" offset={-150}>
            { topics.map((topic) => { 
                let level = topicToLevel[topic] === "Scrollspy1"
                            ? styles.Scrollspy1
                            : topicToLevel[topic] === "Scrollspy2"
                            ? styles.Scrollspy2
                            : styles.Scrollspy3
                return (
                  <ReactBootStrap.Nav.Link className={level} href={`#${topic}`}>
                    {`${topic}`}
                  </ReactBootStrap.Nav.Link>
                )
            })
            }
          </Scrollspy>
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>
    )
};





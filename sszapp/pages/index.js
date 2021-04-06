import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import React from 'react'
import Node from '../stories/Node'
import { FirstStory } from '../stories/Node.stories'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router';
import Layout from '../components/layout.jsx';
import MenuButton from '../stories/MenuButton';
import { SMap } from '../stories/MenuButton.stories';

const Home = () => (
  <Layout>
    <Row>  
      <Col lg={9}>
        SSZ SimpleSerialize
        <Node {...FirstStory.args} />
        <MenuButton {...SMap.args} />
      </Col>
    </Row>
    <Row>
      <Col md={4}>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Serialization</h5>
            <h6 className="card-subtitle mb-2 text-muted">Simple, Agnostic, Unambiguous</h6>
            <p className="card-text">Serialize basic and complex data types to a sequence of bytes</p>
            <Link href="#" className="card-link">Learn about Serialization</Link>
          </div>
        </div>
      </Col>
      <Col md={4}>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Hashing</h5>
            <h6 className="card-subtitle mb-2 text-muted">Binary Merkle Trees</h6>
            <p className="card-text">All data structures summarized by Merkle Root Hash</p>
            <p className="card-text">Efficiently update hashed objects</p>

            <Link href="#" className="card-link">Learn about Merkle Trees</Link>
          </div>
        </div>
      </Col>
      <Col md={4}>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Merkle Tree Proofs</h5>
            <h6 className="card-subtitle mb-2 text-muted">Small, Succinct, Multi-Proofs</h6>
            <p className="card-text">Efficient Proof Navigation</p>
            <Link href="#" className="card-link">Learn about Merkle Proofs</Link>
          </div>
        </div>
      </Col>
    
    </Row>
      </ Layout>
      )


export default Home

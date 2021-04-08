import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactMarkdown from 'react-markdown';
import Layout from '../components/layout';

export default function Introduction() {

    return (
        <Layout>
        <Row>
            <h2>Design</h2>
            <h4>The design choices for SSZ originate from the desire for:</h4>
        </Row>
        <Row>
            <ReactMarkdown>
            - **Efficiency and Elegance** in proof structures with binary trees, and a design that separates opinionated sparse structures from merkleization, learning from issues in ETH 1.0.
            - **Consistency** in a wide range of use-cases for minimal and efficient encoding and proofs in the core of ETH 2.0, as well as the layers being built on top.
            - **Flexibility and Transparency** for tracing proofs through history, building shallow variants of types, or proofs to linked data such as between ETH 2.0 shards.
            - **Stability of proof data** for stateless light clients and smart contracts. These can count on deterministic and stable locations of merkle tree leaves of interest.
            - **Fast data reads** by making full deserialization optional, data can be retrieved with a very minimal amount of operations, largely pre-computable at compile time.
            </ReactMarkdown>
        </Row>
        </Layout>
        )
}
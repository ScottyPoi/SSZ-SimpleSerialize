import HomeCard from "./HomeCard"

const cards = [1,2,3,4,5]

const links = {
    specs: {
        title: "Specifications",
        footer: "'simpleserialize.md' & 'merkleproofs.md' as they appear in the Eth2.0 Specs",
        image: "./sszspecspic.png",
        alt: "github",
        link: "show"
        
    },
    overview: {
        title: "Technical Overview",
        footer: "Walkthrough explanation of SimpleSerialize and Merkle Proofs",
        image: "./overview.png",
        alt: "overview"
    },
    implementations: {
        title: "Active Implementations",
        footer: "List of actively maintained SSZ Imlementations",
        
        image: "./implementations.png",
        alt: "implementations"
    },
    // chainsafe: {
    //     title: "Chainsafe SSZ",
    //     footer: "Typescript SSZ Implementation",
    //     image: "./chainsafessz.png",
    //     alt: "chainsafessz"
    // },
    // pySSZ: {
    //     title: "PY-SSZ",
    //     footer: "Python SSZ Implementation",
    //     image: "./pyssz.png",
    //     alt: "pyssz"
    // },
    simpleserialize: {
        title: "SimpleSerialize for Eth2.0",
        footer: "Serialize Eth2.0 Types to SSZ | Deserialize to YAML",
        image: "./simpleserialize3.png",
        alt: "ssz.com"
    },
    visualizer: {
        title: "SSZ Visualizer",
        footer: "Interactive Exploration of SSZ Objects",
        image: "./visualizer.png",
        alt: "visualizer"
    },
    test: {
        title: "SSZ Testing",
        footer: "Test Suites for SSZ Implementations",
        image: "./testsuite.png",
        alt: "testsuite"
    }

}

export default function HomeCards(props) {
    return (
<div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-5">
{Object.keys(links).map((card, idx) => {
    const link = links[card]
    return <HomeCard key={idx} title={link.title} text={link.text} footer={link.footer} image={link.image} link={link.link} />
} )}
</div>
    )
}
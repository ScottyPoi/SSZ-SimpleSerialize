import HomeCard from "./HomeCard"

const links = {
    specs: {
        title: "SSZ Specs",
        footer: "Simple Serialize as it appears in the Eth2.0 Specs",
        image: "./Eth2.0SpecsRect.png",
        alt: "github"
        
    },
    overview: {
        title: "Technical Overview",
        footer: "Walkthrough explanation of SimpleSerialize",
        image: "./overview.png",
        alt: "overview"
    },
    implementations: {
        title: "SSZ Implementations",
        footer: "List of SSZ Imlementations",
        
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
        title: "simpleserialize.com",
        footer: "Serialization / Deserialization of Eth2.0 Types",
        image: "./simpleserialize2.png",
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
export default function NavCards(props) {
    return (
        <div className='col mt-5'>
            <div className="navbar-nav-scroll row row-cols-1 g-4 ">
{Object.keys(links).map((card, idx) => {
    const link = links[card]
    return <HomeCard key={idx} title={link.title} text={link.text} footer={link.footer} image={link.image} />
} )}
</div>
        </div>
    )
}
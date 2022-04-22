import HomeCard from "./HomeCard";

const cards = [1, 2, 3, 4, 5];

const links = {
  specs: {
    title: "Specifications",
    footer:
      "'simpleserialize.md' & 'merkleproofs.md' as they appear in the Eth2.0 Specs",
    image: "./sszspecspic.png",
    alt: "github",
    link: "show",
  },
  SSZ_Visual_Explorer: {
    title: "Ethereum Object Visualizer",
    footer: "Interactive Exploration of SSZ Objects",
    image: "./explorer.png",
    alt: "Explorer",
    link: "sszexplorer",
  },
  overview: {
    title: "Overview",
    footer: "Walkthrough explanation of SimpleSerialize and Merkle Proofs",
    image: "./overview.png",
    alt: "overview",
    link: "overview",
  },
  notes: {
    title: "Notes and other docs",
    footer: "From SSZ developers",
    image: "./notes.png",
    alt: "notes",
    link: "altwalk",
  },
  implementations: {
    title: "Active Implementations",
    footer: "List of actively maintained SSZ Imlementations",

    image: "./implementations.png",
    alt: "implementations",
    link: "active",
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
    alt: "ssz.com", 
    link: "chainsafe",
  },
  test: {
    title: "SSZ Testing Suite",
    footer: "Test Suites for SSZ Implementations",
    image: "./testsuite.png",
    alt: "testsuite",
    link: "ssztesting",
  },
};

export default function HomeCards(props) {
  return (
    // <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-5">
    <div className="container">

    <div className="row">
      <div className="col-6">
      <HomeCard title="SSZ Browser Tool"
        footer="Create and Test SSZ Types"
        alt="SSZ_DIY"
        image="./sszdiycard.png"
        link="sszdiy"
        />
      </div>
      <div className="col-6">
      <HomeCard
            key={links.specs.idx}
            title={links.specs.title}
            text={links.specs.text}
            footer={links.specs.footer}
            image={links.specs.image}
            link={links.specs.link}
            />
      </div>
        </div>

    <div className="row">
        {Object.keys(links).map((card, idx) => {
          const link = links[card];
          return card !== 'specs' && (
            <div className="col">

            <HomeCard
            key={idx}
            title={link.title}
            text={link.text}
            footer={link.footer}
            image={link.image}
            link={link.link}
            />
            </div>
            );
          })}

    </div>
          </div>
  );
}

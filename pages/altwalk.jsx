import FullOverview from "../components/Demo/FullOverview";
import fs from "fs";
import ReactMarkdown from "react-markdown";
import { useState } from "react";
import { useEffect } from "react";
import remarkGfm from "remark-gfm";


export async function getStaticProps() {
  const markdowns = [];
  Object.keys(topics).forEach((topic) => {
    topics[topic].forEach((file) => {
      const data = fs.readFileSync(
        `./specs/${topic}/${file}.md`,
        "utf8"
      );
      markdowns.push({ data: data, topic: file });
    });
  });

  return {
    props: {
      markdowns,
    },
  };
}

const topics = {
  general: ["general"],
  types: ["general", `basic`, "bitfields", "complex", "union"],
  representation: ["fixed_variable_size", "sequences"],
  partials: ["partials"],
  merkleization: [
    "chunkify",
    "hashing",
    "merkle_proofs",
    "mixin",
    "subtree_merkleization",
    "proof_backings/classic",
  ],
  navigation: ["generalized_indices", "paths", "summaries_expansions"],
};



export default function altwalk({ markdowns }) {
  const [currentPage, setCurrentPage] = useState();

  const pages = markdowns.map((page, idx) => {
    return (
      <li id={page} key={idx}>
        <div key={idx} className="row">
          <ReactMarkdown plugins={[remarkGfm]}>{page.data}</ReactMarkdown>
        </div>
      </li>
    )
  });

  const titles = markdowns.map((page) => {
      return page.topic
  })

  const together = new Map(pages.map((page, idx) => {
      return [titles[idx], page]
  }))

  const mapping = Object.fromEntries(together)



  function showPage(page) {
    setCurrentPage(mapping[page])
}

  const topicList = Object.keys(topics).map((topic) => {
    return new Object(topic, topics[topic]);
  });

  useEffect(() => {
    setCurrentPage(pages[0]);
  }, []);


  return (
    <div className="container position-relative">
      <div className="row">
      <div className="col-2 position-absolute start-0 overflowy-auto">
          {topicList.map((topic, idx) => {
            return (
              <div className="container">
                <div className="row">
                  <h5 className="border-primary border border-bottom-0">
                    {topic}
                  </h5>
                </div>
                <div className="row">
                  <ul className="nav nav-tabs flex-column p-3">
                    {topics[topic].map((sub, idx2) => {
                   
                      return (
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            onClick={() => showPage(sub)}
                          >
                            {sub}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-9 position-absolute end-0 overflowy-auto">{currentPage}</div>
      </div>
      
    </div>
  );
}

export default function IsolateTOC(toc) {
    const text = toc;

// Isolate text between doctoc comments

    const firstSplit = text.split("<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->")
    const secondSplit = firstSplit[1].split("<!-- END doctoc generated TOC please keep comment here to allow auto update -->")
    const table = secondSplit[0]

// separate by line and filter out empty lines.  
// save a list of TOC titles clean, and a list of TOC titles with markdown formatting symbols

    const tableByLines = table.split('\n')
    const tableByLinesNoEmpties = tableByLines.filter(line => line !== "" && line !== "\r")
    const tblneAsString = `${tableByLinesNoEmpties}`
    const removedSeparaters = tblneAsString.replace(/ /g, "").replace(/,/g, "").replace(/-/g, "").replace(/]/g, '').replace(/\[/g, "").replace(/\)/g, "(").replace(/\(/g, ",").replace(/\`/g,"")
    const removedSeparatersWithLevels = tblneAsString.replace(/,/g, "").replace(/]/g, '').replace(/\)/g, "(").replace(/\(/g, ",").replace(/\`/g,"")
    const cleanList = removedSeparaters.split(',');
    const cleanListWithLevels = removedSeparatersWithLevels.split(',');
    cleanList.pop();
    cleanListWithLevels.pop();

// save a dictionary pairing clean title with title with formatting levels

    const topicToTWL = {}
    for (let i=0; i<cleanList.length; i+=2) {
      let topic = cleanList[i];
      let TWL = cleanListWithLevels[i];
      topicToTWL[topic] = TWL;
    };
    
// return a dictionary pairing clean title with className for scrollspy link

    const topicToLevel = {};
    Object.keys(topicToTWL).map((topic) => {
        topicToLevel[topic] = topicToTWL[topic][0] === "-"
            ? "Scrollspy1"
            : topicToTWL[topic][2] === "-"
            ? "Scrollspy2"
            : topicToTWL[topic][4] === "-"
            ? `Scrollspy3`
            : 4
    })

    return topicToLevel

}
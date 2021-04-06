export default function SeparateSections(body) {
    let tmp = body;
    
    // Convoluted way of separating each section of the markdown by Headings, regardless of level ## ### or ####
    // While also preserving the markdown notation
    // Returns an array of strings in markdown notation

    tmp = tmp.replace(/####/g, "FOOBARBAZ@@@@");
    tmp = tmp.replace(/###/g, "FOOBARBAZ@@@");
    tmp = tmp.replace(/##/g, "FOOBARBAZ@@");
    tmp = tmp.replace(/@/g, "#")
    tmp = tmp.split("FOOBARBAZ");
    tmp = tmp.filter(foo => foo !== `\r\n\r\n`);
    tmp = tmp.join(`\n`);
    tmp = tmp.split(`\n`);
    tmp = tmp.filter(foo => foo !== `\r` && foo !== "");
    tmp = tmp.join(`\n`);
    tmp = tmp.replace(/####/g, "FOOBARBAZ@@@@");
    tmp = tmp.replace(/###/g, "FOOBARBAZ@@@");
    tmp = tmp.replace(/##/g, "FOOBARBAZ@@");
    tmp = tmp.replace(/@/g, "#")
    tmp = tmp.split("FOOBARBAZ");
    tmp = tmp.filter(foo => foo !== `\r` && foo !== `\n` && foo !== "");

    return tmp

}
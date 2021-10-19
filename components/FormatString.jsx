export function formatString(sub) {
    let formattedSub = sub
    const strings = ["previous", "current"];
    const stringsRemoved = formattedSub.includes("previous")
      ? formattedSub.substring(8)
      : formattedSub.includes("current")
      ? formattedSub.substring(7)
      : formattedSub.includes("next")
      ? formattedSub.substring(4)
      //   : sub == "beaconBlockRoot"
    //   ? 'root'
      : formattedSub;
    const reduced = stringsRemoved.includes("Checkpoint")
    ? "Checkpoint"
    : stringsRemoved.includes("Epoch")
    ? "Epoch"
    : stringsRemoved.includes("Committee")
    ? "Committee"
    : stringsRemoved.includes("Roots")
    ? "Vector"
    : stringsRemoved.includes("Version")
    ? "Version"
    : stringsRemoved.includes("finalityHeader")
    ? `BeaconBlockHeader`
    : stringsRemoved.includes("Root")
    ? "Root"
    : stringsRemoved.includes("Slot")
    ? `Slot`
    : stringsRemoved.includes("Credentials")
    ? "Bytes32"
    : stringsRemoved.includes("Time")
    ? "Uint64"
    : stringsRemoved.includes("Count")
    ? "Count"
    : stringsRemoved == "randaoMixes"
    ? "Vector"
    : stringsRemoved

      const capitalized =
      typeof reduced == "string" &&
      reduced.substr(0, 1).toUpperCase() +
        reduced.substring(1).replace(/\d/g, "");
    return capitalized;
  }

const googoo = "googoo"

  export default googoo
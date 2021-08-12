export default function Hello(props) {
  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      <strong>Message from Creator:</strong>Hi. Thanks for visiting. This site is
      a work-in-progress collection of resources and projects related to
      SimpleSerialize. The main objective is to extricate SSZ from the Eth2.0
      specs. SSZ is a serialization and merkleization scheme created by Ethereum
      developers during the transition to Eth2.0. However, use outside of the
      Ethereum context was taken into account during its design. I built this
      site both as a resource for understanding and implementing SSZ in your own
      projects, but also to promote a simple yet brilliant design born out of the
      Ethereum2.0 roadmap. Below you can find the technical specs as I found
      them in the Ethereum repo, as well as some documentation and notes from
      developers. Also links and details about several actively maintained SSZ
      implementations from the Ethereum community. I also built a visual walkthrough of the
      specs, as well as an interactive tool for visualizing the merkle tree
      structure of SSZ objects. Please reach out to me on Github with feedback
      and suggestions. This project is funded by grants from the Ethereum
      Foundation.
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
}

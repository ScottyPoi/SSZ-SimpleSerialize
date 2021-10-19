const sections = [{name: "Overview", subs: [{name: "Types"}]}, {name: "Serialization Tool"}];

function makeMenu(sections = null) {
  return (
    <ul className="nav flex-column">
        {sections.map((section) => {
            return (
      <li>
        <a>{section.name}</a>
        {section.subs && makeMenu(section.subs)}

      </li>
            )
        })}
    </ul>
  );
}

export default function SiteMap(props) {
  return (<div>
{makeMenu(sections)}
  </div>);
}

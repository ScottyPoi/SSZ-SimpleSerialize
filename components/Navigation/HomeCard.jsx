import Link from "next/link";
export default function HomeCard(props) {
  return (
        <div className="card border border-3 position-relative p-0">
    <Link className="nav-link" href={`./${props.link}`}>
      <a>
          <div className="card-body py-4">
            <h3 className="card-title text-center border-bottom">{props.title}</h3>
            <br/>
            <img
              src={props.image}
              className="card-img-top border"
              alt={props.alt}
            />
            <p className="card-text">{props.text}</p>
          </div>
          <br/>
          <div className="card-footer w-100 position-absolute bottom-0">
            <small className="text-muted">{props.footer}</small>
        </div>
      </a>
    </Link>
          </div>
  );
}

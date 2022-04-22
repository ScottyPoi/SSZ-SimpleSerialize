import Link from "next/link";
export default function HomeCard(props) {
  return (
    <div className="card h-100 border border-3 p-0">
      <Link className="nav-link" href={`./${props.link}`}>
        <a>
          <div className="card-body py-4">
            <h5 className="card-title text-center border-bottom">
              {props.title}
            </h5>
            <img
              src={props.image}
              className="card-img-top border"
              alt={props.alt}
            />
          </div>
        </a>
      </Link>
      <div className="card-footer w-100">
        <small className="text-muted">{props.footer}</small>
      </div>
    </div>
  );
}

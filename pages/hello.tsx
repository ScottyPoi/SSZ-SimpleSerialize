
import SiteMap from "../data/sitemap";

export default function hello() {

  const style = { paddingBottom: "100%", backgroundColor: "gray" };

  return (
    <div className="container p-0 m-0">
      <div className="row p-0 m-0">
        <div
          style={style}
          className="col-2 border border-end-0 border-2 border-dark"
        ><SiteMap />
        </div>
        <div
          style={style}
          className="col-8 border border-end-0 border-2 border-dark"
        ></div>
        <div
          style={style}
          className="col-2 border  border border-2 border-dark"
        ></div>
      </div>
    </div>
  );
}

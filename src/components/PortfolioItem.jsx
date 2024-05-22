import { forwardRef } from "react";

const PortfolioButton = ({ title, onClick }) => {
  return (
    <li className="nav-item">
      <a className="nav-link" onClick={onClick}>
        {title}
      </a>
    </li>
  );
};

const PortfolioCard = forwardRef(function project(
  { item, maxWidth = "540px" },
  ref
) {
  return (
    <div ref={ref} className="card mb-3" style={{ maxWidth: maxWidth }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={item.image} className="img-fluid rounded" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.description}</p>
            <div className=" d-flex flex-row gap-3 justify-content-center">
              {item.url ? (
                <a
                  href={item.url}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See it in Action!
                </a>
              ) : (
                ""
              )}
              {item.repo ? (
                <a
                  href={item.repo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See the Repo
                </a>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export { PortfolioButton, PortfolioCard };

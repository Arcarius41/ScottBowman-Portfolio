const PortfolioButton = ({ title }) => {
    return <li class="nav-item">
    <a class="nav-link" href="#">
      { title }
    </a>
  </li>
}

const PortfolioCard = ({ item }) => {
    return (<div class="card mb-3" style={{maxWidth: "100%"}}>
    <div class="row g-0">
      <div class="col-md-4">
        <img src={item.image} class="img-fluid rounded-start" alt="..."/>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{item.title}</h5>
          <p class="card-text">{item.description}</p>
          <p class="card-text">
            <a href={item.url} className="btn btn-primary">
              See it in Action!
            </a>
            <a href={item.repo} className="btn btn-primary">
              See the Repo
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>)
}


export { PortfolioButton, PortfolioCard } 
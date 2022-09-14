import { dataProjects } from "../data/dataProjects"


export const PortfolioPage = () => {
    return (

        <main className="portfolio-page">

            {
                dataProjects.map(project => {

                    return (
                        <a className="portfolio-page-project" href={project.url} key={project.id} target="_blank">
                            <h3>{project.name}</h3>
                            <img src={`/images/${project.img}`} alt="image project" />
                            <p>{project.description}</p>
                        </a>
                    )
                })
            }

        </main>
    )
}

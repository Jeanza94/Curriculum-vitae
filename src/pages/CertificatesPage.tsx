import { certificatesHtmlCss, certificatesJs, certificatesReact } from "../data/dataCertificates"


export const CertificatesPage = () => {
    return (
        <main className="certificate-page">
            <h1>Certificates i have gotten until now</h1>
            <p>The following certificates are from platzi
                udemy and freecodecamp</p>

            <h2>Developer</h2>

            <div className="certificate-page-wrapper">

                <section>
                    <h3>Html-Css</h3>
                    {
                        certificatesHtmlCss.map(certificate => (
                            <a key={certificate.id} href={certificate.path} target="_blanket">
                                <button>{certificate.name}</button>
                            </a>
                        ))
                    }
                </section>

                <section>
                    <h3>Javascript</h3>
                    {
                        certificatesJs.map(certificate => (
                            <a key={certificate.id} href={certificate.path} target="_blanket">
                                <button>{certificate.name}</button>
                            </a>
                        ))
                    }
                </section>

                <section>
                    <h3>React</h3>
                    {
                        certificatesReact.map(certificate => (
                            <a key={certificate.id} href={certificate.path} target="_blanket">
                                <button>{certificate.name}</button>
                            </a>
                        ))
                    }
                </section>
            </div>

        </main>

    )
}

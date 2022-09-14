import { Navigate, Route, Routes } from "react-router-dom"
import { CertificatesPage } from "../pages/CertificatesPage"
import { HomePage } from "../pages/HomePage"
import { PortfolioPage } from "../pages/PortfolioPage"

export const AppRouter = () => {
    return (

        <Routes>
            <Route path="/homePage" element={<HomePage />} />
            <Route path="/projectsPage" element={<PortfolioPage />} />
            <Route path="/certificatesPage" element={<CertificatesPage />} />

            <Route path="/*" element={<Navigate to="/homePage" />} />

        </Routes>
    )
}

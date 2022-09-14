import { Navigate, Route, Routes } from "react-router-dom"
import { CertificatesPage } from "../pages/CertificatesPage"
import { HomePage } from "../pages/HomePage"
import { PortfolioPage } from "../pages/PortfolioPage"

export const AppRouter = () => {
    return (

        <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/projects" element={<PortfolioPage />} />
            <Route path="/certificates" element={<CertificatesPage />} />

            <Route path="/*" element={<Navigate to="/home" />} />

        </Routes>
    )
}


export interface PropsDataProjects {
    description?: string,
    id: number
    img?: string,
    name: string,
    url: string,
}

export interface PropsDataCertificates {
    id: number
    name: string,
    path: string,
}

export interface PropsState {
    isHomeActive: boolean,
    isProjectActive: boolean,
    isCertificateActive: boolean,
    isOpenList: boolean,
}


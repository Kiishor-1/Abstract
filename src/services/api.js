const BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL;

export const CARD_ENDPOINTS = {
    FETCH_ALL_CARDS:`${BASE_URL}/api/cards`,
    CREATE_CARDS:`${BASE_URL}/api/cards`,
    FETCH_SPECIFI_CARD: (id)=>`${BASE_URL}/api/cards/${id}`
}

export const FOOTER_ENDPOINTS = {
    FOOTER_DATA:`${BASE_URL}/api/footer`
}
const API_BASE_URL = "http://127.0.0.1:8001";

export default API_BASE_URL;

import API_BASE_URL from "@/lib/api";

fetch(`${API_BASE_URL}/api/login/`);

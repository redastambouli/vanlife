
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD4seyYITCpXMC1LJKioB8yFj-NbHrE0bY",
  authDomain: "vanlife-9195c.firebaseapp.com",
  projectId: "vanlife-9195c",
  storageBucket: "vanlife-9195c.appspot.com",
  messagingSenderId: "842928643599",
  appId: "1:842928643599:web:7e0f35c6f491ec94df0d7a"
};

const app = initializeApp(firebaseConfig);




export async function getVans(id) {
    const url = id ? `/api/vans/${id}` : "/api/vans"
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}

export async function getHostVans(id) {
    const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}
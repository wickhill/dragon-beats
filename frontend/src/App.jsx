import { useState, useEffect } from 'react'
import { Route, Routes } from "react-router-dom"

import AuthPage from "./pages/AuthPage"

function App() {
    const [user, setUser] = useState(null)

    return (
        <div>
            <Routes>
                <Route path="/auth" element={<AuthPage user={user} setUser={setUser} />} />
            </Routes>
        </div>
    )
}

export default App

import React from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <MainMenu />

                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/reset" element={<PasswordReset />}/>
                    <Route path="/dashboard" element={<DefaultLayout />}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

const MainMenu = props => {
    return (
        <div>
            <div><Link to="/">Home</Link></div>
            <div><Link to="/login">Login</Link></div>
            <div><Link to="/reset">Reset</Link></div>
            <div><Link to="/dashboard">Dashboard</Link></div>
        </div>
    )
}

function Home() {
    return <h2>Home</h2>;
}

function Login() {
    return <h2>Login</h2>;
}

function PasswordReset() {
    return <h2>Password Reset</h2>;
}

function DefaultLayout() {
    return <h2>Dashboard</h2>;
}

export default App;

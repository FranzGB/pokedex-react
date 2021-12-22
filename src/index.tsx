import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import App from "./App";
import Home from "./Home";
import About from "./About";
import AdvancedSearch from "./AdvancedSearch";
import "./styles/styles.css";

const rootElement = document.getElementById("index");
render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App  />}>
                <Route path="/home" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="advanced-search" element={<AdvancedSearch />} />
                <Route
                path="*"
                element={
                    <main style={{ padding: "1rem" }}>
                    <p>There's nothing here!</p>
                    </main>
                }
                />
            </Route>
        </Routes>
    </BrowserRouter>,
    rootElement
    );

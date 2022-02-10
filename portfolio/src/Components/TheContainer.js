import React from 'react';
import { useState } from 'react';

import About from './Content/About';
import NavBar from './NavBar';
import Contact from './Content/Contact';
import Projects from './Content/Projects';
import Footer from './Footer';


export default function TheContainer() {
    const [currentPage, setCurrentPage] = useState("About");

    const renderPage = () => {
        if (currentPage === "About") {
            return <About />;
        } if (currentPage === "Contact") {
            return <Contact />
        } if (currentPage === "projects") {
            return <Projects />
        }
        return <About />;
    };
    const handlePageChange = (page) => setCurrentPage(page);
    return (
        <div>
            <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    );
}
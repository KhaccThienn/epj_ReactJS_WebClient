import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import SidebarInterview from './SidebarInterview/SidebarInterview'

function InterviewLayouts({ child }) {
    return (
        <>
            <SidebarInterview />
            <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
                <Header />
                <div className="container-fluid py-4">
                    {child}

                    <Footer />

                </div>
            </main>
        </>
    )
}

export default InterviewLayouts
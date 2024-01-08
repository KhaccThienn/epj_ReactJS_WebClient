import React from 'react'
import SidebarAdmin from './SidebarAdmin/SidebarAdmin'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'

function AdminLayouts({ child }) {
    return (
        <>
            <SidebarAdmin />
            <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
                <Header />
                <div class="container-fluid py-4">
                    {child}

                    <Footer />

                </div>
            </main>
        </>
    )
}

export default AdminLayouts
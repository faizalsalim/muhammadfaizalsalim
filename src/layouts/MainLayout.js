import React from 'react'
import FooterComponent from '../components/FooterComponent'
import NavbarComponent from '../components/NavbarComponent'

function MainLayout({children}) {
    return (
        <div>
            <NavbarComponent />
            <main className="min-h-screen">
            {children}
            </main>
            <FooterComponent/>
        </div>
    )
}

export default MainLayout

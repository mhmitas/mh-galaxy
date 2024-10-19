import Navbar from '@/components/navigation/Navbar';
import React from 'react'

const RootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className='min-h-screen flex flex-col'>
            <Navbar />
            <div className='flex-grow'>
                {children}
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default RootLayout
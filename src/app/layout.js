import './globals.css'
import Header from '../components/Header'
import Provider from './Providers'

export const metadata = {
    title: 'IMDB clone',
    description: 'movie database'
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Provider>
                    <Header />
                    {children}
                </Provider>
            </body>
        </html>
    )
}

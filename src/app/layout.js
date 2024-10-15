import './globals.css';
import Header from '../components/Header';

export const metadata = {
    title: 'IMDB clone',
    description: 'movie database'
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Header />
                {children}
            </body>
        </html>
    );
}

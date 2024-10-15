import NavbarItemWrapper from './NavbarItem'

const Navbar = () => {
    return (
        <div className="flex dark:bg-gray-600 bg-amber-100 p-4 lg:text-lg justify-center gap-6">
            <NavbarItemWrapper title="Trending" param="fetchTrending" />
            <NavbarItemWrapper title="Top Rated" param="fetchTopRated" />
        </div>
    )
}

export default Navbar

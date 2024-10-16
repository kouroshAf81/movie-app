import Results from '@/components/Results'

const SearchPage = async ({ params }) => {
    const seachTerm = params.searchTerm
    const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${'0edaaabc8fc04f7d83dfa8772d61d44b'}&query=${seachTerm}&language=en-US&page=1&include_adult=false`
    )
    const data = await res.json()
    const results = data.results
    return (
        <div>
            {results && results.length === 0 && (
                <h1 className="text-center pt-6">No results found</h1>
            )}
            {results && <Results results={results} />}
        </div>
    )
}

export default SearchPage

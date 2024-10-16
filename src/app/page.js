import Results from '@/components/Results'

// const API_KEY = process.env.API_KEY

export default async function Home({ searchParams }) {
    const genre = searchParams.genre || 'fetchTrending'
    const res = await fetch(
        `https://api.themoviedb.org/3${
            genre === 'fetchTopRated'
                ? '/movie/top_rated'
                : '/trending/all/week'
        }?api_key=${'0edaaabc8fc04f7d83dfa8772d61d44b'}&language=en-US&page=1`,
        { next: { revalidate: 10000 } }
    )
    const data = await res.json()
    if (!res.ok) {
        throw new Error(`API request failed with status ${res.status}`)
    }
    const results = data.results

    return (
        <div>
            <Results results={results} />
        </div>
    )
}

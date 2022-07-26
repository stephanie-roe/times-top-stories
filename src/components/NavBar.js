const NavBar = ({articles}) => {
    const filters = articles.reduce((acc, article) => {
        if (!acc.includes(article.section)) {
            acc.push(article.section)
        }
        return acc
    }, [])

    const filterButtons = filters.map(filter => {
        return <button key={filters.indexOf(filter)}>{filter}</button>
    })

    return (
        <nav>
            {filterButtons}
        </nav>
    )
}

export default NavBar
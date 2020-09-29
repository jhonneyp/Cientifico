import getData from '../utils/getData'


const Home = async () => {

    const characters = await getData(null, 4)

    const view = `
    <div class="Characters">
        ${characters.results.map(character =>
            `<article class="Characters-item">
            <a href="#/${character.id}/">
                <img src="${character.image}" alt="name">
                <h2 >${character.name}</h2>
            </a>
            </article>
            `).join('')}
    </div>
`

    return view
}

export default Home
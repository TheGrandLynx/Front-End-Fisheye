function photographerFactory(data) {
    const { name, portrait, id, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        img.setAttribute("alt", `Photo de profil de ${name}`)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');
        p1.innerHTML = `${city}, ${country}`
        p2.innerHTML = `${tagline}`
        p3.innerHTML = `${price}€/jour`
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(p3);
        return (article);
    }
    return { name, picture, id, city, country, tagline, price, getUserCardDOM }
}
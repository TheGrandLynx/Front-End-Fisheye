function photographerFactory(data) {
    const { name, portrait, id, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const link = document.createElement('a');
        link.href = "/photographer.html?id=" + id ;
        link.setAttribute("role", "link");
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
        link.appendChild(img);
        link.appendChild(h2);
        article.appendChild(link);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(p3);
        return (article);
    }

    function getUserHeaderCardDOM(){
        
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        img.setAttribute("alt", `Photo de profil de ${name}`)
        const h1 = document.createElement( 'h1' );
        h1.textContent = name;
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        p1.innerHTML = `${city}, ${country}`
        p2.innerHTML = `${tagline}`
        
        article.appendChild(h1);
        article.appendChild(p1);
        article.appendChild(p2);
        return ({ article, img });
      }

    return { name, picture, id, city, country, tagline, price, getUserCardDOM, getUserHeaderCardDOM }
}
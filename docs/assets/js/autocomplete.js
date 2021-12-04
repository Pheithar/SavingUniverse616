const search = document.getElementById("searchbar")
const matchlist = document.getElementById("match-list")

// Search character_names.json and filter it based on search_bar values
const searchStates = async searchText => {
    const res = await fetch('assets/data/character_names.json');
    const names = await res.json()

    // Get matches to current text input
    let matches = names.filter(name => {
        const regex = new RegExp(`^${searchText}`, 'gi');
        return name.match(regex) 
    });

    if (matches.length > 5) {
        matches = matches.slice(0, 5)
    }

    if(searchText.length == 0) {
        matches = []
    }

    outputHTML(matches);
}

// Show results in html
const outputHTML = matches => {
    if(matches.length > 0) {
        const html = matches.map(match => `
            <div class="searchbar__elem">
                <h4 class="searchbar__elem-title">${match}</h4>
            </div>
        `).join('');
        matchlist.innerHTML = html
    } else {
        matchlist.innerHTML = ""
    }
}

search.addEventListener('input', () => searchStates(search.value))
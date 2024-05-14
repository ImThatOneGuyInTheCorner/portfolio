document.addEventListener("DOMContentLoaded", function () {
    let webTab = document.getElementById('webAndProgrammingTab');
    let vidTab = document.getElementById('videogameDesignTab');
    let cooTab = document.getElementById('cookingAndBakingTab');
    let pixTab = document.getElementById('pixelArtTab');
    webTab.addEventListener("click", updateWeb);
    vidTab.addEventListener("click", updateVid);
    cooTab.addEventListener("click", updateCoo);
    pixTab.addEventListener("click", updatePix);
});

function updateWeb() {
    document.getElementById('webAndProgrammingTab').style.backgroundColor = 'var(--greyM)';
    document.getElementById('videogameDesignTab').style.backgroundColor = 'var(--greyD)';
    document.getElementById('cookingAndBakingTab').style.backgroundColor = 'var(--greyD)';
    document.getElementById('pixelArtTab').style.backgroundColor = 'var(--greyD)';
    
    document.getElementById('webAndProgrammingWindow').classList.remove('hidden');
    document.getElementById('videogameDesignWindow').classList.add('hidden');
    document.getElementById('cookingAndBakingWindow').classList.add('hidden');
    document.getElementById('pixelArtWindow').classList.add('hidden');
}
function updateVid() {
    document.getElementById('webAndProgrammingTab').style.backgroundColor = 'var(--greyD)';
    document.getElementById('videogameDesignTab').style.backgroundColor = 'var(--greyM)';
    document.getElementById('cookingAndBakingTab').style.backgroundColor = 'var(--greyD)';
    document.getElementById('pixelArtTab').style.backgroundColor = 'var(--greyD)';
    
    document.getElementById('webAndProgrammingWindow').classList.add('hidden');
    document.getElementById('videogameDesignWindow').classList.remove('hidden');
    document.getElementById('cookingAndBakingWindow').classList.add('hidden');
    document.getElementById('pixelArtWindow').classList.add('hidden');
}
function updateCoo() {
    document.getElementById('webAndProgrammingTab').style.backgroundColor = 'var(--greyD)';
    document.getElementById('videogameDesignTab').style.backgroundColor = 'var(--greyD)';
    document.getElementById('cookingAndBakingTab').style.backgroundColor = 'var(--greyM)';
    document.getElementById('pixelArtTab').style.backgroundColor = 'var(--greyD)';
    
    document.getElementById('webAndProgrammingWindow').classList.add('hidden');
    document.getElementById('videogameDesignWindow').classList.add('hidden');
    document.getElementById('cookingAndBakingWindow').classList.remove('hidden');
    document.getElementById('pixelArtWindow').classList.add('hidden');
}
function updatePix() {
    document.getElementById('webAndProgrammingTab').style.backgroundColor = 'var(--greyD)';
    document.getElementById('videogameDesignTab').style.backgroundColor = 'var(--greyD)';
    document.getElementById('cookingAndBakingTab').style.backgroundColor = 'var(--greyD)';
    document.getElementById('pixelArtTab').style.backgroundColor = 'var(--greyM)';
    
    document.getElementById('webAndProgrammingWindow').classList.add('hidden');
    document.getElementById('videogameDesignWindow').classList.add('hidden');
    document.getElementById('cookingAndBakingWindow').classList.add('hidden');
    document.getElementById('pixelArtWindow').classList.remove('hidden');
}
let x;
let y;

let pageCounter = 5;

const pageCounterDisplay = document.getElementById('page-counter');

const wheel = document.getElementById('wheel');
const bkg = document.getElementById('bkg');

const close = document.getElementById('close');
const favorites = document.getElementById('favorites');
const search = document.getElementById('search');

const tabContainer = document.getElementById('tab-container');
const newTab = document.getElementById('new-tab');
const tab = document.getElementById('tab');
const closeTab = document.getElementById('close-tab');

const pageContainer = document.getElementById('page-container');
const nextPage = document.getElementById('next-page');
const refresh = document.getElementById('refresh');
const previousPage = document.getElementById('previous-page');

const tabPage = document.getElementById('tab-page');
const favPage = document.getElementById('fav-page');
const tutorial = document.getElementById('tutorial');

function createWheel(event) {
  if (event.keyCode === 20) {
    bkg.style.opacity = .25;
    wheel.style.display = 'block';
    wheel.style.top = y + "px";
    wheel.style.left = x + "px";
    document.removeEventListener('mousemove', getMousePosition);
    pageCounterDisplay.style.display = 'none';
    tutorial.style.display = 'none';
  }
}

function hideWheel(event) {
  if (event.keyCode === 20) {
    wheel.style.display = 'none';
    document.addEventListener('mousemove', getMousePosition);
    bkg.style.opacity = 0;
    pageCounterDisplay.style.display = 'block';
  }
}

function getMousePosition(event) {
  x = event.clientX;
  y = event.clientY;
}

let i;

for (i = 0; i < 40; i++) {
  let newTabDiv = document.createElement('div');
  newTabDiv.classList.add('tab-div');
  newTabDiv.innerHTML = `Tab: ${i+1}`;
  tabPage.append(newTabDiv);
}



tabContainer.addEventListener('mouseover', showTabIcons);
tabContainer.addEventListener('mouseout', hideTabIcons);

function showTabIcons() {
newTab.style.display = 'block';
closeTab.style.display = 'block';

search.style.opacity = '.25';
favorites.style.opacity = '.25';
refresh.style.opacity = '.25';
}

function hideTabIcons() {
newTab.style.display = 'none';
closeTab.style.display = 'none';

search.style.opacity = '1';
favorites.style.opacity = '1';
refresh.style.opacity = '1';
}

pageContainer.addEventListener('mouseover', showPageIcons);
pageContainer.addEventListener('mouseout', hidePageIcons);

function showPageIcons() {
  nextPage.style.display = 'block';
  previousPage.style.display = 'block';

  search.style.opacity = '.25';
  favorites.style.opacity = '.25';
  tab.style.opacity = '.25';
}

function hidePageIcons() {
  nextPage.style.display = 'none';
  previousPage.style.display = 'none';

  search.style.opacity = '1';
  favorites.style.opacity = '1';
  tab.style.opacity = '1';
}


search.addEventListener('mouseover', () => {
  favorites.style.opacity = '.25';
  tab.style.opacity = '.25';
  refresh.style.opacity = '.25';
})

search.addEventListener('mouseout', () => {
  favorites.style.opacity = '1';
  tab.style.opacity = '1';
  refresh.style.opacity = '1';
})


favorites.addEventListener('mouseover', () => {
  search.style.opacity = '.25';
  tab.style.opacity = '.25';
  refresh.style.opacity = '.25';
})

favorites.addEventListener('mouseout', () => {
  search.style.opacity = '1';
  tab.style.opacity = '1';
  refresh.style.opacity = '1';
})


document.addEventListener('mousemove', getMousePosition)
document.addEventListener('keydown', createWheel)
document.addEventListener('keyup', hideWheel)

document.addEventListener('keyup', handleKeyUp)

function handleKeyUp(event) {
  if (event.keyCode === 20) {
    
  if (search.matches(':hover')) {
    googleBox.style.display = 'block';
    tabPage.style.display = 'none';
    pageCounterDisplay.style.display = 'none';
    favPage.style.display = 'none';
  }

    if (favorites.matches(':hover')) {
    favPage.style.display = 'flex';
      pageCounterDisplay.style.display = 'none';
      tabPage.style.display = 'none';
      googleBox.style.display = 'none';
  }

    if (tab.matches(':hover')) {
    tabPage.style.display = 'flex';
      googleBox.style.display = 'none';
      pageCounterDisplay.style.display = 'none';
      favPage.style.display = 'none';
  }

    if (newTab.matches(':hover')) {
    window.open('https://www.google.com/', '_blank');
  }

    if (closeTab.matches(':hover')) {
    tabPage.lastChild.remove();
      i--;
      pageCounterDisplay.style.display = 'none';
  }
    if (previousPage.matches(':hover')) {
      if (pageCounter > 1) {
    pageCounter--;
      pageCounterDisplay.innerHTML = `Current Page: ${pageCounter}`;
      }
  }
    if (refresh.matches(':hover')) {
    pageCounterDisplay.innerHTML = 'Refreshed'
  }
    if (nextPage.matches(':hover')) {
    pageCounter++;
      pageCounterDisplay.innerHTML = `Current Page: ${pageCounter}`;
  }
    
  }
}

function handleEscape(event) {
  if (event.keyCode === 27) {
    tabPage.style.display = 'none';
    googleBox.style.display = 'none';
    pageCounterDisplay.style.display = 'block';
    favPage.style.display = 'none';
  }
}

document.addEventListener('keydown', handleEscape);

pageCounterDisplay.innerHTML = `Current Page: ${pageCounter}`;

document.addEventListener('keydown', handleSearch) 

function handleSearch (){
  if (event.keyCode === 13) {
    var userInput = googleBox.value,
        regex_google = new RegExp('google(.*)');

      window.open('https://www.google.com/search?q=' + userInput);
  }
};
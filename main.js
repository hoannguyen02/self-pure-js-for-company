const ssContainer = document.getElementById('saved-search-container');
const filterButton = document.getElementById('filterButton');
const filterContent = document.getElementById('filterContent');
let sticky = false;
const refineContainer = ssContainer && filterButton && filterContent && addRefineContainerToBody();
const closeFilter = document.getElementById('close-filter');
const openFilter = document.getElementById('open-filter');
const contentPage = document.getElementById('content-page');
const header = document.getElementById('header');
const footer = document.getElementById('footer');
const cookieBanner = document.getElementById('cookie-banner');

const refineContainerOffsetTop = refineContainer ? refineContainer.offsetTop : 0;

window.onscroll = function() { refineContainer && stickyRefineContainer()};
function stickyRefineContainer() {
    if (window.pageYOffset > refineContainerOffsetTop) {
        sticky = true;
        refineContainer.classList.add('sticky');
    } else {
        sticky = false;
        refineContainer.classList.remove('sticky');
    }
}

function addRefineContainerToBody() {
    const existedRefineContainer = document.getElementById("refine-container");
    if(!existedRefineContainer) {
        const refine = document.createElement('div');
        refine.id = 'refine-container';
        const newRefineContainer = ssContainer.parentNode.insertBefore(refine, ssContainer);
        newRefineContainer.appendChild(ssContainer);
        newRefineContainer.appendChild(filterButton);
        newRefineContainer.appendChild(filterContent);
        return newRefineContainer;
    }
    return existedRefineContainer;
}

function handleSaveSearch() {
    alert('Save Search')
}

function handleOpen() {
    closeFilter.style.display = 'block';
    openFilter.style.display = 'none';
    ssContainer.style.display = 'none'; 
    filterContent.classList.add('show');
    document.body.style.overflow = 'hidden';
    if(!sticky) {
        filterContent.style.top = `${refineContainer.offsetHeight + header.offsetHeight + cookieBanner.offsetHeight}px`;
    } else {
        filterContent.style.top = `${refineContainer.offsetHeight}px`;
    }
}

function handleClose() {
    closeFilter.style.display = 'none';
    openFilter.style.display = 'block';
    ssContainer.style.display = 'block';
    filterContent.classList.remove('show');
    document.body.style.overflow = 'initial';
}

function handleSubmitFilter() {
    alert('Submit filter')
} 
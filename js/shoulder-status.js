const shoulderStatusBase = document.querySelector('.shoulder .status-base');
const shoulderStatusContent = document.querySelector('.shoulder .status-content');
const shoulderStatusExpand = document.querySelector('.shoulder .status-base .expandable');


//Expand and collapse shoulder tests
shoulderStatusExpand.addEventListener('click', function () {
    if (shoulderStatusExpand.innerHTML.indexOf("plus") !== -1) {
        shoulderStatusExpand.innerHTML = `<i class="fa-solid fa-minus"></i>`;
        shoulderStatusContent.style.display = "block";
    } else {
        shoulderStatusExpand.innerHTML = `<i
                                class="fa-solid fa-plus"></i>`;
        shoulderStatusContent.style.display = "none";
    }
});

const kneeStatusBase = document.querySelector('.knee .status-base');
const kneeStatusContent = document.querySelector('.knee .status-content');
const kneeStatusExpand = document.querySelector('.knee .status-base .expandable');


//Expand and collapse shoulder tests
kneeStatusExpand.addEventListener('click', function () {
    if (kneeStatusExpand.innerHTML.indexOf("plus") !== -1) {
        kneeStatusExpand.innerHTML = `<i class="fa-solid fa-minus"></i>`;
        kneeStatusContent.style.display = "block";
    } else {
        kneeStatusExpand.innerHTML = `<i
                                class="fa-solid fa-plus"></i>`;
        kneeStatusContent.style.display = "none";
    }
});

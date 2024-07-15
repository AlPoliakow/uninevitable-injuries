const kneeCaseBase = document.querySelector('.knee .case-base');
const kneeCaseContent = document.querySelector('.knee .case-content');
const kneeCaseExpand = document.querySelector('.knee .case-base .expandable');


//Expand and collapse shoulder tests
kneeCaseExpand.addEventListener('click', function () {
    if (kneeCaseExpand.innerHTML.indexOf("plus") !== -1) {
        kneeCaseExpand.innerHTML = `<i class="fa-solid fa-minus"></i>`;
        kneeCaseContent.style.display = "block";
    } else {
        kneeCaseExpand.innerHTML = `<i
                                class="fa-solid fa-plus"></i>`;
        kneeCaseContent.style.display = "none";
    }
});

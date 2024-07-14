const kneeTestsBase = document.querySelector('.knee .tests-base');
const kneeTestsContent = document.querySelector('.knee .tests-content');
const kneeTestsExpand = document.querySelector('.knee .tests-base .expandable');


//Expand and collapse shoulder tests
kneeTestsExpand.addEventListener('click', function () {
    if (kneeTestsExpand.innerHTML.indexOf("plus") !== -1) {
        kneeTestsExpand.innerHTML = `<i class="fa-solid fa-minus"></i>`;
        kneeTestsContent.style.display = "block";
    } else {
        kneeTestsExpand.innerHTML = `<i
                                class="fa-solid fa-plus"></i>`;
        kneeTestsContent.style.display = "none";
    }
});

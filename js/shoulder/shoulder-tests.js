const shoulderTestsBase = document.querySelector('.shoulder .tests-base');
const shoulderTestsContent = document.querySelector('.shoulder .tests-content');
const shoulderTestsExpand = document.querySelector('.shoulder .tests-base .expandable');


//Expand and collapse shoulder tests
shoulderTestsExpand.addEventListener('click', function () {
    if (shoulderTestsExpand.innerHTML.indexOf("plus") !== -1) {
        shoulderTestsExpand.innerHTML = `<i class="fa-solid fa-minus"></i>`;
        shoulderTestsContent.style.display = "block";
    } else {
        shoulderTestsExpand.innerHTML = `<i
                                class="fa-solid fa-plus"></i>`;
        shoulderTestsContent.style.display = "none";
    }
});

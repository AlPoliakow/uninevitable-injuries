const shoulderCaseBase = document.querySelector('.shoulder .case-base');
const shoulderCaseContent = document.querySelector('.shoulder .case-content');
const shoulderCaseExpand = document.querySelector('.shoulder .case-base .expandable');


//Expand and collapse shoulder tests
shoulderCaseExpand.addEventListener('click', function () {
    if (shoulderCaseExpand.innerHTML.indexOf("plus") !== -1) {
        shoulderCaseExpand.innerHTML = `<i class="fa-solid fa-minus"></i>`;
        shoulderCaseContent.style.display = "block";
    } else {
        shoulderCaseExpand.innerHTML = `<i
                                class="fa-solid fa-plus"></i>`;
        shoulderCaseContent.style.display = "none";
    }
});

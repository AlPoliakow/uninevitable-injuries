const shoulderEvidenceBase = document.querySelector('.shoulder .evidence-base');
const shoulderEvidenceContent = document.querySelector('.shoulder .evidence-content');
const shoulderEvidenceExpand = document.querySelector('.shoulder .evidence-base .expandable');


//Expand and collapse shoulder tests
shoulderEvidenceExpand.addEventListener('click', function () {
    if (shoulderEvidenceExpand.innerHTML.indexOf("plus") !== -1) {
        shoulderEvidenceExpand.innerHTML = `<i class="fa-solid fa-minus"></i>`;
        shoulderEvidenceContent.style.display = "block";
    } else {
        shoulderEvidenceExpand.innerHTML = `<i
                                class="fa-solid fa-plus"></i>`;
        shoulderEvidenceContent.style.display = "none";
    }
});

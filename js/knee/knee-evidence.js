const kneeEvidenceBase = document.querySelector('.knee .evidence-base');
const kneeEvidenceContent = document.querySelector('.knee .evidence-content');
const kneeEvidenceExpand = document.querySelector('.knee .evidence-base .expandable');


//Expand and collapse shoulder tests
kneeEvidenceExpand.addEventListener('click', function () {
    if (kneeEvidenceExpand.innerHTML.indexOf("plus") !== -1) {
        kneeEvidenceExpand.innerHTML = `<i class="fa-solid fa-minus"></i>`;
        kneeEvidenceContent.style.display = "block";
    } else {
        kneeEvidenceExpand.innerHTML = `<i
                                class="fa-solid fa-plus"></i>`;
        kneeEvidenceContent.style.display = "none";
    }
});

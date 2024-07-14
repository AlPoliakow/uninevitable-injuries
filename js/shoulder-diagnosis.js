const shoulderDiagnosisBase = document.querySelector('.shoulder .diagnosis-base');
const shoulderDiagnosisContent = document.querySelector('.shoulder .diagnosis-content');
const shoulderDiagnosisExpand = document.querySelector('.shoulder .diagnosis-base .expandable');


//Expand and collapse shoulder tests
shoulderDiagnosisExpand.addEventListener('click', function () {
    if (shoulderDiagnosisExpand.innerHTML.indexOf("plus") !== -1) {
        shoulderDiagnosisExpand.innerHTML = `<i class="fa-solid fa-minus"></i>`;
        shoulderDiagnosisContent.style.display = "block";
    } else {
        shoulderDiagnosisExpand.innerHTML = `<i
                                class="fa-solid fa-plus"></i>`;
        shoulderDiagnosisContent.style.display = "none";
    }
});

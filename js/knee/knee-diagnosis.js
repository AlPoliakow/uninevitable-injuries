const kneeDiagnosisBase = document.querySelector('.knee .diagnosis-base');
const kneeDiagnosisContent = document.querySelector('.knee .diagnosis-content');
const kneeDiagnosisExpand = document.querySelector('.knee .diagnosis-base .expandable');


//Expand and collapse shoulder tests
kneeDiagnosisExpand.addEventListener('click', function () {
    if (kneeDiagnosisExpand.innerHTML.indexOf("plus") !== -1) {
        kneeDiagnosisExpand.innerHTML = `<i class="fa-solid fa-minus"></i>`;
        kneeDiagnosisContent.style.display = "block";
    } else {
        kneeDiagnosisExpand.innerHTML = `<i
                                class="fa-solid fa-plus"></i>`;
        kneeDiagnosisContent.style.display = "none";
    }
});

const kneeChecklistBase = document.querySelector('.knee .checklist-base');
const kneeChecklistContent = document.querySelector('.knee .checklist-content');
const kneeChecklistExpand = document.querySelector('.knee .checklist-base .expandable');


//Expand and collapse shoulder tests
kneeChecklistExpand.addEventListener('click', function () {
    if (kneeChecklistExpand.innerHTML.indexOf("plus") !== -1) {
        kneeChecklistExpand.innerHTML = `<i class="fa-solid fa-minus"></i>`;
        kneeChecklistContent.style.display = "block";
    } else {
        kneeChecklistExpand.innerHTML = `<i
                                class="fa-solid fa-plus"></i>`;
        kneeChecklistContent.style.display = "none";
    }
});

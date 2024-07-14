const shoulderChecklistBase = document.querySelector('.shoulder .checklist-base');
const shoulderChecklistContent = document.querySelector('.shoulder .checklist-content');
const shoulderChecklistExpand = document.querySelector('.shoulder .checklist-base .expandable');


//Expand and collapse shoulder tests
shoulderChecklistExpand.addEventListener('click', function () {
    if (shoulderChecklistExpand.innerHTML.indexOf("plus") !== -1) {
        shoulderChecklistExpand.innerHTML = `<i class="fa-solid fa-minus"></i>`;
        shoulderChecklistContent.style.display = "block";
    } else {
        shoulderChecklistExpand.innerHTML = `<i
                                class="fa-solid fa-plus"></i>`;
        shoulderChecklistContent.style.display = "none";
    }
});

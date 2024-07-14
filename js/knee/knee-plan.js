const kneePlanBase = document.querySelector('.knee .plan-base');
const kneePlanContent = document.querySelector('.knee .plan-content');
const kneePlanExpand = document.querySelector('.knee .plan-base .expandable');


//Expand and collapse shoulder tests
kneePlanExpand.addEventListener('click', function () {
    if (kneePlanExpand.innerHTML.indexOf("plus") !== -1) {
        kneePlanExpand.innerHTML = `<i class="fa-solid fa-minus"></i>`;
        kneePlanContent.style.display = "block";
    } else {
        kneePlanExpand.innerHTML = `<i
                                class="fa-solid fa-plus"></i>`;
        kneePlanContent.style.display = "none";
    }
});

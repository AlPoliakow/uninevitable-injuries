const shoulderPlanBase = document.querySelector('.shoulder .plan-base');
const shoulderPlanContent = document.querySelector('.shoulder .plan-content');
const shoulderPlanExpand = document.querySelector('.shoulder .plan-base .expandable');


//Expand and collapse shoulder tests
shoulderPlanExpand.addEventListener('click', function () {
    if (shoulderPlanExpand.innerHTML.indexOf("plus") !== -1) {
        shoulderPlanExpand.innerHTML = `<i class="fa-solid fa-minus"></i>`;
        shoulderPlanContent.style.display = "block";
    } else {
        shoulderPlanExpand.innerHTML = `<i
                                class="fa-solid fa-plus"></i>`;
        shoulderPlanContent.style.display = "none";
    }
});

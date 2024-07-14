const kneeReasoningBase = document.querySelector('.knee .reasoning-base');
const kneeReasoningContent = document.querySelector('.knee .reasoning-content');
const kneeReasoningExpand = document.querySelector('.knee .reasoning-base .expandable');


//Expand and collapse shoulder tests
kneeReasoningExpand.addEventListener('click', function () {
    if (kneeReasoningExpand.innerHTML.indexOf("plus") !== -1) {
        kneeReasoningExpand.innerHTML = `<i class="fa-solid fa-minus"></i>`;
        kneeReasoningContent.style.display = "block";
    } else {
        kneeReasoningExpand.innerHTML = `<i
                                class="fa-solid fa-plus"></i>`;
        kneeReasoningContent.style.display = "none";
    }
});

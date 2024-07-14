const shoulderReasoningBase = document.querySelector('.shoulder .reasoning-base');
const shoulderReasoningContent = document.querySelector('.shoulder .reasoning-content');
const shoulderReasoningExpand = document.querySelector('.shoulder .reasoning-base .expandable');


//Expand and collapse shoulder tests
shoulderReasoningExpand.addEventListener('click', function () {
    if (shoulderReasoningExpand.innerHTML.indexOf("plus") !== -1) {
        shoulderReasoningExpand.innerHTML = `<i class="fa-solid fa-minus"></i>`;
        shoulderReasoningContent.style.display = "block";
    } else {
        shoulderReasoningExpand.innerHTML = `<i
                                class="fa-solid fa-plus"></i>`;
        shoulderReasoningContent.style.display = "none";
    }
});

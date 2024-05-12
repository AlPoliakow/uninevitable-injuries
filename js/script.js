//heading
const header = document.querySelector("h1");
//shoulder tests
const shoulderTests = document.querySelector(".shoulder .tests");
const shoulderRange = document.querySelector(".shoulder .range");
const shoulderPalpation = document.querySelector(".shoulder .palpation");
const shoulderX = document.querySelector(".shoulder .x-ray");
const shoulderUltrasound = document.querySelector(".shoulder .ultrasound");
const shoulderStrength = document.querySelector(".shoulder .strength");
const shoulderSpecific = document.querySelector(".shoulder .specific");
//knee tests
const kneeTests = document.querySelector(".knee .tests");
const kneeRange = document.querySelector(".knee .range");
const kneePalpation = document.querySelector(".knee .palpation");
const kneeStrength = document.querySelector(".knee .strength");
const kneeSpecific = document.querySelector(".knee .specific");
const kneeFunctional = document.querySelector(".knee .functional");
const kneeAnterior = document.querySelector(".knee .anterior");

//change header on mouseover
header.addEventListener("mouseover", function(){
    header.innerText="(Un)inevitable Injuries";
})

header.addEventListener("mouseleave", function(){
    header.innerText="Inevitable Injuries";
})

// make shoulder test information appear
shoulderRange.addEventListener("click", function(){
    shoulderRange.innerHTML=`<p><span>Range:</span><br>
    Active range of movement<br>
    Flex: 30 degrees p2<br>
    Abduction: 45 degrees p2<br>
    Extension: 10 degrees p2<br>
    Internal rotation: to abdomen<br>
    External rotation: -10 degrees</p>`
})

shoulderPalpation.addEventListener("click", function(){
    shoulderPalpation.innerHTML=`<p><span>Palpation:</span><br> glenohumeral joint intact with some anterior translation<br>
    No subluxation or dislocation</p>`
})

shoulderX.addEventListener("click", function(){
    shoulderX.innerHTML=`<p><span>X-ray:</span><br>
    No fractures<br>
    Clavicle, scapula and ribs intact</p>`;
})

shoulderUltrasound.addEventListener("click", function(){
    shoulderUltrasound.innerHTML=`<p><span>Ultrasound:</span><br>
    All rotator cuff tendons intact <br>
    Subacromial bursa inflammed <br>
    Posterior labrum inflamed </p>`;
})
shoulderStrength.addEventListener("click", function(){
    shoulderStrength.innerHTML=`<p><span>Strength:</span><br>
    Elbow flexion: 4/5 p<br>
    Elbow extension: 4/5 p<br>
    Internal rotation: 4/5 p <br>
    External rotation: not through range <br>
    Flexion: not through range <br>
    Extension: not through range </p>`;
})

shoulderSpecific.addEventListener("click", function(){
    shoulderSpecific.innerHTML=`<p><span>Specific tests:</span><br>
    Crank's test -> negative <br>
    Drop-arm test -> positive <br>
    O'Brian's test -> negative <br>
    Honrblower -> positive <br>
    Neer's test -> <br>
    Full can -> <br>
    Empty can -> <br>
    Infraspinatus-> <br>
    Belly press test -> <br>
    Lift off test -> </p>`;
})

//make shoulder test information disappear
shoulderTests.addEventListener("click", function(){
    shoulderRange.innerHTML=`Range`;
    shoulderPalpation.innerHTML=`Palpation`;
    shoulderX.innerHTML=`X-ray`;
    shoulderUltrasound.innerHTML=`Ultrasound`;
    shoulderStrength.innerHTML=`Strength`;
    shoulderSpecific.innerHTML=`Specific tests`;
})

//make knee tests appear
kneeRange.addEventListener("click", function(){
    kneeRange.innerHTML=`<p><span>Range:</span><br>
    Flexion: full<br>
    Extension: full</p>`;
})

kneePalpation.addEventListener("click", function(){
    kneePalpation.innerHTML=`<p><span>Palpation/observation:</span><br>
    No tenderness or warmth on palpation<br>
    No visible swelling</p>`;
})

kneeStrength.addEventListener("click", function(){
    kneeStrength.innerHTML=`<p><span>Strength:</span><br>
    Knee extension: 5/5<br>
    Knee flexion: 4/5<br>
    Hip flexion: 4/5 (min resistance only)<br>
    Hip extension: 4/5<br>
    Hip abduction: 5/5<br>
    Hip adduction: 4/5<br>
    Plantarflexion: 5/5<br>
    Dorsiflexion: 5/5</p>`;
})

kneeSpecific.addEventListener("click", function(){
    kneeSpecific.innerHTML=`<p><span>Specific tests:</span><br>
    Q-angle -> <br>
    Crepitis -> negative</p>`;
})

kneeFunctional.addEventListener("click", function(){
    kneeFunctional.innerHTML=`<p><span>Functional tests:</span><br>
    Prolonged sitting -> painful<br>
    Double leg squat -> minimal pain at EOR flexion<br>
    Single leg squat -> increased pain at EOR flexion <br>
    Ascending stairs -> no pain <br>
    Descending stairs -> pain reported only when fatigued </p>`;
})

kneeAnterior.addEventListener("click", function(){
    kneeAnterior.innerHTML=`<p><span>Anterior Knee Pain Scale:</span><br>
    Score: xx </p>`;
})

//make knee test information disappear
kneeTests.addEventListener("click", function(){
    kneeRange.innerHTML=`Range`;
    kneePalpation.innerHTML=`Palpation/observation`;
    kneeStrength.innerHTML=`Strength`;
    kneeSpecific.innerHTML=`Specific tests`;
    kneeFunctional.innerHTML=`Functional tests`;
    kneeAnterior.innerHTML=`Anterior Knee Pain Scale`;
})

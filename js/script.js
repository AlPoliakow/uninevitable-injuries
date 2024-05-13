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

// nav menu
const toggle = document.querySelector('.toggle');
const nav = document.querySelector('.full-screen-nav');
const backdrop = document.querySelector('.backdrop');

toggle.addEventListener('click', () => nav.classList.add('open-nav'));
backdrop.addEventListener('click', () => nav.classList.remove('open-nav'));

function closeNav() {
    nav.classList.remove('open-nav');
}

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
    External rotation: -10 degrees</p>
    Passive range only partially tested:
    `
})

shoulderPalpation.addEventListener("click", function(){
    shoulderPalpation.innerHTML=`<p><span>Palpation:</span>
    <br> Glenohumeral joint intact with some anterior translation<br>
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
    <a href="https://www.physio-pedia.com/Crank_Test" target="_blank" rel=“noopener noreferrer”>Crank's test</a> (glenoid labral tears)-> negative <br>
    <a href="https://www.physio-pedia.com/Drop_Arm_Test" target="_blank" rel=“noopener noreferrer”>Drop-arm test</a> (supraspinatus) -> positive <br>
    <a href="https://www.physio-pedia.com/O%27Briens_Test" target="_blank" rel=“noopener noreferrer”>O'Brian's test</a> (SLAP lesion) -> negative <br>
    <a href="https://www.physio-pedia.com/Hawkins_/_Kennedy_Impingement_Test_of_the_Shoulder" target="_blank" rel=“noopener noreferrer”>Hawkin's Kennedy</a> (impingement) -> negative <br>
    <a href="https://www.physio-pedia.com/Neer_Test" target="_blank" rel=“noopener noreferrer”>Neer's test</a>  (impingement)-> negative<br>
    <a href="https://www.physio-pedia.com/Yocum's_Test" target="_blank" rel=“noopener noreferrer”>Yocum's test</a> (subacromial impingment) -> positive <br>
    <a href="https://www.physio-pedia.com/Hornblower%27s_Sign" target="_blank" rel=“noopener noreferrer”>Hornblower</a>  (teres minor) -> positive <br>
    <a href="https://www.physio-pedia.com/External_Rotation_Lag_Sign_(ERLS)_Test" target="_blank" rel=“noopener noreferrer”>External rotation lag</a> (supraspinatus and infraspinatus)-> negative <br>
    <a href="https://www.physio-pedia.com/Empty_Can_Test" target="_blank" rel=“noopener noreferrer”>Empty can</a> (supraspinatus) -> positive but pain from internal rotation, not resistance<br>
    <a href="https://www.physio-pedia.com/Infraspinatus_Test" target="_blank" rel=“noopener noreferrer”>Infraspinatus</a>-> positive<br>
    <a href="https://www.physio-pedia.com/Internal_Rotation_Lag_Sign" target="_blank" rel=“noopener noreferrer”>Internal rotation lag</a> (subscapularis)-> negative <br>
    <a href="https://www.physio-pedia.com/Belly_Press_Test" target="_blank" rel=“noopener noreferrer”>Belly press test </a>(subscapularis) -> positive <br>
    <a href="https://www.physio-pedia.com/Gerbers_Test" target="_blank" rel=“noopener noreferrer”>Gerber's Lift off test</a> (subscapularis) -> positive/unable </p>`;
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

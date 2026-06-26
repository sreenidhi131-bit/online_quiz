// KEEP YOUR quizData ABOVE THIS
const quizData = {
MCA:{
CProgramming: [
{q:"C language was developed by?",a:"Dennis Ritchie",b:"James Gosling",c:"Bjarne Stroustrup",d:"Guido van Rossum",cAns:"a"},
{q:"Which symbol is used to end a statement in C?",a:":",b:";",c:",",d:".",cAns:"b"},
{q:"Which function is used to display output?",a:"input()",b:"printf()",c:"display()",d:"show()",cAns:"b"},
{q:"Which function is used to take input?",a:"scanf()",b:"input()",c:"cin",d:"read()",cAns:"a"},
{q:"Which header file is commonly used for input and output?",a:"math.h",b:"stdio.h",c:"string.h",d:"conio.h",cAns:"b"},
{q:"Which data type stores whole numbers?",a:"float",b:"char",c:"int",d:"double",cAns:"c"},
{q:"Which loop executes at least once?",a:"for",b:"while",c:"do while",d:"foreach",cAns:"c"},
{q:"Which operator is used for assignment?",a:"==",b:"=",c:"!=",d:"<=",cAns:"b"},
{q:"Which keyword is used to define a constant?",a:"constant",b:"final",c:"#define",d:"const",cAns:"d"},
{q:"What is the extension of a C program file?",a:".cpp",b:".java",c:".c",d:".py",cAns:"c"}
],
Java: [

{q:"Java was developed by?",a:"James Gosling",b:"Dennis Ritchie",c:"Bjarne Stroustrup",d:"Guido van Rossum",cAns:"a"},

{q:"Java is a ___ language.",a:"Procedural",b:"Object Oriented",c:"Markup",d:"Query",cAns:"b"},

{q:"Which keyword is used to create an object?",a:"create",b:"new",c:"object",d:"class",cAns:"b"},

{q:"Which method is the entry point of a Java program?",a:"start()",b:"main()",c:"run()",d:"execute()",cAns:"b"},

{q:"Which package is automatically imported in Java?",a:"java.io",b:"java.lang",c:"java.util",d:"java.net",cAns:"b"},

{q:"Which symbol is used to end a statement in Java?",a:":",b:";",c:",",d:".",cAns:"b"},

{q:"Which data type stores decimal values?",a:"int",b:"char",c:"float",d:"boolean",cAns:"c"},

{q:"Which keyword is used for inheritance?",a:"extends",b:"implements",c:"inherits",d:"super",cAns:"a"},

{q:"Which loop is used when the number of iterations is known?",a:"while",b:"do while",c:"for",d:"foreach",cAns:"c"},

{q:"Java source file extension is?",a:".java",b:".class",c:".js",d:".jar",cAns:"a"}

],
OS: [

{q:"Operating System is a?",a:"Application Software",b:"System Software",c:"Programming Language",d:"Database",cAns:"b"},

{q:"Which of the following is an Operating System?",a:"Windows",b:"MS Word",c:"Chrome",d:"Photoshop",cAns:"a"},

{q:"Which OS is open source?",a:"Windows",b:"Linux",c:"macOS",d:"DOS",cAns:"b"},

{q:"Which scheduling algorithm works on First Come First Serve?",a:"FCFS",b:"Round Robin",c:"Priority",d:"SJF",cAns:"a"},

{q:"Which component manages memory?",a:"Compiler",b:"Operating System",c:"Browser",d:"Database",cAns:"b"},

{q:"Which memory is temporary?",a:"ROM",b:"RAM",c:"Hard Disk",d:"SSD",cAns:"b"},

{q:"What does CPU stand for?",a:"Central Process Unit",b:"Central Processing Unit",c:"Control Processing Unit",d:"Computer Processing Unit",cAns:"b"},

{q:"Which OS feature allows multiple tasks simultaneously?",a:"Multiprogramming",b:"Formatting",c:"Compiling",d:"Encryption",cAns:"a"},

{q:"Which command is used to create a directory in Linux?",a:"mkdir",b:"rmdir",c:"cd",d:"dir",cAns:"a"},

{q:"Which state comes after Ready state in process execution?",a:"Running",b:"Waiting",c:"Blocked",d:"Terminated",cAns:"a"}

],

WebApplication: [

{q:"What is a Web Application?",a:"Desktop Software",b:"Application accessed through a browser",c:"Operating System",d:"Database",cAns:"b"},

{q:"Which language is used to structure web pages?",a:"Java",b:"HTML",c:"Python",d:"SQL",cAns:"b"},

{q:"Which language is mainly used for styling web pages?",a:"CSS",b:"C",c:"Java",d:"PHP",cAns:"a"},

{q:"Which language is used to add interactivity to websites?",a:"JavaScript",b:"HTML",c:"SQL",d:"XML",cAns:"a"},

{q:"Which protocol is used for web communication?",a:"FTP",b:"SMTP",c:"HTTP",d:"TCP",cAns:"c"},

{q:"Which HTML tag is used to create a form?",a:"<form>",b:"<input>",c:"<table>",d:"<body>",cAns:"a"},

{q:"Which CSS property changes text color?",a:"font-color",b:"text-color",c:"color",d:"background",cAns:"c"},

{q:"Which JavaScript function displays a popup message?",a:"print()",b:"popup()",c:"alert()",d:"show()",cAns:"c"},

{q:"Which database language is commonly used with web applications?",a:"SQL",b:"C",c:"Python",d:"XML",cAns:"a"},

{q:"Which technology is used to connect frontend and backend?",a:"API",b:"Compiler",c:"Editor",d:"Browser",cAns:"a"}

]
},
CSE:{
html: [
{q:"HTML stands for?",a:"Hyper Text Markup Language",b:"High Text Machine Language",c:"Hyper Tool ML",d:"None",cAns:"a"},
{q:"Which tag creates a link?",a:"<a>",b:"<link>",c:"<href>",d:"<url>",cAns:"a"},
{q:"Which tag is for images?",a:"<img>",b:"<image>",c:"<src>",d:"<pic>",cAns:"a"},
{q:"HTML is a ___ language",a:"Programming",b:"Markup",c:"Scripting",d:"Query",cAns:"b"},
{q:"Which tag creates list?",a:"<ul>",b:"<list>",c:"<ol>",d:"Both A & C",cAns:"d"},
{q:"Which tag breaks line?",a:"<break>",b:"<lb>",c:"<br>",d:"<line>",cAns:"c"},
{q:"Which tag creates table?",a:"<table>",b:"<tab>",c:"<tr>",d:"<td>",cAns:"a"},
{q:"Which attribute gives URL?",a:"href",b:"src",c:"link",d:"url",cAns:"a"},
{q:"Which tag is heading?",a:"<head>",b:"<h1>",c:"<title>",d:"<p>",cAns:"b"},
{q:"HTML file extension?",a:".ht",b:".html",c:".xml",d:".css",cAns:"b"}
],

css: [
{q:"CSS stands for?",a:"Color Style Sheet",b:"Creative Style Sheet",c:"Cascading Style Sheets",d:"Computer Style Sheet",cAns:"c"},
{q:"Class selector symbol?",a:"#",b:".",c:"*",d:"$",cAns:"b"},
{q:"Change text color?",a:"font-color",b:"text-color",c:"color",d:"fg",cAns:"c"},
{q:"Background color property?",a:"bgcolor",b:"background-color",c:"background",d:"color",cAns:"b"},
{q:"Flexbox is used for?",a:"Animation",b:"Layout",c:"Forms",d:"Database",cAns:"b"},
{q:"Which unit is relative?",a:"px",b:"cm",c:"em",d:"mm",cAns:"c"},
{q:"Hide element?",a:"display:none",b:"hide",c:"invisible",d:"opacity",cAns:"a"},
{q:"Select all elements?",a:"*",b:"#",c:".",d:"$",cAns:"a"},
{q:"CSS file extension?",a:".cs",b:".style",c:".css",d:".html",cAns:"c"},
{q:"Font size property?",a:"text-size",b:"font-style",c:"font-size",d:"size",cAns:"c"}
],

js: [
{q:"JavaScript is used for?",a:"Styling",b:"Structure",c:"Interactivity",d:"Database",cAns:"c"},
{q:"Declare variable?",a:"var",b:"int",c:"string",d:"define",cAns:"a"},
{q:"Click event?",a:"onload",b:"onclick",c:"onhover",d:"onpress",cAns:"b"},
{q:"Single line comment?",a:"<!-- -->",b:"//",c:"/* */",d:"#",cAns:"b"},
{q:"alert() does?",a:"Print",b:"Popup",c:"Log",d:"Style",cAns:"b"},
{q:"Boolean value?",a:"true",b:"1",c:"yes",d:"on",cAns:"a"},
{q:"Compare value & type?",a:"==",b:"=",c:"===",d:"!=",cAns:"c"},
{q:"DOM stands for?",a:"Data Object Model",b:"Document Object Model",c:"Digital Object Model",d:"None",cAns:"b"},
{q:"Get element by ID?",a:"get()",b:"getId()",c:"getElementById()",d:"query()",cAns:"c"},
{q:"JS runs on?",a:"Server",b:"Client",c:"Database",d:"Compiler",cAns:"b"}
]

},
ECE: {

Digital: [

{q:"What is a Logic Gate?",a:"Memory",b:"Switching Circuit",c:"Processor",d:"Register",cAns:"b"},

{q:"How many inputs does a NOT gate have?",a:"1",b:"2",c:"3",d:"4",cAns:"a"},

{q:"The output of an AND gate is HIGH when?",a:"Any input is HIGH",b:"All inputs are HIGH",c:"All inputs are LOW",d:"Any input is LOW",cAns:"b"},

{q:"The output of an OR gate is LOW when?",a:"All inputs are LOW",b:"All inputs are HIGH",c:"Any input is HIGH",d:"One input is LOW",cAns:"a"},

{q:"Which gate is called a Universal Gate?",a:"AND",b:"OR",c:"NAND",d:"XOR",cAns:"c"},

{q:"How many possible outputs does a binary digit have?",a:"4",b:"8",c:"2",d:"16",cAns:"c"},

{q:"A Flip-Flop is used as?",a:"Amplifier",b:"Memory Element",c:"Sensor",d:"Counter",cAns:"b"},

{q:"What is the binary equivalent of decimal 5?",a:"101",b:"110",c:"111",d:"100",cAns:"a"},

{q:"Which gate gives HIGH output when inputs are different?",a:"AND",b:"OR",c:"XOR",d:"NOT",cAns:"c"},

{q:"A Half Adder is used to?",a:"Subtract Binary Numbers",b:"Multiply Binary Numbers",c:"Add Two Binary Digits",d:"Store Data",cAns:"c"}

],

Microprocessor: [

{q:"8086 is a?",a:"Microprocessor",b:"Sensor",c:"Transistor",d:"IC",cAns:"a"},

{q:"8086 is a ___ bit microprocessor.",a:"4",b:"8",c:"16",d:"32",cAns:"c"},

{q:"Which company developed the 8086 microprocessor?",a:"IBM",b:"Intel",c:"AMD",d:"Motorola",cAns:"b"},

{q:"What is the function of the ALU?",a:"Store Data",b:"Perform Arithmetic and Logic Operations",c:"Control Input Devices",d:"Generate Clock Signals",cAns:"b"},

{q:"Which register stores the address of the next instruction?",a:"AX",b:"BX",c:"Program Counter",d:"DX",cAns:"c"},

{q:"What does CPU stand for?",a:"Central Process Unit",b:"Central Processing Unit",c:"Computer Processing Unit",d:"Control Processing Unit",cAns:"b"},

{q:"Which bus carries data between CPU and memory?",a:"Address Bus",b:"Control Bus",c:"Data Bus",d:"System Bus",cAns:"c"},

{q:"What is the size of the data bus in 8086?",a:"8 bits",b:"16 bits",c:"32 bits",d:"64 bits",cAns:"b"},

{q:"Which memory is volatile?",a:"ROM",b:"EEPROM",c:"RAM",d:"Flash Memory",cAns:"c"},

{q:"Which instruction is used to transfer data in 8086?",a:"ADD",b:"MOV",c:"SUB",d:"MUL",cAns:"b"},

{q:"What is the maximum memory that 8086 can address?",a:"64 KB",b:"256 KB",c:"1 MB",d:"4 MB",cAns:"c"}

]

},

EEE: {

Machines: [

{q:"Transformer works on?",a:"DC",b:"AC",c:"Battery",d:"Motor",cAns:"b"},

{q:"Which machine converts electrical energy into mechanical energy?",a:"Generator",b:"Transformer",c:"Motor",d:"Battery",cAns:"c"},

{q:"Which machine converts mechanical energy into electrical energy?",a:"Motor",b:"Generator",c:"Transformer",d:"Rectifier",cAns:"b"},

{q:"A transformer operates on the principle of?",a:"Self Induction",b:"Mutual Induction",c:"Electrolysis",d:"Resistance",cAns:"b"},

{q:"Which type of current does a transformer require?",a:"DC",b:"AC",c:"Both AC and DC",d:"Pulsating DC",cAns:"b"},

{q:"The stationary part of a motor is called?",a:"Rotor",b:"Commutator",c:"Stator",d:"Armature",cAns:"c"},

{q:"The rotating part of an electrical machine is called?",a:"Stator",b:"Rotor",c:"Core",d:"Pole",cAns:"b"},

{q:"Which motor is commonly used in electric fans?",a:"DC Series Motor",b:"Stepper Motor",c:"Single-Phase Induction Motor",d:"Universal Motor",cAns:"c"},

{q:"The efficiency of a transformer is generally?",a:"20-40%",b:"40-60%",c:"60-80%",d:"90-98%",cAns:"d"},

{q:"What is the unit of transformer rating?",a:"kW",b:"HP",c:"kVA",d:"Volt",cAns:"c"}

]

},
Civil:{

StructuralEngineering: [

{q:"Which material is mainly used in RCC?",a:"Wood",b:"Steel and Concrete",c:"Plastic",d:"Glass",cAns:"b"},

{q:"RCC stands for?",a:"Reinforced Cement Concrete",b:"Rapid Cement Concrete",c:"Ready Concrete Construction",d:"Road Construction Concrete",cAns:"a"},

{q:"Which instrument is used for measuring angles in surveying?",a:"Theodolite",b:"Compass",c:"Barometer",d:"Scale",cAns:"a"},

{q:"Which cement is commonly used in construction?",a:"White Cement",b:"Ordinary Portland Cement",c:"Quick Cement",d:"Natural Cement",cAns:"b"},

{q:"Foundation is used to?",a:"Support the structure",b:"Paint the building",c:"Increase height",d:"Decorate walls",cAns:"a"},

{q:"Which beam carries load mainly by bending?",a:"Cantilever Beam",b:"Flexural Beam",c:"Column",d:"Slab",cAns:"b"},

{q:"Unit of force is?",a:"Pascal",b:"Newton",c:"Watt",d:"Joule",cAns:"b"},

{q:"Which test is used to determine concrete strength?",a:"Compression Test",b:"Tensile Test",c:"Impact Test",d:"Hardness Test",cAns:"a"},

{q:"Which structure supports vertical loads?",a:"Column",b:"Door",c:"Window",d:"Pipe",cAns:"a"},

{q:"Which type of load acts permanently on a structure?",a:"Dead Load",b:"Live Load",c:"Wind Load",d:"Earthquake Load",cAns:"a"}

]

},
Mechanical:{

Thermodynamics: [

{q:"Thermodynamics deals with?",a:"Heat and Energy",b:"Electricity",c:"Programming",d:"Construction",cAns:"a"},

{q:"Which law states energy cannot be created or destroyed?",a:"Zeroth Law",b:"First Law",c:"Second Law",d:"Third Law",cAns:"b"},

{q:"SI unit of temperature is?",a:"Celsius",b:"Kelvin",c:"Fahrenheit",d:"Joule",cAns:"b"},

{q:"Heat always flows from?",a:"Cold to Hot",b:"Hot to Cold",c:"Equal Temperature",d:"None",cAns:"b"},

{q:"Which device converts heat energy into mechanical work?",a:"Engine",b:"Transformer",c:"Generator",d:"Battery",cAns:"a"},

{q:"The efficiency of an ideal heat engine is given by?",a:"Carnot Efficiency",b:"Newton Law",c:"Ohm Law",d:"Hooke Law",cAns:"a"},

{q:"What is the SI unit of pressure?",a:"Watt",b:"Pascal",c:"Newton",d:"Joule",cAns:"b"},

{q:"Boiling point of water at standard pressure?",a:"50°C",b:"100°C",c:"150°C",d:"212°C",cAns:"b"},

{q:"A closed system allows transfer of?",a:"Mass only",b:"Energy only",c:"Mass and Energy",d:"Neither",cAns:"b"},

{q:"Internal energy is represented by?",a:"Q",b:"U",c:"W",d:"P",cAns:"b"}

]

},
AIML:{

MachineLearning: [

{q:"What does AI stand for?",a:"Artificial Intelligence",b:"Automated Information",c:"Advanced Interface",d:"Artificial Integration",cAns:"a"},

{q:"Machine Learning is a subset of?",a:"Database",b:"Artificial Intelligence",c:"Networking",d:"Operating System",cAns:"b"},

{q:"Which type of learning uses labeled data?",a:"Supervised Learning",b:"Unsupervised Learning",c:"Reinforcement Learning",d:"Deep Learning",cAns:"a"},

{q:"Which algorithm is used for classification?",a:"KNN",b:"Apriori",c:"K-Means",d:"PCA",cAns:"a"},

{q:"K in KNN stands for?",a:"Knowledge",b:"Kernel",c:"Nearest Neighbors",d:"Key",cAns:"c"},

{q:"Which algorithm groups similar data?",a:"Decision Tree",b:"K-Means",c:"Linear Regression",d:"Naive Bayes",cAns:"b"},

{q:"Decision Tree is mainly used for?",a:"Classification",b:"Storage",c:"Encryption",d:"Networking",cAns:"a"},

{q:"Which metric is commonly used for regression?",a:"Accuracy",b:"Mean Squared Error",c:"Precision",d:"Recall",cAns:"b"},

{q:"Which library is popular for Machine Learning in Python?",a:"NumPy",b:"Scikit-learn",c:"Tkinter",d:"Flask",cAns:"b"},

{q:"What does CNN stand for in Deep Learning?",a:"Convolutional Neural Network",b:"Central Neural Network",c:"Computer Neural Node",d:"Convolution Number Network",cAns:"a"}

]

},
CSBS:{

BusinessAnalytics: [

{q:"What does CSBS stand for?",a:"Computer Science and Business Systems",b:"Computer Software Business Studies",c:"Computer System Business Science",d:"Corporate Business Software",cAns:"a"},

{q:"Business Analytics is mainly used for?",a:"Decision Making",b:"Gaming",c:"Networking",d:"Compiling",cAns:"a"},

{q:"Which language is widely used for data analysis?",a:"Python",b:"HTML",c:"CSS",d:"C",cAns:"a"},

{q:"Which tool is commonly used for business reports?",a:"Excel",b:"Photoshop",c:"AutoCAD",d:"VS Code",cAns:"a"},

{q:"What does KPI stand for?",a:"Key Performance Indicator",b:"Knowledge Process Indicator",c:"Key Program Integration",d:"Knowledge Product Index",cAns:"a"},

{q:"Which chart is best for showing trends over time?",a:"Line Chart",b:"Pie Chart",c:"Bar Chart",d:"Scatter Plot",cAns:"a"},

{q:"Which database language is used to retrieve data?",a:"HTML",b:"SQL",c:"Java",d:"CSS",cAns:"b"},

{q:"Which process finds patterns in data?",a:"Data Mining",b:"Formatting",c:"Debugging",d:"Compiling",cAns:"a"},

{q:"Which term describes raw facts and figures?",a:"Information",b:"Knowledge",c:"Data",d:"Analytics",cAns:"c"},

{q:"Which dashboard metric helps monitor business performance?",a:"KPI",b:"Compiler",c:"CPU",d:"Cache",cAns:"a"}

]

}

};
let userName="";
let current=0;
let score=0;
let quiz=[];
let timer;
let timeLeft=30;

let selectedBranch="";
let selectedSubject="";
let selectedCourse = "";

// ---------- SIGNUP ----------

async function signup(){

let username=
document.getElementById("username").value.trim();

let password=
document.getElementById("password").value.trim();
console.log(username);
console.log(password);

if(!username || !password){

showMessage(
"Enter username and password",
"red"
);

return;

}

try {

    let formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);

    let res = await fetch("signup.php", {
        method: "POST",
        body: formData
    });

    let msg = await res.text();

    showMessage(msg, "green");
	document.getElementById("username").value = "";
document.getElementById("password").value = "";

}
catch {

    showMessage("Signup Failed", "red");

}
}


// ---------- LOGIN ----------

async function login(){

    let username =
    document.getElementById("username").value.trim();

    let password =
    document.getElementById("password").value.trim();

    if(!username || !password){

        showMessage(
        "Enter username and password",
        "red"
        );

        return;
    }

    try {

        let formData = new FormData();
        formData.append("username", username);
        formData.append("password", password);

        let res = await fetch("login.php", {
            method: "POST",
            body: formData
        });

        let user = await res.json();

        if(user.success){

		userName = user.username;

		localStorage.setItem("loggedInUser",userName);

		document.getElementById("startScreen").classList.add("hidden");
		document.getElementById("dashboardScreen").classList.remove("hidden");

		initializeUser();
		loadDashboard();

		}
        else{

            showMessage(user.message, "white");

        }

    }
    catch{

        showMessage("Server Error", "white");

    }

}


// ---------- USER ----------

function initializeUser(){

let users=
JSON.parse(
localStorage.getItem(
"quizUsers"
)
)||{};

if(!users[userName]){

users[userName]={

lastScore:0,
bestScore:0

};

}

localStorage.setItem(
"quizUsers",
JSON.stringify(users)
);

}


function loadDashboard(){

let users=
JSON.parse(
localStorage.getItem(
"quizUsers"
)
)||{};

let user =
users[userName] || {
lastScore:0,
bestScore:0
};
document
.getElementById(
"dashboardUser"
)
.innerText=
userName;

document
.getElementById(
"lastScore"
)
.innerText=
`🏆 Last Score : ${user.lastScore}`;

document
.getElementById(
"bestScore"
)
.innerText=
`⭐ Best Score : ${user.bestScore}`;

document
.getElementById(
"totalBranches"
)
.innerText=
`📚 Total Categories : ${
Object.keys(
quizData
).length
}`;

}


// ---------- NAVIGATION ----------

function openCategories(){

    hideAll();

    document
    .getElementById("courseScreen")
    .classList.remove("hidden");

}

function hideAll(){

[
"dashboardScreen",
"courseScreen",
"branchScreen",
"subjectScreen",
"quizScreen",
"resultScreen"
]

.forEach(id=>{

let el =
document.getElementById(id);

if(el){
el.classList.add("hidden");
}

});

}
function selectCourse(course){

selectedCourse = course;

hideAll();

document
.getElementById("branchScreen")
.classList.remove("hidden");

let branches = [];

if(course === "UG"){

branches = [
"Civil",
"Mechanical",
"EEE",
"ECE",
"CSE",
"CSE(AIML)",
"CSE(CSBS)",
"EEE(VLSI)",
"CSE(RAI)"
];

}
else{

branches = [
"DECS",
"CADS",
"PES",
"AIDS",
"MCA"
];

}

let html = "";

branches.forEach(branch=>{

html += `
<button onclick="selectBranch('${branch}')">
${branch}
</button>
`;

});

document.getElementById("branchHeading").innerText =
course + " Branches";

document.getElementById("branchButtons").innerHTML =
html;

}
function selectBranch(branch){

selectedBranch=
branch;

hideAll();

document
.getElementById(
"subjectScreen"
)
.classList.remove(
"hidden"
);

document
.getElementById(
"branchTitle"
)
.innerText=
branch+" Subjects";

let subjects=
Object.keys(
quizData[branch]
);

let html="";

subjects.forEach(

s=>{

html+=`

<button
onclick=
"startSubjectQuiz('${s}')">

${s}

</button>

`;

}

);

document
.getElementById(
"subjectButtons"
)
.innerHTML=
html;

}
function backToCourse(){

hideAll();

document
.getElementById("courseScreen")
.classList.remove("hidden");

}


function backToBranches(){

hideAll();

document
.getElementById("branchScreen")
.classList.remove("hidden");

}
// ---------- QUIZ ----------

function startSubjectQuiz(subject){

selectedSubject=
subject;

quiz=
quizData
[selectedBranch]
[subject];

current=0;

score=0;

hideAll();

document
.getElementById(
"quizScreen"
)
.classList.remove(
"hidden"
);
document.getElementById("categoryTitle").innerText =
selectedBranch + " - " + subject;

loadQuestion();

}


function loadQuestion(){

resetTimer();

let q=
quiz[current];

document
.getElementById(
"question"
)
.innerText=q.q;

["a","b","c","d"]

.forEach(

id=>{

document
.getElementById(
id+"_text"
)
.innerText=
q[id];

document
.getElementById(
id
).checked=false;

}

);

let percent = ((current + 1) / quiz.length) * 100;

document.getElementById("progressBar").style.width =
percent + "%";
}


function submitAnswer(){
    clearInterval(timer);

    let selected = [...document.querySelectorAll('input[name="answer"]')].find(i => i.checked);
    
    // 1. If NO answer is selected, advance current safely
    if(!selected){
        current++;

        if(current < quiz.length){
            loadQuestion();
        } else {
            showResult();
        }
        return; // Important: exits function early so it doesn't run the code below
    }

    // 2. If an answer IS selected, check it BEFORE updating 'current'
    let ans = selected.id;
    if(ans === quiz[current].cAns){
        score++;
    }

    current++;

    // 3. Move to next question or show results safely
    if(current < quiz.length){
        loadQuestion();
    } else {
        showResult();
    }
}


function resetTimer(){

clearInterval(
timer
);

timeLeft=30;

timer=
setInterval(

()=>{

timeLeft--;

document
.getElementById(
"timer"
)
.innerText=
`⏱ ${timeLeft}s`;

if(
timeLeft<=0
){

submitAnswer();

}

},

1000

);

}


// ---------- RESULT ----------

function showResult(){
    clearInterval(timer);

    // FIX: If userName is empty or undefined, use "Guest" so it never crashes
    let activeUser = userName;

    // Get current users from storage
    let users = JSON.parse(localStorage.getItem("quizUsers")) || {};

    // SAFETY BLOCK: If the user doesn't exist in the data yet, create them right here.
    // This stops the "Cannot set properties of undefined" crash completely!
    if (!users[activeUser]) {
        users[activeUser] = {
            lastScore: 0,
            bestScore: 0
        };
    }

    // Save scores safely using our activeUser variable
    users[activeUser].lastScore = score;

    if (score > (users[activeUser].bestScore || 0)) {
        users[activeUser].bestScore = score;
    }

    localStorage.setItem("quizUsers", JSON.stringify(users));

    // Change screen visibility
    document.getElementById("quizScreen").classList.add("hidden");
    document.getElementById("resultScreen").classList.remove("hidden");

    let percentage = quiz && quiz.length ? ((score / quiz.length) * 100).toFixed(2) : "0.00";

    // Render the certificate on screen
    document.getElementById("resultScreen").innerHTML = `
    <div class="certificate">
        <h1>🏆 Certificate</h1>
        <h2>${userName}</h2>
        <p>Successfully completed</p>
        <h3>
            ${selectedBranch || ""}
            ${selectedSubject || ""}
        </h3>
        <p>
            Score : ${score} / ${quiz.length}
        </p>
        <p>
            Percentage : ${percentage}%
        </p>
        <button onclick="downloadReport()">
            📄 Download Report
        </button>
        <button onclick="goDashboard()">
            Dashboard
        </button>
    </div>
    `;
}
function goDashboard(){

hideAll();

document
.getElementById(
"dashboardScreen"
)
.classList.remove(
"hidden"
);

loadDashboard();

}


function logoutUser(){

    userName = "";

    document.getElementById("dashboardUser").innerText = "";

    location.reload();

}


function showMessage(msg,color){

let el=
document.getElementById(
"authMessage"
);

el.innerText=
msg;

el.style.color=
color;
}
function downloadReport(){

let report = `
QUIZ REPORT
====================

Username : ${userName}
Branch   : ${selectedBranch}
Subject  : ${selectedSubject}

Score    : ${score}/${quiz.length}

Date     : ${new Date().toLocaleString()}
`;

let blob = new Blob([report], {
   type: "application/msword"
});

let link = document.createElement("a");

link.href = URL.createObjectURL(blob);

link.download = `${userName}_Quiz_Report.doc`;

link.click();
}
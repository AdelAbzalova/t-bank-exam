import "../css/style.css";
import changeValue from "./changeValue";

document.querySelector("#app").innerHTML = `
<div class='header'>
<div class='header-item'>
    <img src="profileImg.svg" alt="avatar" >
</div>
<div class='header-item name-box box'>
    <div class="greetingPhrase" id="greetingPhrase">
        Hello 👋🏻 I’m
    </div>
    <div class="yourInfo">
        <div class='name' id='name'>Karthik SR</div>
        <div class='role' id='role'>UX/UI Designer</div>
    </div>
</div>
<div class='header-item languages box'>
    <div class='title'>
        Languages
    </div>
    <ul class='listLanguages'>
        <li class="languageItem">
            <div class='nameLanguage'>English
            </div>

            <div class="progress-container">
                <div class="progress-value" style="width: 100%;"></div>
            </div>
        </li>
        <li class="languageItem">
            <div class='nameLanguage' >Malayalam
            </div>

            <div class="progress-container">
                <div class="progress-value" style="width: 100%;"></div>
            </div>
        </li>
        <li class="languageItem">
            <div class='nameLanguage'>Hindi
            </div>

            <div class="progress-container">
                <div class="progress-value" style="width: 75%;"></div>
            </div>
        </li>

    </ul>
</div>
</div>

<div class='mainContent'>
<div class="box experienceBox">
    <div class="title">Experience</div>
    <div class="jobList">
        <div class='jobItem recentJob'>
            <div class="topBar">
                <div class='date'>Jun. 2023 - Present</div>
                <div class="recentTag">most recent</div>
            </div>
            <div class="content">
                <div class="jobInfo">
                    <div class="roleName">Marketing Manager</div>
                    <div class="aboutJob">Pankayam | Full-time</div>
                </div>
                <ul class="featuredPoints">
                    <li class="points">Strategy development and planning of campaigns that promote
                        the business and
                        generate genuine traffic</li>
                    <li class="points">SEO Content Creation for Blogs, Website, Social media</li>
                </ul>
            </div>
        </div>
        <div class='jobItem'>
            <div class="topBar">
                <div class='date'>2017 - Present</div>
            </div>
            <div class="content">
                <div class="jobInfo">
                    <div class="roleName">Graphic / Web designer</div>
                    <div class="aboutJob">Freelance</div>
                </div>
                <ul class="featuredPoints">
                    <li class="points">Development of internal projects from scratch, product design
                        of brands
                    </li>
                    <li class="points">Landing page, webapps and hybrid apps</li>
                    <li class="points">Coordinating with outside agencies, art services, web
                        designer,
                        marketing, printers, and colleagues as necessary.</li>
                </ul>
            </div>
        </div>

        <div class='jobItem'>
            <div class="topBar">
                <div class='date'>Sep. 2021 - Jun. 2023</div>
            </div>
            <div class="content">
                <div class="jobInfo">
                    <div class="roleName">Legal Assistant</div>
                    <div class="aboutJob">Law Firm | Intern</div>
                </div>
                <ul class="featuredPoints">
                    <li class="points">Provide administrative support to lawyer and enhance office
                        effectiveness</li>
                    <li class="points">Handle communication with clients, witnesses etc.</li>
                    <li class="points">repare case briefs and summarize depositions, interrogatories
                        and testimony</li>
                </ul>
            </div>
        </div>
    </div>
</div>

<div class="box toolsBox">
    <div class="title">Tools</div>
    <div class="toolsFrame">
        <div class="toolsContent">
            <div class="toolsTag">
                design
            </div>
            <div class='icons'>
                <img src="logoFigma.svg" alt="logoFigma" class="logo" loading="lazy">
                <img src="iconAdobePhotoshop.svg" alt="iconAdobePhotoshop" class="logo" loading="lazy">
                <img src="iconAdobeIllustrator.svg" alt="iconAdobeIllustrator" class="logo" loading="lazy">
                <img src="iconAdobePremiere.svg" alt="iconAdobePremiere" class="logo" loading="lazy">
                <img src="logoNotion.svg" alt="logoNotion" class="logo" loading="lazy">
                <img src="logoMeet.svg" alt="logoMeet" class="logo" loading="lazy">
            </div>
        </div>
        <div class="toolsContent">
            <div class="toolsTag">
                no-code
            </div>
            <div class='icons'>
                <img src="logoZapier.svg" alt="logoZapier" class="logo" loading="lazy">
                <img src="logoWebflow.svg" alt="logoWebflow" class="logo" loading="lazy">
                <img src="logoFramer.svg" alt="logoFramer" class="logo" loading="lazy">
                <img src="logoWordpress.svg" alt="logoWordpress" class="logo" loading="lazy">
            </div>
        </div>
        <div class="toolsContent">
            <div class="toolsTag">
                artoficial intelligence
            </div>
            <div class='icons'>
                <img src="logoChatGPT.svg" alt="logoChatGPT" class="logo" loading="lazy">
                <img src="logoCopilot.svg" alt="logoCopilot" class="logo" loading="lazy">
                <img src="logoMidjourney.svg" alt="logoMidjourney" class="logo" loading="lazy">
            </div>
        </div>
    </div>
</div>

<div class="box educationBox">
    <div class="title">Education</div>

    <div class="educationList">
        <div class="educationItem lastEducation">
            <div class="educationTopBar">
                <div class='educationDate'>
                    2023
                </div>
                <img src='Vector.svg' alt="heart emoji">
            </div>
            <div class="educationContent">
                <div class="educationTitle">UI/UX</div>
                <ul class="educationTags">
                    <li class="educationTag">UX </li>
                    <li class="educationTag">UI </li>
                    <li class="educationTag">research </li>
                    <li class="educationTag">DesignSystem </li>
                    <li class="educationTag">Ui </li>
                    <li class="educationTag">wireframing </li>
                    <li class="educationTag">figma </li>
                    <li class="educationTag">Ux</li>
                </ul>
            </div>
            <div class="schoolName">Coursera</div>
        </div>

        <div class="educationItem">
            <div class="educationTopBar">
            <div class='educationDate'>
            2017-2022
        </div></div>
            <div class="educationContent">
                <div class="educationTitle">Law</div>
                <ul class="educationTags">
                    <li class="educationTag">law</li>
                    <li class="educationTag">legalStudies</li>
                    <li class="educationTag">contracts</li>
                    <li class="educationTag">internationalLaws</li>
                </ul>
            </div>
            <div class="schoolName">University of Kerala</div>
        </div>


        <div class="educationItem">
            <div class="educationTopBar">
            <div class='educationDate'>
            2017
        </div></div>
            <div class="educationContent">
                <div class="educationTitle">Graphic design</div>
                <ul class="educationTags">
                    <li class="educationTag">branding</li>
                    <li class="educationTag">web</li>
                    <li class="educationTag">illustration</li>
                    <li class="educationTag">adobe</li>
                </ul>
            </div>
            <div class="schoolName">Coursrea</div>
        </div>

    </div>
</div>
<div class=" extraBox">
    <div class='box interests'>
        <div class="title">Interests</div>
        <ul class="interestsContent">
            <li class="interestsTag">branding</li>
            <li class="interestsTag">design</li>
            <li class="interestsTag">photography</li>
            <li class="interestsTag">artificial intelligence</li>
            <li class="interestsTag">illustration</li>
            <li class="interestsTag">typography</li>
            <li class="interestsTag">social networks</li>
            <li class="interestsTag">research</li>
            <li class="interestsTag">dron pilot</li>
            <li class="interestsTag">games</li>
        </ul>
    </div>
    <div class='box contacts'>
        <div class='title'>Let´s chat! I´m ready to work on excinting projects</div>
        <div class='email' id='email'>srkarthik.designscape@gmail.com</div>
    </div>
</div>
</div>

`;

let textId = ["greetingPhrase", "name", "role", "email"];
for (let element of textId) {
  changeValue(document.querySelector(`#${element}`), element);
}

let textClasses = [
  "date",
  "roleName",
  "aboutJob",
  "points",
  "title",
  "educationDate",
  "educationTitle",
  "schoolName",
  "nameLanguage",
  "toolsTag",
  "interestsTag",
  "educationTag",
];

for (let elements of textClasses) {
  document.querySelectorAll(`.${elements}`).forEach((el, index) => {
    changeValue(el, `${elements}${index}`);
  });
}

for (let elements of textClasses) {
  document.querySelectorAll(`.${elements}`).forEach((el, index) => {
    if (localStorage.getItem(`${el.className}${index}`)) {
      el.innerHTML = localStorage.getItem(`${el.className}${index}`);
    }
  });
}

for (let id of textId) {
  let element = document.querySelector(`#${id}`);
  if (localStorage.getItem(id)) {
    element.innerHTML = localStorage.getItem(id);
  }
}

document.addEventListener("click", function (e) {
  let targetItem = e.target;
  if (targetItem.closest("[data-ripple]")) {
    let element = targetItem.closest("[data-ripple]");
    let diameter;
    if (element.id == "app") {
      diameter = 24;
    } else {
      diameter = Math.max(element.clientWidth, element.clientHeight);
    }
    let ripple = document.createElement("span");
    let radius = diameter / 2;
    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.left = `${e.clientX - element.getBoundingClientRect().left - radius}px`;
    ripple.style.top = `${e.clientY - element.getBoundingClientRect().top - radius}px`;
    ripple.classList.add("ripple");
    element.appendChild(ripple);
    setTimeout(() => {
      ripple ? element.removeChild(ripple) : null;
    }, 1000);
  }
});

let downloadBtn = document.querySelector("#downloadBtn");
let app = document.querySelector("#app");
downloadBtn.addEventListener("click", function () {
  const opt = {
    margin: 0,
    filename: "document.pdf",
    image: { type: "jpeg", quality: 1 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };
  html2pdf().from(app).set(opt).save();
});

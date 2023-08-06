let links = document.querySelector(".links");
function menu() {
  links.classList.toggle("active");
}
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
const sections = document.querySelectorAll("main, section");
const navItems = document.querySelectorAll(".links a");
function handleScroll() {
  sections.forEach((section, index) => {
    const bounding = section.getBoundingClientRect();
    if (
      bounding.top >= 0 &&
      bounding.bottom <=
        (window.innerHeight || document.documentElement.clientHeight)
    ) {
      navItems.forEach((nav) => nav.classList.remove("active"));
      navItems[index].classList.add("active");
    }
  });
}

window.addEventListener("scroll", handleScroll);

// footer and contact details
let contactJsInfo = document.querySelectorAll("#contact-js-info");
let domainName = document.querySelectorAll("#domainName");
let supportMail = document.querySelectorAll("#supportMail");
let supportNum = document.querySelectorAll("#supportNum");
let signUpBtn = document.querySelectorAll("#signupBtn");
let domainUrl = document.querySelectorAll("#domainUrl");
let companyName = document.querySelectorAll("#companyName");
let companyAddr = document.querySelectorAll("#companyAddr");
const companyData = {
  domainName: "testDoamin",
  domainUrl: "testDoamin.com",
  supportPhone: "+31683984340",
  supportMail: "support@testDoamin.com",
  companyAddress: "De Nieuwe Erven 3, 5431NV CUIJK, The Netherlands",
  companyName: "Varly B.V",
  signupLink: "/f/20ea1805-7747-11ed-919a-02357acf05fc",
};

contactJsInfo.forEach((e) => {
  e.innerHTML += `
   ${companyData.companyName},
   ${companyData.companyAddress}
            <br />
            Email:
            <a href="mailto:${companyData.supportMail}"
              >${companyData.supportMail}</a
            >`;
});
domainName.forEach((e) => {
  e.innerHTML += companyData.domainName;
});
domainUrl.forEach((e) => {
  e.innerHTML += companyData.domainUrl;
});
supportMail.forEach((e) => {
  e.innerHTML = `<a href="mailto:${companyData.supportMail}">${companyData.supportMail}</a>`;
});
supportNum.forEach((e) => {
  e.innerHTML = `<a href="tel:${companyData.supportPhone}">${companyData.supportPhone}</a>`;
});
companyName.forEach((e) => {
  e.innerHTML += companyData.companyName;
});
companyAddr.forEach((e) => {
  e.innerHTML += companyData.companyAddress;
});
signUpBtn.forEach((e) => {
  e.setAttribute("href", `${companyData.signupLink}`);
});
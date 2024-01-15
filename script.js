//============== toggle icon navbar ====================//
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

//=============== scroll section active link ============//
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  //=============== sticky navbar ============//
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  //================ remove toggle icon and navbar when click navbar link (scroll)===============//

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

//====================== scroll reveal ==========================//
//====== effect =========//

ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".home-content, .heading", { origin: "top" });

ScrollReveal().reveal(
  ".home-img,.services-container,.portfolio-box,.contact from",
  { origin: "bottom" }
);

ScrollReveal().reveal(".home-content h1,.about-img", { origin: "left" });

ScrollReveal().reveal(".home-content p,.about-content", { origin: "right" });

//============================== Typed JS =================================//

const typed = new Typed(".multiple-text", {
  strings: [
    "Coder..",
    " Full Stak Java Developer..",
    "Coder..",
    "Full Stack Web Developer..",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

//====================================== Form =================================//

async function onClick() {
  const name = document.getElementById("inpName").value;
  const email = document.getElementById("inpEmail").value;
  const mobile = document.getElementById("inpMobile").value;
  const subject = document.getElementById("inpSubject").value;
  const message = document.getElementById("inpMessage").value;
  console.log(name);
  console.log(email);
  console.log(mobile);
  console.log(subject);
  console.log(message);

  if (!email) {
    return alert("Enter Email");
  }

  const data = JSON.stringify({
    name: name,
    email: email,
    mobile: mobile,
    subject: subject,
    message: message,
  });

  const URL =
    "https://script.google.com/macros/s/AKfycbyFwx_s2OJOr-2VJVFrfbvZ-a6CWCLsKyh0O_1UOcTnAoJT5xUqL6c6CEkK6vjLSnL3/exec";
  try {
    const res = await fetch(`${URL}?data=${data}`, { method: "post" });
    const resJsonData = await res.json();

    document.getElementById("form-message").innerText = resJsonData.status;
  } catch (e) {
    alert(e);
  }
}

// ============================================ spreadSheet form =================================//

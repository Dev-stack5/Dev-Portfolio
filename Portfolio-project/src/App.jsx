import { useEffect, useRef } from "react";
import DroneButton from "./components/DroneButton.jsx";
import "./App.css";
import { useForm } from "react-hook-form"
import Typed from "typed.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useSubmit } from "@formspree/react";
import { startDroneAnimation } from "./components/DroneButton.js";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function App() {


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm()
  const submittoFormspree = useSubmit("xqpkdbjz")
  const demoRef = useRef(null);
  const onSubmit = async (data) => {
    try {
      startDroneAnimation();

      await submittoFormspree(data);

    

      setTimeout(() => {
        reset();
      }, 10000);

    } catch (error) {
      console.log("Form submission Failed", error);
    }
  };
  useEffect(() => {
    // Initialize Typed.js
    const typed = new Typed("#element", {
      strings: [
        "Student",
        "Web Developer",
        "Frontend Developer",
        "Backend Developer",
        "Full Stack Developer",
      ],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    });

    // Email validation
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailError");

    const handleEmailInput = () => {
      const emailValue = emailInput.value;
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (emailValue.trim() === "") {
        emailError.textContent = "Email is required.";
      } else if (!emailPattern.test(emailValue)) {
        emailError.textContent = "Please enter a valid email address.";
      } else {
        emailError.textContent = "✓ Valid email format";
        emailError.style.color = "#c9a45c";
      }
    };

    emailInput?.addEventListener("input", handleEmailInput);

    return () => {
      emailInput?.removeEventListener("input", handleEmailInput);

      if (typed) {
        typed.destroy();
      }
    };
  }, []);

  return (
    <>
      {/* ==================== HEADER / NAVIGATION ==================== */}
      <header>
        <nav>
          <div className="left">Dev's Portfolio</div>

          <div className="right">
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#My-Journey">My Journey</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#contact">Contact Me</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* ==================== MAIN CONTENT ==================== */}
      <main>
        {/* ===== SECTION 1: HOME/HERO ===== */}
        <section className="mainSection" id="home">
          <div className="leftSection">
            Hi,My name is <span className="accent">Dev</span>
            <div>and I am a passionate</div>
            <span id="element"></span>
          </div>

          <div className="rightSection">
            <img src="/Images/images.png" alt="Dev" />
          </div>
        </section>

        <hr />

        {/* ===== SECTION 2: MY JOURNEY ===== */}
        <section className="secondSection" id="My-Journey">
          <div>
            <span className="label-dot"></span>
            My Path. My Progress. My Purpose.
          </div>

          <div className="CodingJourney">
            <h1>
              My Coding <span className="accent">Journey</span>
            </h1>

            <p className="gray">
              From learning the basics to building future applications, my
              coding journey has been filled with challenges and achievements.
            </p>
          </div>

          <div className="seconsectionimg">
            <img
              src="/Images/Learning.png"
              alt="Learning"
              className="journeyimg"
            />
          </div>

          <div className="journey-section">
            {/* ===== LEFT PANEL: TIMELINE ===== */}
            <div className="left-panel">
              <div className="timeline">
                {/* Step 1: Python */}
                <div className="step python-step">
                  <div className="circle">01</div>
                  <div className="line"></div>

                  <div className="card python-card">
                    <div className="cardcircle python-card-circle">
                      <img src="/Images/python-svgrepo-com.svg" alt="" />
                    </div>

                    <div className="cardinfo">
                      <h2>Python</h2>
                      <h1>My first Step</h1>

                      <div className="cardline"></div>

                      <p>
                        Started my coding journey with Python. Learned the
                        basics, logic building and problem-solving skills.
                      </p>

                      <div className="lastdiv">Basic</div>
                    </div>
                  </div>
                </div>

                {/* Step 2: JavaScript */}
                <div className="step javascript-step">
                  <div className="circle">02</div>
                  <div className="line"></div>

                  <div className="card javascript-card">
                    <div className="cardcircle javascript-card-circle">
                      <img
                        src="/Images/javascript-logo-svgrepo-com.svg"
                        alt=""
                      />
                    </div>

                    <div className="cardinfo">
                      <h2>JavaScript</h2>
                      <h1>Levelling Up</h1>

                      <div className="cardline"></div>

                      <p>
                        Moved to JavaScript and explored the world of
                        interactive and dynamic web experiences.
                      </p>

                      <div className="lastdiv">Logic + Projects</div>
                    </div>
                  </div>
                </div>

                {/* Step 3: Web Development */}
                <div className="step web-step">
                  <div className="circle">03</div>
                  <div className="line"></div>

                  <div className="card web-card">
                    <div className="cardcircle web-card-circle">
                      <img src="/Images/internet.svg" alt="" />
                    </div>

                    <div className="cardinfo">
                      <h2>Web Development</h2>
                      <h1>Building the Future</h1>

                      <div className="cardline"></div>

                      <p>
                        Currently Learning Web Development. Creating Projects
                        and turning ideas into real websites
                      </p>

                      <div className="lastdiv">Html + Css + Js + More</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ===== RIGHT PANEL: FUTURE GOALS ===== */}
            <div className="right-panel">
              <div className="right-card">
                <div className="future-title">
                  What Next's <span>🎯</span>
                </div>

                <div className="future-skills">
                  <div className="future-item">
                    <img src="/Images/backend.svg" alt="" />
                    <span>Learn Backend</span>
                  </div>

                  <div className="fut-card-line"></div>

                  <div className="future-item">
                    <img src="/Images/framework.svg" alt="" />
                    <span>Explore FrameWorks</span>
                  </div>

                  <div className="fut-card-line"></div>

                  <div className="future-item">
                    <img src="/Images/project.svg" alt="" />
                    <span>Build Real Projects</span>
                  </div>

                  <div className="fut-card-line"></div>

                  <div className="future-item">
                    <img src="/Images/help-together.svg" alt="" />
                    <span>Help & Grow Together</span>
                  </div>

                  <div className="fut-card-line"></div>

                  <div className="future-item thought">
                    <img src="/Images/Quote.svg" alt="" />
                    <span>Consistancy Today, expertise tommorrow.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr />

        {/* ===== SECTION 3: PROJECTS ===== */}
        <section className="projectsec" id="projects">
          <h1>
            My <span className="accent">Project</span>
          </h1>

          <p className="gray">Real Projects. Real learning. Real Progress</p>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            className="mySwiper"
            loop={true}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
          >
            <SwiperSlide>
              <img src="/Images/netflix-clone.png" alt="Netflix Clone" />
            </SwiperSlide>

            <SwiperSlide>
              <img src="/Images/spotify-clone.png" alt="Spotify Clone" />
            </SwiperSlide>

            <div className="project-info">
              <div className="project-inf">
                <img src="/Images/Always-building.svg" alt="" />
                <span className="white">Always building</span>
                <span className="grey">
                  Every project is a step towards becoming a better developer
                </span>
              </div>

              <div className="pro-card-line"></div>

              <div className="project-inf">
                <img src="/Images/2+-projects.svg" alt="" />
                <span className="white">2+</span>
                <span className="grey">Projects Build</span>
              </div>

              <div className="pro-card-line"></div>

              <div className="project-inf">
                <img src="/Images/Responsive.svg" alt="" />
                <span className="white">100%</span>
                <span className="grey">Responsive</span>
              </div>

              <div className="pro-card-line"></div>

              <div className="project-inf">
                <img src="/Images/backend.svg" alt="" />
                <span className="white">Clean</span>
                <span className="grey">Code</span>
              </div>

              <div className="pro-card-line"></div>

              <div className="project-inf">
                <img src="/Images/Fast-performance.svg" alt="" />
                <span className="white">Fast</span>
                <span className="grey">Performance</span>
              </div>

              <div className="pro-card-line"></div>

              <div className="project-inf">
                <img src="/Images/internet.svg" alt="" />
                <span className="white">Live</span>
                <span className="grey">Website</span>
              </div>
            </div>
          </Swiper>
        </section>

        <hr />

        {/* ===== SECTION 4: ABOUT ===== */}
        <section className="aboutsec" id="about">
          {/* About Intro */}
          <div className="firstsec-about">
            <div>
              <span className="label-dot"></span>
              Get. To. Know. Me
            </div>

            <div className="about">
              <h1>
                About <span className="accent">Me</span>
              </h1>

              <p className="gray">
                Hi! I am Dev Kumar and I am a passionate web developer with a
                strong foundation in both frontend and backend technologies. I
                enjoy creating innovative solutions and continuously learning
                new skills to stay up-to-date with the latest industry trends.
              </p>

              <div className="aboutinfo">
                <div className="aboutinfo-img">
                  <img src="/Images/calender.svg" alt="Calendar" />
                </div>

                <div className="aboutinfo-text">
                  <h2>Student</h2>
                  <p>Class 8th</p>
                </div>

                <div className="aboutinfo-img">
                  <img src="/Images/location.svg" alt="Location" />
                </div>

                <div className="aboutinfo-text">
                  <h2>India</h2>
                  <p>From</p>
                </div>

                <div className="aboutinfo-img">
                  <img src="/Images/backend.svg" alt="Calendar" />
                </div>

                <div className="aboutinfo-text">
                  <h2>Web Developer</h2>
                  <p>Aspiring</p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="midsec-about">
            <div className="creativity">
              <div className="skill">
                <div className="skill-img">
                  <img src="/Images/terminal.svg" alt="Web developer icon" />
                </div>

                <div className="skill-text">
                  <h2>Web Developer</h2>

                  <p>
                    Building responsive websites and web apps with HTML, CSS,
                    JavaScript and React.
                  </p>
                </div>
              </div>

              <div className="skill">
                <div className="skill-img">
                  <img src="/Images/artplate.svg" alt="UI design icon" />
                </div>

                <div className="skill-text">
                  <h2>UI Design Sense</h2>

                  <p>
                    Turning ideas into clean, balanced layouts with thoughtful
                    colors and typography.
                  </p>
                </div>
              </div>

              <div className="skill">
                <div className="skill-img">
                  <img src="/Images/project.svg" alt="Clean code icon" />
                </div>

                <div className="skill-text">
                  <h2>Clean Code</h2>

                  <p>
                    Writing readable, well-organized code that is easy to
                    maintain and grow.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Card */}
          <div className="lastsec-about">
            <div className="lastcard">
              <div className="lasttoknow">
                <div className="lastcard-img">
                  <img src="/Images/backend.svg" alt="Backend icon" />
                </div>

                <div className="lastcard-text">
                  <h2>Dev Kumar</h2>

                  <p>
                    Turning ideas into code and bringing creativity to life.
                  </p>
                </div>
              </div>

              <div className="lastcard-line"></div>

              {/* Quick Links */}
              <div className="quicklinks">
                <h2 className="accent">Quick Links</h2>

                <ul>
                  <li>
                    <a href="#about">About</a>
                  </li>

                  <li>
                    <a href="#services">Services</a>
                  </li>

                  <li>
                    <a href="#home">Home</a>
                  </li>

                  <li>
                    <a href="#projects">Projects</a>
                  </li>

                  <li>
                    <a href="#contact">Contact Me</a>
                  </li>

                  <li>
                    <a href="#My-Journey">My Journey</a>
                  </li>
                </ul>
              </div>

              <div className="lastcard-line"></div>

              {/* Social Links */}
              <div className="FollowMe">
                <h2 className="accent">Follow Me</h2>

                <a
                  href="https://instagram.com/only._x_dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="icons instagram">
                    <img src="/Images/instagram.svg" alt="Instagram" />
                  </div>
                </a>

                <a
                  href="https://x.com/only_dev7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="icons x-twitter">
                    <img src="/Images/X-twitter.svg" alt="X" />
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/dev-kumar-128095428"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="icons linkedin">
                    <img src="/Images/linkedin.svg" alt="LinkedIn" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <hr />

        {/* ===== SECTION 5: SERVICES ===== */}
        <section className="services" id="services">
          <div>
            <span className="label-dot"></span>
            What I Do
          </div>

          <h2>
            Our <span className="accent">Services</span>
          </h2>

          <p className="gray">
            I help brands and individuals turn their ideas into reality through
            innovative web solutions.
          </p>

          <div className="grid">
            {/* Service 1 */}
            <div className="card-sec">
              <div className="service-circle">
                <div className="circle-glow"></div>

                <img src="/Images/terminal.svg" alt="Web Development" />
              </div>

              <div className="card-text">
                <h2>Web Developement</h2>

                <p>
                  Building Responsives fast and modern websites using the latest
                  technology
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="card-sec">
              <div className="service-circle">
                <div className="circle-glow"></div>

                <img src="/Images/artplate.svg" alt="Web Development" />
              </div>

              <div className="card-text">
                <h2>UI/UX Design</h2>

                <p>
                  Designing beautiful intuitive and user-friendly interfaces
                  that create lasting impressions
                </p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="card-sec">
              <div className="service-circle">
                <div className="circle-glow"></div>

                <img src="/Images/phone.svg" alt="Web Development" />
              </div>

              <div className="card-text">
                <h2>Responsive Design</h2>

                <p>
                  Creating fully responsive designs that work perfectly on all
                  devicess and screen size.
                </p>
              </div>
            </div>

            {/* Service 4 */}
            <div className="card-sec">
              <div className="service-circle">
                <div className="circle-glow"></div>

                <img src="/Images/rocket.svg" alt="Web Development" />
              </div>

              <div className="card-text">
                <h2>Performance Optimization</h2>

                <p>
                  Optimizing websites for speed, performance and best user
                  experience.
                </p>
              </div>
            </div>

            {/* Service 5 */}
            <div className="card-sec">
              <div className="service-circle">
                <div className="circle-glow"></div>

                <img src="/Images/setting.svg" alt="Web Development" />
              </div>

              <div className="card-text">
                <h2>Custom Solutions</h2>

                <p>
                  Providing custom solutions tailored to your business needs and
                  goals
                </p>
              </div>
            </div>

            {/* Service 6 */}
            <div className="card-sec">
              <div className="service-circle">
                <div className="circle-glow"></div>

                <img src="/Images/headphone.svg" alt="Web Development" />
              </div>

              <div className="card-text">
                <h2>Support & Maintenance</h2>

                <p>
                  Offering ongoing support and maintenance to keep you website
                  running smoothly.
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr />

        {/* ==================== CONTACT ==================== */}
        <section className="contact-section" id="contact">
          {/* Top Label */}
          <div className="contact-label">
            <span className="label-dot"></span>
            CONTACT ME
          </div>

          <div className="contact-layout">
            {/* ================= LEFT SIDE ================= */}
            <div className="contact-left">
              <h2>
                Let's Work
                <span>Together</span>
              </h2>

              <p className="contact-description">
                Have a project in mind or just want to say hi?
                <br />
                Feel free to reach out. I'd love to hear from you!
              </p>

              {/* Contact Information */}
              <div className="contact-info">
                <div className="info-card">
                  <div className="info-icon">✉</div>

                  <div>
                    <h3>Email</h3>
                    <p>devkumar.koli007@gmail.com</p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-icon">⌕</div>

                  <div>
                    <h3>Phone</h3>
                    <p>+91 7817915902</p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-icon">●</div>

                  <div>
                    <h3>Location</h3>
                    <p>India</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="social-section">
                <span>Follow Me</span>

                <a
                  href="https://instagram.com/only._x_dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon instragram"
                >
                  <img src="/Images/instagram.svg" alt="Instagram" />
                </a>

                <a
                  href="https://X.com/only_dev7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon X-twitter"
                >
                  <img src="/Images/X-twitter.svg" alt="Twitter" />
                </a>

                <a
                  href="https://linkedin.com/in/dev-kumar-128095428"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon linkedin"
                >
                  <img src="/Images/linkedin.svg" alt="LinkedIn" />
                </a>
              </div>
            </div>

            {/* ================= RIGHT SIDE ================= */}
            <div className="contact-form-box">
              {isSubmitting && <p className="submitting-message">Submitting...</p>}
              <form onSubmit={handleSubmit(onSubmit)} className="contact-form">

                {/* Name + Email */}
                <div className="form-row">
                  <div className="input-box">
                    <span>♙</span>

                    <input type="text" placeholder="Your Name" {...register("Name", { required: { value: true, message: "This field is required" } })} />
                    {errors.Name && <p className="red">{errors.Name.message}</p>}
                  </div>

                  <div className="input-box">
                    <span>✉</span>

                    <input
                      type="email"
                      id="email"
                      placeholder="Your Email"
                      {...register("Email", { required: { value: true, message: "This field is required" } })}
                    />
                    {errors.Email && <p className="red">{errors.Email.message}</p>}

                    <small id="emailError"></small>
                  </div>
                </div>

                {/* Subject */}
                <div className="input-box full">
                  <span>◇</span>

                  <input type="text" placeholder="Subject" {...register("Subject", { required: { value: true, message: "This field is required" } })} />
                  {errors.Subject && <p className="red">{errors.Subject.message}</p>}
                </div>

                {/* Message */}
                <div className="message-box">
                  <span>✎</span>

                  <textarea placeholder="Your Message" {...register("Message", { required: { value: true, message: "This field is required" } })}></textarea>
                </div>

                {/* Button */}
                <DroneButton
                  demoRef={demoRef}
                  isSubmitting={isSubmitting}
                />

              </form>
            </div>
          </div>
        </section>
      </main>

      {/* ==================== FOOTER ==================== */}
      <footer>
        <div className="footer-container">
          <div className="footer-left">
            <div className="footer-brand">
              <div className="footer-logo">
                <span>&lt;/&gt;</span>
              </div>

              <div className="footer-brand-text">
                <h3>
                  Dev <span className="accent">Kumar</span>
                </h3>

                <p>Web Developer</p>
              </div>
            </div>

            <div className="footer-social">
              <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                <div className="social-icon">
                  <img src="/Images/X-twitter.svg" alt="X-twitter" />
                </div>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="social-icon">
                  <img src="/Images/linkedin.svg" alt="LinkedIn" />
                </div>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="social-icon">
                  <img src="/Images/instagram.svg" alt="Instagram" />
                </div>
              </a>
            </div>
          </div>

          <div className="footer-middle">
            <div className="footer-column">
              <h4>Quick Links</h4>

              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>

                <li>
                  <a href="#about">About</a>
                </li>

                <li>
                  <a href="#projects">Projects</a>
                </li>

                <li>
                  <a href="#services">Skills</a>
                </li>

                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Projects</h4>

              <ul>
                <li>
                  <a href="#projects">Spotify Clone</a>
                </li>

                <li>
                  <a href="#projects">Netflix Clone</a>
                </li>

                <li>
                  <a href="#projects">Portfolio Website</a>
                </li>

                <li>
                  <a href="#projects">Responsive Blog</a>
                </li>

                <li>
                  <a href="#projects">More Projects</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Services</h4>

              <ul>
                <li>
                  <a href="#services">Web Development</a>
                </li>

                <li>
                  <a href="#services">Frontend Development</a>
                </li>

                <li>
                  <a href="#services">Responsive Design</a>
                </li>

                <li>
                  <a href="#services">UI/UX Design</a>
                </li>

                <li>
                  <a href="#services">Website Optimization</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-right">
            <h4>Let's Connect</h4>

            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">✉</span>
                <p>devkumar.koli007@gmail.com</p>
              </div>

              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <p>+91 7817915902</p>
              </div>

              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <p>India</p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>💜 © 2025 Dev Kumar. All rights reserved. 💜</p>
        </div>
      </footer>
    </>
  );
}

export default App;

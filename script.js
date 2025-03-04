const aboutMe = [
  'I am <span>Rafael Kocharli</span>, a <span>frontend developer</span>. I have experience in creating <span>pet projects</span>, and I love working with React. Currently, I am studying at MPEI (Moscow Power Engineering Institute) majoring in "Information Technology and Computer Systems."',
  "I learned web development on my own, which has allowed me to enhance my skills and confidence in creating cool interactive interfaces. My projects reflect my passion for development and my commitment to continuous learning.",
  "Besides coding, I enjoy playing chess and have a rating of <span>2000 Elo on Chess.com </span>. Chess helps me develop strategic thinking and analytical skills that I apply in my work.",
  "<span>I am always excited about new opportunities and open to collaboration.</span> If you have any questions or want to discuss a project, feel free to reach out!",
];

const p = document.getElementById("aboutMe").children;
console.log(p);
for (let i = 0; i < aboutMe.length; i++) {
  p[i * 2].innerHTML = aboutMe[i];
}

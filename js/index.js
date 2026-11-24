const today = new Date();
const thisYear = today.getFullYear();
//add footer element to the page
const footer = document.createElement("footer");
const copyright = document.createElement("p");
copyright.innerHTML = `© ${thisYear} Alemawit Woldu. All rights reserved.`;
footer.appendChild(copyright);
document.body.appendChild(footer);

// skills section
const skills = ["HTML", "CSS", "JavaScript", "Git", "GitHub"];
const skillsSection = document.getElementById("Skills");
const skillsList = skillsSection.querySelector("ul");
for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerHTML = skills[i];
  skillsList.appendChild(skill);
}
// handle message form submit
const messageForm = document.querySelector("form[name='leave_message']");
messageForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = event.target.usersName.value;
  const email = event.target.email.value;
  const message = event.target.usersMessage.value;
  console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
  const messageSection = document.getElementById("messages");
  const messageList = messageSection.querySelector("ul");
  const newMessage = document.createElement("li");
  const nameLink = document.createElement("a");
  nameLink.href = `mailto:${email}`;
  nameLink.innerText = name;

  const messageText = document.createElement("span");
  messageText.innerText = ` wrote: ${message}`;

  newMessage.appendChild(nameLink);
  newMessage.appendChild(messageText);
  // add a remove button to the message
  const removeButton = document.createElement("button");
  removeButton.innerText = "Remove";
  removeButton.addEventListener("click", function () {
    const entry = removeButton.parentNode;
    entry.remove();
  });
  newMessage.appendChild(removeButton);

  messageSection.style.display = "block";
  messageForm.reset();
  //edit button
  const editButton = document.createElement("button");
  editButton.innerText = "Edit";
  editButton.type = "button";
  editButton.addEventListener("click", function () {
    const updatedMessageText = prompt(
      "Edit your message:",
      messageText.innerText.replace("wrote", "").trim(),
    );
    if (updatedMessageText !== null) {
      messageText.innerText = `wrote: ${updatedMessageText}`;
    }
  });
  newMessage.appendChild(editButton);
  messageList.appendChild(newMessage);
   messageSection.style.display = "block";
   messageForm.reset();
});
// Hide the #messages section, including the Messages header(h2), when the list is empty
const messageSection = document.getElementById("messages");
const messageList = messageSection.querySelector("ul");
if (messageList.children.length === 0) {
  messageSection.style.display = "none";
} else {
  messageSection.style.display = "block";
}


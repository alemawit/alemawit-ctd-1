const today = new Date();
const thisYear = today.getFullYear();
//add footer element to the page
const footer = document.createElement('footer');
const copyright = document.createElement('p');
copyright.innerHTML = `© ${thisYear} Alemawit Woldu. All rights reserved.`;
footer.appendChild(copyright);
document.body.appendChild(footer);

// skills section
const skills = ['HTML', 'CSS', 'JavaScript', 'Git', 'GitHub'];
const skillsSection = document.getElementById("Skills");
const skillsList = skillsSection.querySelector('ul');
for(let i = 0; i <skills.length; i++)
{
    const skill = document.createElement('li');
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill);
}
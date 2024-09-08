document.addEventListener("DOMContentLoaded", () => {
  // Toggle Education Section
  const toggleEducationButton = document.getElementById("toggle-education");
  const educationSection = document.getElementById("education-section");

  toggleEducationButton?.addEventListener("click", () => {
    toggleSection(educationSection!, toggleEducationButton);
  });

  // Toggle Skills Section
  const toggleSkillsButton = document.getElementById("toggle-skills");
  const skillsSection = document.getElementById("skills-section");

  toggleSkillsButton?.addEventListener("click", () => {
    toggleSection(skillsSection!, toggleSkillsButton);
  });

  // Toggle Work Experience Section
  const toggleExperienceButton = document.getElementById("toggle-experience");
  const experienceSection = document.getElementById("experience-section");

  toggleExperienceButton?.addEventListener("click", () => {
    toggleSection(experienceSection!, toggleExperienceButton);
  });

  // Function to toggle visibility and arrow direction
  function toggleSection(section: HTMLElement, button: HTMLElement | null) {
    if (section.style.display === "none") {
      section.style.display = "block";
      button!.textContent = "\u25BC"; // Down arrow
    } else {
      section.style.display = "none";
      button!.textContent = "\u25B6"; // Right arrow
    }
  }
});
document.addEventListener("DOMContentLoaded", function () {
    // Toggle Education Section
    var toggleEducationButton = document.getElementById("toggle-education");
    var educationSection = document.getElementById("education-section");
    toggleEducationButton === null || toggleEducationButton === void 0 ? void 0 : toggleEducationButton.addEventListener("click", function () {
        toggleSection(educationSection, toggleEducationButton);
    });
    // Toggle Skills Section
    var toggleSkillsButton = document.getElementById("toggle-skills");
    var skillsSection = document.getElementById("skills-section");
    toggleSkillsButton === null || toggleSkillsButton === void 0 ? void 0 : toggleSkillsButton.addEventListener("click", function () {
        toggleSection(skillsSection, toggleSkillsButton);
    });
    // Toggle Work Experience Section
    var toggleExperienceButton = document.getElementById("toggle-experience");
    var experienceSection = document.getElementById("experience-section");
    toggleExperienceButton === null || toggleExperienceButton === void 0 ? void 0 : toggleExperienceButton.addEventListener("click", function () {
        toggleSection(experienceSection, toggleExperienceButton);
    });
    // Function to toggle visibility and arrow direction
    function toggleSection(section, button) {
        if (section.style.display === "none") {
            section.style.display = "block";
            button.textContent = "\u25BC"; // Down arrow
        }
        else {
            section.style.display = "none";
            button.textContent = "\u25B6"; // Right arrow
        }
    }
});

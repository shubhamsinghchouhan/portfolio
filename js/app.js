// Portfolio App - Loads dynamic content from data.json
const app = {
  data: null,

  // Initialize app
  async init() {
    await this.loadData();
    this.initExperience();
    this.initSkills();
    this.initSocialLinks();
  },

  // Load data from data.json
  async loadData() {
    try {
      const response = await fetch('data.json');
      if (!response.ok) throw new Error('Failed to load data.json');
      this.data = await response.json();
      console.log('Data loaded successfully', this.data);
    } catch (error) {
      console.error('Error loading data:', error);
    }
  },

  // Render experience items from data.json
  initExperience() {
    if (!this.data || !this.data.experience) return;
    
    const experienceContainer = document.querySelector('#experience .my-auto');
    if (!experienceContainer) return;

    // Find the container for experience items (after the h2)
    let experienceItemsContainer = experienceContainer.querySelector('.experience-items');
    
    if (!experienceItemsContainer) {
      // Create container if it doesn't exist
      experienceItemsContainer = document.createElement('div');
      experienceItemsContainer.className = 'experience-items';
      const heading = experienceContainer.querySelector('h2');
      if (heading) {
        heading.after(experienceItemsContainer);
      }
    }

    // Clear existing items (keep only h2 heading)
    const existingItems = experienceItemsContainer.querySelectorAll('.resume-item');
    existingItems.forEach(item => item.remove());

    // Render each experience item
    this.data.experience.forEach((exp, index) => {
      const itemHTML = `
        <div class="resume-item d-flex flex-column flex-md-row mb-5" data-aos="fade-up">
          <div class="resume-content mr-auto">
            <img src="${exp.logo}" alt="${exp.company}" style="max-width: 8rem; margin-bottom:0.5rem; object-fit: cover; max-height: 44px;">
            <h3 class="mb-0">${exp.position}</h3>
            <p class="lead">${exp.description}</p>
          </div>
          <div class="resume-date text-md-right" data-aos="fade-up">
            <span class="resume-date-box text-primary">${exp.duration}</span>
          </div>
        </div>
        ${index < this.data.experience.length - 1 ? '<hr>' : ''}
      `;
      experienceItemsContainer.insertAdjacentHTML('beforeend', itemHTML);
    });

    // Reinitialize AOS for new elements
    if (typeof AOS !== 'undefined') {
      AOS.refresh();
    }
  },

  // Render skills from data.json
  initSkills() {
    if (!this.data || !this.data.skills) return;
    
    const skillsTable = document.querySelector('#skills table tbody');
    if (!skillsTable) return;

    // Create skills by category row if it doesn't exist
    let skillsRow = skillsTable.querySelector('tr.skills-row');
    if (!skillsRow) {
      skillsRow = document.createElement('tr');
      skillsRow.className = 'skills-row';
      skillsRow.setAttribute('data-aos', 'fade-right');
      skillsRow.innerHTML = `
        <th scope="row">Expert Skills</th>
        <td colspan="2" id="skills-container"></td>
      `;
      // Insert after the first row
      if (skillsTable.querySelector('tr')) {
        skillsTable.querySelector('tr').after(skillsRow);
      }
    }

    const skillsContainer = document.getElementById('skills-container');
    if (skillsContainer) {
      skillsContainer.innerHTML = '';
      this.data.skills.forEach(skill => {
        const chipHTML = `<div class="chip chip-border-primary">${skill.category} <small>(${skill.level})</small></div>`;
        skillsContainer.insertAdjacentHTML('beforeend', chipHTML);
      });
    }
  },

  // Render social links from data.json
  initSocialLinks() {
    if (!this.data || !this.data.social) return;
    
    const socialIcons = document.querySelector('.social-icons');
    if (!socialIcons) return;

    // Clear existing social links (keep Font Awesome icons placeholder)
    const existingLinks = socialIcons.querySelectorAll('a');
    
    // Create links from data.json
    this.data.social.forEach(social => {
      // Check if link already exists
      let link = Array.from(existingLinks).find(a => a.title === social.name);
      
      if (!link) {
        link = document.createElement('a');
        link.className = 'social-link';
        link.setAttribute('data-placement', 'top');
        link.setAttribute('data-toggle', 'tooltip');
        link.title = social.name;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        socialIcons.appendChild(link);
      }

      // Update link
      if (social.type === 'link') {
        link.href = social.url;
      } else if (social.type === 'action') {
        if (social.url.startsWith('mailto:')) {
          link.href = social.url;
        } else if (social.url.startsWith('tel:')) {
          link.href = social.url;
        } else {
          link.href = social.url;
        }
      }

      // Update icon
      link.innerHTML = `<i class="${social.icon}"></i>`;
    });
  }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  app.init();

  // Reinitialize tooltips
  if (typeof $ !== 'undefined') {
    $('[data-toggle="tooltip"]').tooltip();
  }

  // Reinitialize AOS
  if (typeof AOS !== 'undefined') {
    AOS.init();
  }
});

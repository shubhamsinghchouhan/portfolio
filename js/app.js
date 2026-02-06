// Portfolio App - Loads dynamic content from data.json
const app = {
  data: null,

  // Initialize app
  async init() {
    await this.loadData();
    this.initExperience();
    this.initProjects();
    this.initSkills();
    this.initSocialLinks();
  },

  // Load data from window.portfolioData (loaded from data.js)
  async loadData() {
    try {
      console.log('Loading portfolio data...');
      
      if (!window.portfolioData) {
        throw new Error('portfolioData not found. Make sure data.js is loaded.');
      }
      
      this.data = window.portfolioData;
      console.log('✓ Data loaded successfully:', this.data);
      return true;
    } catch (error) {
      console.error('✗ Error loading data:', error);
      console.error('Error details:', error.message);
      
      // Fallback: show message in experience section
      const container = document.querySelector('#experience-container');
      if (container) {
        container.innerHTML = `<p class="text-danger">Error loading experience data: ${error.message}</p>`;
      }
      return false;
    }
  },

  // Render experience items from data.json
  initExperience() {
    console.log('initExperience called. Data available:', !!this.data);
    
    if (!this.data) {
      console.warn('No data available yet');
      return;
    }
    
    if (!this.data.experience) {
      console.warn('No experience data in JSON');
      return;
    }
    
    const experienceContainer = document.querySelector('#experience-container');
    if (!experienceContainer) {
      console.warn('No #experience-container found in DOM');
      return;
    }

    console.log(`Rendering ${this.data.experience.length} experience items`);

    // Clear existing items
    experienceContainer.innerHTML = '';

    // Render each experience item
    this.data.experience.forEach((exp, index) => {
      console.log(`Rendering experience item ${index + 1}:`, exp.company);
      
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
      experienceContainer.insertAdjacentHTML('beforeend', itemHTML);
    });

    console.log('✓ Experience items rendered');

    // Reinitialize AOS for new elements
    if (typeof AOS !== 'undefined') {
      AOS.refresh();
      console.log('✓ AOS refreshed');
    }
  },

  // Render projects from data.json
  initProjects() {
    console.log('initProjects called. Data available:', !!this.data);
    
    if (!this.data || !this.data.projects) {
      console.warn('No projects data in JSON');
      return;
    }
    
    const projectsContainer = document.querySelector('#projects-container');
    if (!projectsContainer) {
      console.warn('No #projects-container found in DOM');
      return;
    }

    console.log(`Rendering ${this.data.projects.length} projects`);

    // Clear existing items
    projectsContainer.innerHTML = '';

    // Group projects into rows of 2 and 3
    const projects = this.data.projects;
    let html = '';

    for (let i = 0; i < projects.length; i += 2) {
      const isLastRow = i + 2 >= projects.length;
      const isSingleProject = i + 1 >= projects.length;
      
      html += '<div class="card-deck mb-2">';
      
      // First project in row
      const proj1 = projects[i];
      html += this.renderProjectCard(proj1);
      
      // Second project in row (if exists)
      if (!isSingleProject) {
        const proj2 = projects[i + 1];
        html += this.renderProjectCard(proj2);
      }
      
      html += '</div>';
    }

    projectsContainer.innerHTML = html;
    console.log('✓ Projects rendered');

    // Reinitialize AOS for new elements
    if (typeof AOS !== 'undefined') {
      AOS.refresh();
      console.log('✓ AOS refreshed for projects');
    }
  },

  // Helper method to render a single project card
  renderProjectCard(project) {
    const responsibilitiesHTML = project.responsibilities
      .map(resp => `<li>${resp}</li>`)
      .join('');

    const stackHTML = project.stack
      .map(tech => `<span class="chip chip-border-primary">${tech}</span>`)
      .join('');

    return `
      <div class="card" data-aos="fade-up">
        <div class="card-header bg-light">
          <div class="row align-items-center">
            <div class="col-6">
              <h4 class="card-title mb-0">#${project.id}: ${project.title}</h4>
            </div>
            <div class="col-6" style="text-align: end;">
              <div class="resume-date text-md-right">
                <span class="resume-date-box text-primary">${project.duration}</span>
              </div>    
            </div>
          </div>
        </div>
        <div class="card-body">
          <div class="resume-content mr-auto">
            <p><mark>Description</mark>: ${project.description}</p>
            <mark>Role and Responsibilities</mark>:
            <ul>
              ${responsibilitiesHTML}
            </ul>
          </div>
        </div>
        <div class="card-footer bg-transparent">
          <div class="project-tech-stack">
            <span class="badge badge-light">Role:</span>
            <span class="chip chip-border-primary">${project.role}</span>
          </div>
          <div class="project-tech-stack">
            <span class="badge badge-light">Stack:</span>
            ${stackHTML}
          </div>
        </div>
      </div>
    `;
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

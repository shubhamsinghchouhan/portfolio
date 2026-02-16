// Portfolio App - Loads dynamic content from data.json

// Theme Manager - Handle dark/light mode toggle
const themeManager = {
  STORAGE_KEY: 'portfolio-theme',
  LIGHT_THEME: 'light',
  DARK_THEME: 'dark',

  // Initialize theme on page load
  init() {
    this.loadThemePreference();
    this.attachToggleListener();
  },

  // Load saved theme preference from localStorage or system preference
  loadThemePreference() {
    // Check localStorage first
    const savedTheme = localStorage.getItem(this.STORAGE_KEY);
    if (savedTheme) {
      this.setTheme(savedTheme);
      return;
    }

    // Fall back to system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.setTheme(this.DARK_THEME);
    } else {
      this.setTheme(this.LIGHT_THEME);
    }
  },

  // Set theme and update DOM
  setTheme(theme) {
    const validTheme = theme === this.DARK_THEME ? this.DARK_THEME : this.LIGHT_THEME;
    document.documentElement.setAttribute('data-theme', validTheme === this.DARK_THEME ? 'dark' : 'light');
    localStorage.setItem(this.STORAGE_KEY, validTheme);
    this.updateToggleIcon(validTheme);
    console.log(`✓ Theme switched to: ${validTheme}`);
  },

  // Toggle between light and dark theme
  toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = current === 'dark' ? this.LIGHT_THEME : this.DARK_THEME;
    this.setTheme(newTheme);
  },

  // Update toggle button icon based on current theme
  updateToggleIcon(theme) {
    const btn = document.getElementById('theme-toggle-btn');
    if (!btn) return;

    const icon = btn.querySelector('i');
    if (!icon) return;

    if (theme === this.DARK_THEME) {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
      btn.title = 'Switch to light mode';
      btn.setAttribute('aria-label', 'Switch to light mode');
    } else {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
      btn.title = 'Switch to dark mode';
      btn.setAttribute('aria-label', 'Switch to dark mode');
    }
  },

  // Attach click listener to toggle button
  attachToggleListener() {
    const btn = document.getElementById('theme-toggle-btn');
    if (btn) {
      btn.addEventListener('click', () => this.toggleTheme());
      console.log('✓ Theme toggle button initialized');
    }
  }
};

const app = {
  data: null,

  // Initialize app - render all dynamic content
  async init() {
    // Initialize theme first
    themeManager.init();

    await this.loadData();
    this.computeAndRenderExperienceDuration();
    this.initExperience();
    this.initProjects();
    this.initSummarySkills();
    this.initSkillIcons();
    this.initSkills();
    this.initTechStack();
    this.initSocialLinks();
  },

  // Compute years and months of experience from data.portfolioStart or fallback
  computeAndRenderExperienceDuration() {
    if (!this.data) return;

    const elYears = document.getElementById('yearsExperience');
    const elMonths = document.getElementById('monthsExperience');

    try {
      let startDate = null;

      if (this.data.careerStart) {
        startDate = new Date(this.data.careerStart);
      }

      // Fallback: try to parse earliest year from experience entries
      if (!startDate && Array.isArray(this.data.experience) && this.data.experience.length) {
        let earliestYear = Infinity;
        this.data.experience.forEach(exp => {
          if (!exp.duration) return;
          const m = exp.duration.match(/(19|20)\d{2}/g);
          if (m && m.length) {
            const year = parseInt(m[0], 10);
            if (year < earliestYear) earliestYear = year;
          }
        });
        if (earliestYear !== Infinity) startDate = new Date(earliestYear, 0, 1);
      }

      // Final fallback to 2017-06-01
      if (!startDate || isNaN(startDate.getTime())) startDate = new Date('2017-06-01');

      const now = new Date();
      let months = (now.getFullYear() - startDate.getFullYear()) * 12 + (now.getMonth() - startDate.getMonth());
      if (months < 0) months = 0;
      const years = Math.floor(months / 12);
      const remMonths = months % 12;

      if (elYears) elYears.textContent = years;
      if (elMonths) elMonths.textContent = remMonths;
    } catch (e) {
      console.warn('Error computing experience duration', e);
    }
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
            <img src="${exp.logo}" alt="${exp.company}" style="max-width: 8rem; margin-bottom:0.5rem; object-fit: cover; max-height: 44px;" data-toggle="tooltip" title="${exp.company}">
            <h3 class="mb-0" data-toggle="tooltip" title="${exp.position} at ${exp.company}">${exp.position}</h3>
            <p class="lead">${exp.description}</p>
          </div>
          <div class="resume-date text-md-right" data-aos="fade-up">
            <span class="resume-date-box text-primary" data-toggle="tooltip" title="${exp.duration}">${exp.duration}</span>
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
      .map(tech => `<span class="chip chip-border-primary" data-toggle="tooltip" title="Used ${tech} in this project">${tech}</span>`)
      .join('');

    return `
      <div class="card" data-aos="fade-up">
        <div class="card-header bg-light">
          <div class="row align-items-center">
            <div class="col-6">
              <h4 class="card-title mb-0" data-toggle="tooltip" title="Project: ${project.title}">#${project.id}: ${project.title}</h4>
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
            <span class="chip chip-border-primary" data-toggle="tooltip" title="My role: ${project.role}">${project.role}</span>
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
  // Render skill icons grid
  initSkillIcons() {
    console.log('initSkillIcons called');
    
    if (!this.data || !this.data.skillIcons) {
      console.warn('No skill icons data available');
      return;
    }
    
    const container = document.getElementById('skill-icons-container');
    if (!container) {
      console.warn('Skill icons container not found');
      return;
    }
    
    container.innerHTML = '';
    
    this.data.skillIcons.forEach(skill => {
      const iconHTML = `<div class="col">
        <img src="${skill.icon}" alt="${skill.name}" data-placement="bottom" data-toggle="tooltip" data-aos="fade-right" title="${skill.name}">
      </div>`;
      container.insertAdjacentHTML('beforeend', iconHTML);
    });
    
    // Use centralized UI initialization for tooltips and AOS
    this._initializeUI();
    
    console.log(`✓ ${this.data.skillIcons.length} skill icons rendered`);
  },

  // Render summary/core skills in the About Me section
  initSummarySkills() {
    console.log('initSummarySkills called');
    
    if (!this.data || !this.data.skills) {
      console.warn('No skills data available');
      return;
    }
    
    const container = document.getElementById('summary-skills-container');
    if (!container) {
      console.warn('Summary skills container not found');
      return;
    }
    
    container.innerHTML = '';
    
    this.data.skills.forEach(skill => {
      const chipHTML = `<div class="chip chip-border-primary" data-toggle="tooltip" title="Proficiency: ${skill.level}. Category: ${skill.category}">${skill.category}</div>`;
      container.insertAdjacentHTML('beforeend', chipHTML);
    });
    
    console.log(`✓ ${this.data.skills.length} summary skill chips rendered`);
  },

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

  // Render tech stack table from data.js
  initTechStack() {
    console.log('initTechStack called');
    
    if (!this.data || !this.data.techStack) {
      console.warn('No tech stack data available');
      return;
    }
    
    const container = document.getElementById('tech-stack-container');
    if (!container) {
      console.warn('No #tech-stack-container found in DOM');
      return;
    }

    let tableHTML = '<table class="table table-hover"><tbody>';
    
    this.data.techStack.forEach(item => {
      const chipsHTML = item.technologies
        .map(tech => `<div class="chip chip-border-primary" data-toggle="tooltip" title="Proficient in ${tech}">${tech}</div>`)
        .join('');
      
      const colspan = item.category.includes('Deployment') || item.category === 'Other' ? 'colspan="2"' : '';
      
      tableHTML += `
        <tr data-aos="fade-right">
          <th scope="row" data-toggle="tooltip" title="Category: ${item.category}">${item.category}</th>
          <td ${colspan}>
            ${chipsHTML}
          </td>
        </tr>
      `;
    });
    
    tableHTML += '</tbody></table>';
    container.innerHTML = tableHTML;
    
    // Use centralized UI initialization for AOS refresh
    this._refreshAOS();
    
    console.log('✓ Tech stack table rendered');
  },

  // Render social links from data.js
  initSocialLinks() {
    console.log('initSocialLinks called. Data available:', !!this.data);
    
    if (!this.data || !this.data.social) {
      console.warn('No social data in data');
      return;
    }
    
    const socialIcons = document.querySelector('#social-icons-container');
    if (!socialIcons) {
      console.warn('No #social-icons-container found in DOM');
      return;
    }

    console.log(`Rendering ${this.data.social.length} social links`);
    
    // Clear existing links
    socialIcons.innerHTML = '';
    
    // Create links from data.js
    this.data.social.forEach(social => {
      const link = document.createElement('a');
      link.className = 'social-link';
      link.setAttribute('data-placement', 'top');
      link.setAttribute('data-toggle', 'tooltip');
      link.title = social.tooltip || social.name;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      
      // Set href based on type
      link.href = social.url;
      
      // Set icon
      link.innerHTML = `<i class="${social.icon}"></i>`;
      
      socialIcons.appendChild(link);
    });

    console.log('✓ Social links rendered');
  },

  // Centralized helper - Initialize all UI components (AOS animations & tooltips)
  _initializeUI() {
    this._refreshAOS();
    this._initializeTooltips();
  },

  // Helper - Refresh AOS animations for dynamically added elements
  _refreshAOS() {
    if (typeof AOS !== 'undefined') {
      AOS.refresh();
      console.log('✓ AOS refreshed');
    }
  },

  // Helper - Initialize Bootstrap tooltips on all elements with data-toggle="tooltip"
  _initializeTooltips() {
    if (typeof $ !== 'undefined' && $.fn.tooltip) {
      $('[data-toggle="tooltip"]').tooltip();
      console.log('✓ Tooltips initialized');
    }
  }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  app.init();

  // Initialize AOS animations on page load
  if (typeof AOS !== 'undefined') {
    AOS.init();
  }
});

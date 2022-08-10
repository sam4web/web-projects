$(document).ready(() => {
  $('#preloader').fadeOut();
});

const Request = 'https://sam4web.github.io/info_data/data.json';

fetch(Request)
  .then((res) => res.json())
  .then((data) => {
    // get projects data form "data.json"
    console.log(data.projects);
    loadProjects(data.projects);
  });

// generate and load projectTemplate in class ".project-container"
const loadProjects = (projects) => {
  let projectTemplate = '';
  projects.forEach((project) => {
    console.log(project);
    projectTemplate += `\n
      <div class="project-item ${project.id % 2 === 0 ? 'right' : 'left'}">
        <div class='project-item__image'>
          <img src='${project.imageLink}' alt='${project.name}' />
          <ul>
            <li title='source code'>
              <a target='_blank' href='${project.sourceCode}'>
                <i class='fa-solid fa-code'></i>
              </a>
            </li>
            ${
              'livePreview' in project
                ? `
            <li title="live site">
            <a target="_blank" href="${project.livePreview}">
            <i class="fa-solid fa-eye"></i>
            </a>
            </li>`
                : ''
            }
          </ul>
        </div>
        <h3 class='project-item__title'>
          <a
            href="${
              'livePreview' in project
                ? project.livePreview
                : project.sourceCode
            }"
            target='_blank'
          >
            ${project.name}
          </a>
        </h3>
      </div>
      <div class='clear'></div>
      <!-- / project item -->
        \n`;
  });
  $('.project-container').html(projectTemplate);
};

$(document).ready(() => {
  $('#preloader').fadeOut();
});

const projects = [
  {
    id: 1,
    name: 'xolcy',
    sourceCode: 'https://bitbucket.org/samdoescode/xolcy/src/',
    livePreview: 'https://xolcy-template.netlify.app/',
  },
  {
    id: 2,
    name: 'socialated',
    sourceCode: 'https://bitbucket.org/samdoescode/socialated/src/',
    livePreview: 'https://socialated-template.netlify.app/',
  },
  {
    id: 3,
    name: 'monst',
    sourceCode: 'https://bitbucket.org/samdoescode/monst/src/',
    livePreview: 'https://monst-template.netlify.app/',
  },
  {
    id: 4,
    name: 'luaz',
    sourceCode: 'https://bitbucket.org/samdoescode/luaz/src/',
    livePreview: 'https://luaz-template.netlify.app/',
  },
  {
    id: 5,
    name: 'hously',
    sourceCode: 'https://bitbucket.org/samdoescode/hously/src/',
    livePreview: 'https://hously-template.netlify.app/',
  },
  {
    id: 6,
    name: 'state info',
    sourceCode: 'https://github.com/sam4web/state_info',
  },
];

let projectTemplate = '';

// console.log($('.project-container').html());

projects.forEach((project) => {
  projectTemplate += `\n 
  <div class="project-item ${project.id % 2 === 0 ? 'right' : 'left'}">
    <div class="project-item__image">
      <img src="./img/project-image/project-${
        project.id >= 10 ? project.id : `0${project.id}`
      }.png" alt="" />
      <ul>
        <li title="source code">
          <a
            target="_blank"
            href="${project.sourceCode}"
          >
            <i class="fa-solid fa-code"></i>
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
    <h3 class="project-item__title">
      <a href="${
        'livePreview' in project ? project.livePreview : project.sourceCode
      }"
       target="_blank">
        ${project.name}
      </a>
    </h3>
  </div>
<div class="clear"></div>
<!-- / project item -->
\n`;
});

$('.project-container').html(projectTemplate);

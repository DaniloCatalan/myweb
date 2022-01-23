const languages = [
  { name: '.NET', level: 'Advanced' },
  { name: 'C#', level: 'Advanced' },
  { name: 'VB', level: 'Advanced' },
  { name: 'BD', level: 'Advanced' },
  { name: 'MSSQL | SQL', level: 'Advanced' },
  { name: 'Classic Asp', level: 'Advanced' },
  { name: 'Rails', level: 'Intermediate' },
  { name: 'Java', level: 'Intermediate' },
  { name: 'JS', level: 'Intermediate' },
  { name: 'VueJS', level: 'Intermediate' },
  { name: 'AWS', level: 'Intermediate' },
  { name: 'MS Windows Server', level: 'Intermediate' },
  { name: 'Scrum', level: 'Basics' },
  { name: 'CSS', level: 'Basics' },
  { name: 'Docker', level: 'Basics' },
  { name: 'Linux', level: 'Basics' },
  { name: 'PHP', level: 'Basics' },
  { name: 'Wordpress', level: 'Basics' }
]

const links = [
  { name: 'Inicio', url_link: 'index.html' },
  { name: 'Antecedentes Académicos', url_link: 'background.html' },
  { name: 'Certificaciones & Cursos', url_link: 'certifications.html' },
  { name: 'Herramientas Tecnológicas', url_link: 'tools.html' },
  { name: 'Proyectos', url_link: 'projects.html' },
  { name: 'Contacto', url_link: 'contact.html' }
]

const courses = [
  { name: 'Fullstack Javascript con Metodologías Ágiles', institution: 'Boolean', category: 'Tecnologicos', position: 1},
  { name: 'Developing Windows Applications with Microsoft Visual Studio 2010 MS10262', institution: 'Teachtraining', category: 'Tecnologicos', position: 1},
  { name: 'Maintaining a Microsoft SQL Server 2008 Data Base MS6231', institution: 'Quintec', category: 'Tecnologicos', position: 1},
  { name: 'Implementing a Microsoft SQL Server 2008 Data Base MS6232', institution: 'Quintec', category: 'Tecnologicos', position: 1},
  { name: 'Implementing and Maintaining MS.SQL Server 2008 Integration Services & Analysis Services MS6234/MS6235', institution: 'Quintec', category: 'Tecnologicos', position: 1},
  { name: 'Imp. and Maintaining Microsoft SQL Server 2008 Reporting Services MS6236', institution: 'Quintec', category: 'Tecnologicos', position: 1},
  { name: 'Curso en tecnología .NET con Visual Studio 2008', institution: 'Trackit', category: 'Tecnologicos', position: 2 },
  { name: 'Metodología Ágil: Scrum + Kanban', institution: 'EClass', category: 'Tecnologicos', position: 2 },
  { name: 'Herramientas de programación en Python para procesamiento de datos', institution: 'Teleduc', category: 'Tecnologicos', position: 2 },
  { name: 'JQuery y Ajax Desde 0', institution: 'Udemy', category: 'Tecnologicos', position: 2 },
  { name: 'Profesional Git', institution: 'Código Facilito', category: 'Tecnologicos', position: 2 },
  { name: 'Vue.js esencial', institution: 'Linkedin', category: 'Tecnologicos', position: 2 },
  { name: 'Java Script avanzado: Buenas prácticas', institution: 'Linkedin', category: 'Tecnologicos', position: 2 },
  { name: 'Control de Gestión para no especialistas', institution: 'Teleduc', category: 'Otros', position: 3 },
  { name: 'Herramientas para la gestión de procesos', institution: 'Teleduc', category: 'Otros', position: 3 }
]
Vue.component('Options', {
  data: function(){
      return{
          opt: {
            menu: links
          }
      }
  },
  template:
  `<div>
    <nav class="navbar fixed-top navbar-expand-lg navbar-light" style="background-image: linear-gradient(15deg, #7DA3A1 0%, white 100%);">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item" v-for="item in opt.menu">
                            <div v-if="item.name!=='Contacto'">
                              <a class="nav-link"  style="color: #324851;" :href="item.url_link">{{item.name}}</a>
                            </div>
                            <div v-else>
                              <a class="nav-link"  style="color: #324851;" target="_blank" :href="item.url_link">{{item.name}}</a>
                            </div>
                        </li>
                    </ul>
                </div>   
            </nav>
  </div>`

});

Vue.component('Foot',{
template:`
<footer>
  <div class="row mt-5">
      <div class="col text-center">
          <a href="https://www.linkedin.com/in/daniloecatalan">LinkedIn</a>|
          <a href="https://www.github.com/DaniloCatalan">Github</a>
      </div>
  </div>
</footer>
`
});

Vue.component('Resume', {
  template: `
  <div class="col text-center">
    <p class="text-justify">Profesional del ámbito de las tecnologías con basta experiencia.
      he desarrollado mi carrera de forma integral en el sector de las TIC,
      con un mayor énfasis en el área de desarrollo.
      Este sitio tiene por objetivo poder dar a conocer mayores antecedentes de mis experiencias en dicha área.
      Si estás pensando en llevar a cabo un proyecto de software te invito a conocer mi portafolio.<a href="/projects.html">Ir a proyectos</a>
    </p>
  </div>
`
});

var app = new Vue({
  el:'#app',
  data:{
    menu: links,
    languages: languages,
    author: 'Danilo P. Catalán',
    courses: courses
  },
  methods: {
    getLang(filtro){
      return this.languages.filter(lang => lang.level === filtro)
    },
    getCourses(category, position) {
      return this.courses.filter(course => course.category === category && course.position === position)
    }
  },
});

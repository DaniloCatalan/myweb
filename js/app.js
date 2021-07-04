Vue.component('Options',{
  data: function(){
      return{
          opt: {
            menu: [
              {name:'Inicio',url_link:'index.html'},
              {name:'Antecedentes Académicos',url_link:'background.html'},
              {name:'Certificaciones & Cursos',url_link:'certifications.html'},
              {name:'Herramientas Tecnológicas',url_link:'tools.html'},
              {name:'Proyectos',url_link:'projects.html'},
              {name:'Contacto',url_link:'contact.html'}
            ]
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

var app = new Vue({
  el:'#app',
  data:{
      menu:[
          {name:'Inicio',url_link:'index.html'},
          {name:'Antecedentes Académicos',url_link:'background.html'},
          {name:'Certificaciones & Cursos',url_link:'certifications.html'},
          {name:'Herramientas Tecnológicas',url_link:'tools.html'},
          {name:'Proyectos',url_link:'projects.html'},
          {name:'Contacto',url_link:'contact.html'}
      ],
      languages:[
        {name:'.NET',level:'Advanced'},
        {name:'C#',level:'Advanced'},
        {name:'VB',level:'Advanced'},
        {name:'BD',level:'Advanced'},
        {name:'MSSQL | SQL',level:'Advanced'},
        {name:'Classic Asp',level:'Advanced'},
        {name:'PHP',level:'Intermediate'},
        {name:'Java',level:'Intermediate'},
        {name:'JS',level:'Intermediate'},
        {name:'VueJS',level:'Intermediate'},
        {name:'AWS',level:'Intermediate'},
        {name:'MS Windows Server',level:'Intermediate'},
        {name:'Scrum',level:'Basics'},
        {name:'CSS',level:'Basics'},
        {name:'Docker',level:'Basics'},
        {name:'Linux',level:'Basics'},
        {name:'Rails',level:'Basics'},
        {name:'Wordpress',level:'Basics'}
      ]
  },
  methods: {
    getLang(filtro){
      return this.languages.filter(lang => lang.level === filtro)
    }
  },
});
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  imports: [CommonModule],
  templateUrl: './my-skills.html',
  styleUrl: './my-skills.css'
})
export class MySkills {
  habilidades = [
  {
    "nome": "TypeScript",
    "url_img": "https://cdn.brandfetch.io/typescript.com/w/256/h/256?c=1id5-s0OdQqUgvVvv5A",
    "rounded": false
  },
  {
    "nome": "Angular",
    "url_img": "https://cdn.brandfetch.io/angularjs.org/w/400/h/400?c=1id5-s0OdQqUgvVvv5A",
    "rounded": true
  },
  {
    "nome": "React",
    "url_img": "/assets/react.svg",
    "rounded": false
  },
  {
    "nome": "Node.js",
    "url_img": "/assets/nodejs.svg",
    "rounded": false
  },
  {
    "nome": "Express.js",
    "url_img": "assets/expressjs.svg",
    "rounded": false
  },
  {
    "nome": "MySQL",
    "url_img": "https://cdn.brandfetch.io/mysql.com/w/512/h/348/logo?c=1id5-s0OdQqUgvVvv5A",
    "rounded": false
  },
  {
    "nome": "PostgreSQL",
    "url_img": "https://cdn.brandfetch.io/postgresql.com/w/496/h/512/logo?c=1id5-s0OdQqUgvVvv5A",
    "rounded": false
  },
  {
    "nome": "Java",
    "url_img": "https://cdn.brandfetch.io/java.com/w/379/h/512/logo?c=1id5-s0OdQqUgvVvv5A",
    "rounded": false
  },
  {
    "nome": "MongoDB",
    "url_img": "https://cdn.brandfetch.io/mongodb.com/w/400/h/400?c=1id5-s0OdQqUgvVvv5A",
    "rounded": true
  },
  {
    "nome": "Tailwind CSS",
    "url_img": "https://cdn.brandfetch.io/tailwindcss.com/w/400/h/400?c=1id5-s0OdQqUgvVvv5A",
    "rounded": true
  },
  {
    "nome": "GitHub",
    "url_img": "https://cdn.brandfetch.io/github.com/w/512/h/502/symbol?c=1id5-s0OdQqUgvVvv5A",
    "rounded": false
  },
  {
    "nome": "AWS",
    "url_img": "https://cdn.brandfetch.io/aws.com/w/512/h/512/logo?c=1id5-s0OdQqUgvVvv5A",
    "rounded": false
  },
  {
    "nome": "Figma",
    "url_img": "https://cdn.brandfetch.io/figma.com/w/341/h/512/symbol?c=1id5-s0OdQqUgvVvv5A",
    "rounded": false
  },
  {
    "nome": "VS Code",
    "url_img": "https://cdn.brandfetch.io/visualstudio.com/w/512/h/512/logo?c=1id5-s0OdQqUgvVvv5A",
    "rounded": false
  },
  {
    "nome": "Postman",
    "url_img": "https://cdn.brandfetch.io/postman.com/w/240/h/240?c=1id5-s0OdQqUgvVvv5A",
    "rounded": true
  },
]

}

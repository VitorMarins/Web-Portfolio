import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { MyFooter } from "./components/my-footer/my-footer";
import { MyExperiences } from "./components/my-experiences/my-experiences";
import { MySkills } from "./components/my-skills/my-skills";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, MyFooter, MyExperiences, MySkills],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Portfolio';
}

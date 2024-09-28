import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faFacebook, faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons';
import {faX} from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    NgOptimizedImage,
    FaIconComponent
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  protected readonly faFacebook = faFacebook;
  protected readonly faInstagram = faInstagram;
  protected readonly faYoutube = faYoutube;
  protected readonly faX = faX;
}

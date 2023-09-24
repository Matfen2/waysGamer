import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  sendEmail() {
    alert('Votre adresse e-mail a bien été envoyé !')
  }
}

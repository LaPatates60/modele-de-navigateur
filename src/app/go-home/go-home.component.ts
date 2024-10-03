import { Component,inject } from '@angular/core';
import { BrowserService } from '../browser.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-go-home',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './go-home.component.html',
  styleUrl: './go-home.component.css'
})
export class GoHomeComponent {
  public browserService = inject(BrowserService);
}

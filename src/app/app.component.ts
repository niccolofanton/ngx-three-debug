import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  public readonly avocadoPath = `assets/avocado/Avocado.gltf`;

  ngOnInit(): void { }

  public onBeforeRender() {
    console.log('Render')
    alert('render')
  }

}

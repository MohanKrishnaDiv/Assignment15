import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputText: any = '';
  destroy: boolean = true;
  msg:string="himhfg"

  OnSubmit(inputEL: HTMLInputElement) {
    this.inputText = inputEL.value;
  }
  DestroyComponent(){
    this.destroy = false;
  }
}

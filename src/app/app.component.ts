import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FavoriteComponent } from './components/favorite/favorite.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Ecommerce-Website';
  constructor() {}
  @ViewChild(FavoriteComponent) favoriteComponent!: FavoriteComponent;

  // isActive = true;
  // name: string = 'Saad';
  // text: string =
  //   'Hello i am saad ssad sdajlj ad 09ewrd0u9w0 lsdkjflsdj ;fjs;l jflkds hflkhs lfldshf asfahlhk';
  // realeaseDate = new Date();
  // onKeyPress() {
  //   console.log('Enter Pressed');
  // }
  post = {
    isfavorite: true,
  };
  clickFromChild(eventArgs: any) {
    console.log(eventArgs);
  }
  callChildFunction() {
    this.favoriteComponent.onClick(); // Call the child function
  }
  userInput: string = '';
  ngOnInit(): void {
    let a = 1;
  }
  // Access child component

  ngAfterViewInit() {
    const data = { name: 'Angular', version: '15' }; // Data to pass
    this.favoriteComponent.receiveData(data); // Call child method with data
  }
}

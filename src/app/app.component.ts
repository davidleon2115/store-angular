import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Nicolas';
  age = 18;
  img = 'https://www.w3schools.com/howto/img_avatar.png';
  btnDisabled = true;
  person = {
    name: 'Nicolas',
    age: 18,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png'
  }
  names: string[] = ['Nico', 'Juli', 'Santi'];
  newName = '';
  products: Product[] = [
    {
      name: 'Pikachu',
      price: 565,
      image: 'https://www.pngmart.com/files/2/Pikachu-PNG-HD.png',
      category: 'all',
    },
    {
      name: 'Tortuga',
      price: 356,
      image: 'https://www.pngmart.com/files/5/Nemo-PNG-Photos.png'
    },
    {
      name: 'Mario',
      price: 34,
      image: 'https://assets.stickpng.com/images/584df3ad6a5ae41a83ddee08.png',
      category: 'Mario',
    },
    {
      name: 'Among',
      price: 23,
      image: 'https://wonder-day.com/wp-content/uploads/2020/10/wonder-day-among-us-png-29.png'
    },
    {
      name: 'Dona Simpson',
      price: 34,
      image: 'https://www.pngall.com/wp-content/uploads/11/Donut-PNG-Image.png'
    },
    {
      name: 'Minion',
      price: 3434,
      image: 'https://www.pngplay.com/wp-content/uploads/2/Bob-Minion-Background-PNG-Image.png',
      category: 'Cute',
    }
  ]

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge() {
    this.person.age += 1;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number) {
    this.names.splice(index, 1);
  }
}

import {Component, Injectable} from 'angular2/core';
import {Coffee} from './coffee';

@Component ({
    selector: 'coffee-menu',
    templateUrl: 'dev/coffee-menu.component.html',
    styleUrls: ['dev/coffee-menu.component.css'],
})

@Injectable()
export class CoffeeMenuComponent {
    coffee = COFFEE;
    selectedCoffee = Coffee;
    
    onSelect(coffee: Coffee): void {
    this.selectedCoffee = coffee;

  } 
    recentCoffee = 'None';
    orderNumber = 0;
    orderPrice = 0;
    public order = [];
    addOrder(selectedCoffee) {
        this.recentCoffee = selectedCoffee.name;
        this.order.push(selectedCoffee);
        this.orderNumber = this.orderNumber + 1;
        this.orderPrice = this.orderPrice + selectedCoffee.price;
        alert(selectedCoffee.name + 'was added');
    }

    removeOrder(item) {
        var index = this.order.indexOf(item);
        this.order.splice(index, 1);
        this.orderPrice = this.orderPrice - item.price;
        this.orderNumber = this.orderNumber - 1;
        alert(item.name + ' was removed');
    }

}

const COFFEE: Coffee[] = [
    {name:'Mocha', price:170, image:'//blackcoffeeshopdotcomdotau.files.wordpress.com/2016/01/mocha-coffee_6839.jpg'},
    {name:'Latte', price:180, image:'//upload.wikimedia.org/wikipedia/commons/4/46/Latte_art_cappuccino.jpg'},
    {name:'Espresso', price:190, image:'//kingofwallpapers.com/espresso/espresso-002.jpg'},
    {name:'Greentea', price:200, image:'//www.inspirededibles.ca/wp-content/uploads/2013/03/vanilla-bean-matcha-latte.jpg'},
]

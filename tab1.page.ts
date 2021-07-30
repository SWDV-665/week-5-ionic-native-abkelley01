import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { GroceriesServiceService } from '../groceries-service.service';
import { InputDialogService } from '../input-dialog.service';
import { SocialSharing } from '@ionic-native/social-sharing';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  title = "Grocery"


  constructor(public toastController: ToastController, public dataService: GroceriesServiceService, public alertController: AlertController, public inputDialogService: InputDialogService, private socialSharing: SocialSharing) {}

  loadItems() {
    return this.dataService.getItems();
  }

  async removeItem(item, index) {
    console.log("removing item - ", item, index);

    const toast = await this.toastController.create({
      message: 'Removing item ' + index + '...',
      duration: 2000
    });
    toast.present();

    this.dataService.removeItem(index);
  }

  async shareItem(item, index) {
    console.log("sharing item - ", item, index);

    const toast = await this.toastController.create({
      message: 'Sharing item ' + index + '...',
      duration: 2000
    });
    toast.present();

    let message = "Grocery Item - Name: " + item.name + " Quantity: " + item.quantity;
    let subject = "Shared via Groceries app";

    this.socialSharing.share(message, subject).then(() => {
      // Sharing via email is possible
      console.log("Shared successfully!");
    }).catch((error) => {
      // Sharing via email is not possible
      console.error("Error while sharing", error);
    });
  
  }

  async editItem(item, index) {
    console.log("editing item - ", item, index);

    const toast = await this.toastController.create({
      message: 'editing item ' + index + '...',
      duration: 2000
    });
    toast.present();
    this.inputDialogService.showPrompt(item,index);

  }

  addItem() {
    console.log("Add Item");
    this.inputDialogService.showPrompt();
  }

  
  
}

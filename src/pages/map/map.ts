import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import leaflet from 'leaflet';
import { PropertyDetailPage } from '../property-detail/property-detail';
/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  map;
  markersGroup;
  properties:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.showMap();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
  }

  showMap() {
    setTimeout(() => {
        this.map = leaflet.map("map").setView([-17.713371, 178.065033], 9);
        leaflet.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
            attribution: 'Tiles &copy; Group 5'
        }).addTo(this.map);
        this.showMarkers();
    })
}

showMarkers() {
  if (this.markersGroup) {
      this.map.removeLayer(this.markersGroup);
  }
  this.markersGroup = leaflet.layerGroup([]);
  this.properties = JSON.parse(localStorage.getItem('maphouse'));
  console.log(this.properties);
  this.properties.forEach(property => {
      if (property.lat, property.lon) {
          let marker: any = leaflet.marker([property.lat, property.lon]).on('click', event => this.navCtrl.push(PropertyDetailPage,{house:event.target.data}));
          marker.data = property;
          this.markersGroup.addLayer(marker);
      }
  });
  this.map.addLayer(this.markersGroup);
}

}

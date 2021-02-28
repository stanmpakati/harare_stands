import Map from 'ol/Map';
import View from 'ol/View';
import VectorLayer from 'ol/layer/Vector';
import { Style, Circle } from 'ol/style';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MapService } from 'src/app/services/map-services/map.service';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import Vector from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Fill from 'ol/style/Fill';
import { fromLonLat, toLonLat } from 'ol/proj';
import MultiPoint from 'ol/geom/MultiPoint';
import Overlay from 'ol/Overlay';
import { toStringHDMS } from 'ol/coordinate';
// import * as $ from 'jquery';

const INITIAL_OPACITY = 1;
const DIMMED_OPACITY = 0.3;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  details!: string;
  location!: string;
  private map!: Map;
  markerSource = new Vector();
  pointsArray = [
    [31.153028, -17.754858],
    [30.952028, -17.844858],
    [31.053928, -17.859858],
    [31.153028, -17.854058],
  ];
  popupElement = document.getElementById('popup')!;
  point = new Point(fromLonLat([31.053028, -17.854858]));

  constructor(private mapService: MapService) {}

  ngOnInit(): void {
    const osmMap = new TileLayer({
      source: new OSM(),
      opacity: INITIAL_OPACITY,
    });

    const pointsMap = new VectorLayer({
      source: new VectorSource({
        features: [
          new Feature({
            geometry: new MultiPoint(this.pointsArray).transform(
              'EPSG:4326',
              'EPSG:3857'
            ),
            name: 'Null Islands',
          }),
        ],
      }),
      style: new Style({
        image: new Circle({
          radius: 6,
          fill: new Fill({ color: 'blue' }),
        }),
      }),
    });

    const harareView = new View({
      projection: 'EPSG:3857', // projection
      center: fromLonLat([31.053028, -17.854858]),
      zoom: 10,
    });

    const zimbabwe = new View({
      center: fromLonLat([29.12755, -19.079222]),
      zoom: 5.8,
    });

    this.map = new Map({
      target: 'map',
      layers: [osmMap, pointsMap],
      // Harare
      view: harareView,
    });

    const popup = new Overlay({
      element: this.popupElement,
    });
    popup.setPosition(fromLonLat([31.153028, -17.754858]));
    this.map.addOverlay(popup);

    // this.map.on('click', (e) => {
    //   popup.setPosition(undefined);
    //   const element = popup.getElement();

    //   this.map.forEachFeatureAtPixel(e.pixel, (feature, layer) => {
    //     console.log(feature.get('name'));
    //     const coordinate = e.coordinate;
    //     popup.setPosition(coordinate);
    //     this.details = 'Hey';
    //     console.log(this.details);
    //   });
    // });

    this.map.on('click', function (evt) {
      const element = popup.getElement()!;
      const coordinate = evt.coordinate;
      const hdms = toStringHDMS(toLonLat(coordinate));

      // ($(element) as any).popover('dispose');
      // popup.setPosition(coordinate);
      // ($(element) as any).popover({
      //   placement: 'top',
      //   animation: true,
      //   html: true,
      //   content:
      //     '<p>The location you clicked was:</p><code>' + hdms + '</code>',
      // });
      // ($(element) as any).popover('show');
    });

    this.mapService.getDim().subscribe((x) => {
      if (x) {
        this.map.getLayers().getArray()[0].setOpacity(INITIAL_OPACITY);
      } else {
        this.map.getLayers().getArray()[0].setOpacity(DIMMED_OPACITY);
      }
    });
  }

  iconFeature = new Feature({
    geometry: new MultiPoint(this.pointsArray).transform(
      'EPSG:4326',
      'EPSG:3857'
    ),
    name: 'Null Islands',
    population: 4000,
    rainfall: 500,
  });
}

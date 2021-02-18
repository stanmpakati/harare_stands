import Map from 'ol/Map';
import View from 'ol/View';
import VectorLayer from 'ol/layer/Vector';
import { Style, Circle } from 'ol/style';
import Icon from 'ol/style/Icon';
import OSM from 'ol/source/OSM';
import * as olProj from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import { Component, OnInit } from '@angular/core';
import { MapService } from 'src/app/services/map-services/map.service';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import Vector from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Fill from 'ol/style/Fill';
import { fromLonLat } from 'ol/proj';

const INITIAL_OPACITY = 1;
const DIMMED_OPACITY = 0.3;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  location!: string;
  private map!: Map;
  markerSource = new Vector();
  point = new Point(fromLonLat([31.053028, -17.854858]));

  constructor(private mapService: MapService) {}

  ngOnInit(): void {
    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM(),
          opacity: INITIAL_OPACITY,
        }),
        new VectorLayer({
          source: new VectorSource({
            features: [new Feature(this.point)],
          }),
          style: new Style({
            image: new Circle({
              radius: 9,
              fill: new Fill({ color: 'red' }),
            }),
          }),
        }),
      ],

      // Zimbabwe
      // view: new View({
      //   center: olProj.fromLonLat([29.12755, -19.079222]),
      //   zoom: 5.8,
      // }),

      // Harare
      view: new View({
        center: olProj.fromLonLat([31.053028, -17.854858]),
        zoom: 10,
      }),
    });
    this.mapService.getDim().subscribe((x) => {
      if (x) {
        this.map.getLayers().getArray()[0].setOpacity(INITIAL_OPACITY);
      } else {
        this.map.getLayers().getArray()[0].setOpacity(DIMMED_OPACITY);
      }
    });
  }
}

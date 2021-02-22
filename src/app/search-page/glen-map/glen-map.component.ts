import { Component, OnInit } from '@angular/core';
import { toStringHDMS } from 'ol/coordinate';

declare let ol: any;

@Component({
  selector: 'app-glen-map',
  templateUrl: './glen-map.component.html',
  styleUrls: ['./glen-map.component.scss'],
})
export class GlenMapComponent implements OnInit {
  vectorLayer?: any;
  vectorSource?: any;
  rasterLayer?: any;
  harare?: any;

  ngOnInit() {
    this.mapInit();
  }

  mapInit() {
    var header = document.getElementById('headerpop');
    var content = document.getElementById('popup-content');
    var popContent = document.getElementById('overlay');

    var overlay = new ol.Overlay({
      element: popContent,
      positioning: 'bottom-center',
    });

    var map = new ol.Map({
      target: 'stands_map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM(),
        }),
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([31.053028, -17.824858]),
        zoom: 12,
      }),
    });

    //features
    var marker = new ol.Feature({
      geometry: new ol.geom.Point(ol.proj.fromLonLat([31.0937, -17.7487])),
    });

    var mark = new ol.Feature({
      geometry: new ol.geom.Point(ol.proj.fromLonLat([30.9962, -17.7868])),
    });

    var mar = new ol.Feature({
      geometry: new ol.geom.Point(ol.proj.fromLonLat([31.0478, -17.82])),
    });

    var ma = new ol.Feature({
      geometry: new ol.geom.Point(ol.proj.fromLonLat([31.1195, -17.8153])),
    });

    var vectorSour = new ol.source.Vector({
      features: [marker, mark, mar, ma],
    });

    var vectorLay = new ol.layer.Vector({
      title: 'land on sale',
      source: vectorSour,
      style: (function () {
        var style = new ol.style.Style({
          image: new ol.style.Icon({
            scale: 0.04,
            src: 'assets/markers/mark.jpg',
          }),
          text: new ol.style.Text({
            text: 'Harare lands Property',
            scale: 1.24,
            fill: new ol.style.Fill({
              color: 'orange',
            }),
            stroke: ol.style.Stroke({
              color: 'gray',
              width: 2,
            }),
          }),
        });

        return style;
      })(),
    });

    map.on('singleclick', function (evt: any) {
      var coordinate = evt.coordinate;
      var hdms = toStringHDMS(ol.proj.toLonLat(coordinate));

      content!.innerHTML = '<p>You clicked here:</p><code>' + hdms + '</code>';

      var element = overlay.getElement();
      // header?.setAttribute("popoverTitle","stands")
      // header?.setAttribute("ngbPopover","available")
      // header?.setAttribute("placement","top")
      element.innerHTML = header?.innerHTML + hdms;

      overlay.setPosition(coordinate);
      map.addOverlay(overlay);
    });
    map.addLayer(vectorLay);
  }
}

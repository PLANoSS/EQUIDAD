var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM B&W',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'http://{a-c}.www.toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})]
    })
})
]
});
var format_Tiendeaestardeacuerdoconqueloshombrestrabajenmsenelcuidadodelosnios_6 = new ol.format.GeoJSON();
var features_Tiendeaestardeacuerdoconqueloshombrestrabajenmsenelcuidadodelosnios_6 = format_Tiendeaestardeacuerdoconqueloshombrestrabajenmsenelcuidadodelosnios_6.readFeatures(json_Tiendeaestardeacuerdoconqueloshombrestrabajenmsenelcuidadodelosnios_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tiendeaestardeacuerdoconqueloshombrestrabajenmsenelcuidadodelosnios_6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Tiendeaestardeacuerdoconqueloshombrestrabajenmsenelcuidadodelosnios_6.addFeatures(features_Tiendeaestardeacuerdoconqueloshombrestrabajenmsenelcuidadodelosnios_6);var lyr_Tiendeaestardeacuerdoconqueloshombrestrabajenmsenelcuidadodelosnios_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tiendeaestardeacuerdoconqueloshombrestrabajenmsenelcuidadodelosnios_6, 
                style: style_Tiendeaestardeacuerdoconqueloshombrestrabajenmsenelcuidadodelosnios_6,
    title: '<b/>Percepción sobre el trabajo de los hombres con los niños:</b><br />El degradado de colores en el mapa muestra el porcentaje de personas<br />que tienden a estar de acuerdo  en que los hombres tienen que trabajar más<br />en el cuidado de los niños.<br />\
    <img src="styles/legend/Tiendeaestardeacuerdoconqueloshombrestrabajenmsenelcuidadodelosnios_6_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Tiendeaestardeacuerdoconqueloshombrestrabajenmsenelcuidadodelosnios_6_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Tiendeaestardeacuerdoconqueloshombrestrabajenmsenelcuidadodelosnios_6_2.png" />  40 - 60 <br />\
    <img src="styles/legend/Tiendeaestardeacuerdoconqueloshombrestrabajenmsenelcuidadodelosnios_6_3.png" />  60 - 80 <br />\
    <img src="styles/legend/Tiendeaestardeacuerdoconqueloshombrestrabajenmsenelcuidadodelosnios_6_4.png" />  80 - 100 <br /><br />'
        });
lyr_Tiendeaestardeacuerdoconqueloshombrestrabajenmsenelcuidadodelosnios_6.setVisible(true);
var layersList = [baseLayer,lyr_Tiendeaestardeacuerdoconqueloshombrestrabajenmsenelcuidadodelosnios_6];
lyr_Tiendeaestardeacuerdoconqueloshombrestrabajenmsenelcuidadodelosnios_6.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'Tiendo a e': 'Tiendo a e', });
lyr_Tiendeaestardeacuerdoconqueloshombrestrabajenmsenelcuidadodelosnios_6.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'Tiendo a e': 'TextEdit', });
lyr_Tiendeaestardeacuerdoconqueloshombrestrabajenmsenelcuidadodelosnios_6.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', 'Tiendo a e': 'no label', });

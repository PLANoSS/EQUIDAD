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
var format_Totalmentedeacuerdoconqueunpadreounamadredebeponersucarreraporencimadelcuidadodesushijos_4 = new ol.format.GeoJSON();
var features_Totalmentedeacuerdoconqueunpadreounamadredebeponersucarreraporencimadelcuidadodesushijos_4 = format_Totalmentedeacuerdoconqueunpadreounamadredebeponersucarreraporencimadelcuidadodesushijos_4.readFeatures(json_Totalmentedeacuerdoconqueunpadreounamadredebeponersucarreraporencimadelcuidadodesushijos_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Totalmentedeacuerdoconqueunpadreounamadredebeponersucarreraporencimadelcuidadodesushijos_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Totalmentedeacuerdoconqueunpadreounamadredebeponersucarreraporencimadelcuidadodesushijos_4.addFeatures(features_Totalmentedeacuerdoconqueunpadreounamadredebeponersucarreraporencimadelcuidadodesushijos_4);var lyr_Totalmentedeacuerdoconqueunpadreounamadredebeponersucarreraporencimadelcuidadodesushijos_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Totalmentedeacuerdoconqueunpadreounamadredebeponersucarreraporencimadelcuidadodesushijos_4, 
                style: style_Totalmentedeacuerdoconqueunpadreounamadredebeponersucarreraporencimadelcuidadodesushijos_4,
    title: '<b/>Percepción sobre la carrera de los padres:</b><br />El degradado de colores en el mapa muestra el porcentaje de personas<br />que están totalmente en desacuerdo  en que un padre o una madre<br />debe poner su carrera por encima del cuidado de sus hijos.<br />\
    <img src="styles/legend/Totalmentedeacuerdoconqueunpadreounamadredebeponersucarreraporencimadelcuidadodesushijos_4_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Totalmentedeacuerdoconqueunpadreounamadredebeponersucarreraporencimadelcuidadodesushijos_4_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Totalmentedeacuerdoconqueunpadreounamadredebeponersucarreraporencimadelcuidadodesushijos_4_2.png" />  40 - 60 <br />\
    <img src="styles/legend/Totalmentedeacuerdoconqueunpadreounamadredebeponersucarreraporencimadelcuidadodesushijos_4_3.png" />  60 - 80 <br />\
    <img src="styles/legend/Totalmentedeacuerdoconqueunpadreounamadredebeponersucarreraporencimadelcuidadodesushijos_4_4.png" />  80 - 100 <br /><br />'
        });

lyr_Totalmentedeacuerdoconqueunpadreounamadredebeponersucarreraporencimadelcuidadodesushijos_4.setVisible(true);
var layersList = [baseLayer,lyr_Totalmentedeacuerdoconqueunpadreounamadredebeponersucarreraporencimadelcuidadodesushijos_4];
lyr_Totalmentedeacuerdoconqueunpadreounamadredebeponersucarreraporencimadelcuidadodesushijos_4.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'Totalmente': 'Totalmente', });
lyr_Totalmentedeacuerdoconqueunpadreounamadredebeponersucarreraporencimadelcuidadodesushijos_4.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'Totalmente': 'TextEdit', });
lyr_Totalmentedeacuerdoconqueunpadreounamadredebeponersucarreraporencimadelcuidadodesushijos_4.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', 'Totalmente': 'no label', });

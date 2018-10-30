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
var format_Creequeelmedioquediseminamsestereotiposdegneroesenlostrabajos_0 = new ol.format.GeoJSON();
var features_Creequeelmedioquediseminamsestereotiposdegneroesenlostrabajos_0 = format_Creequeelmedioquediseminamsestereotiposdegneroesenlostrabajos_0.readFeatures(json_Creequeelmedioquediseminamsestereotiposdegneroesenlostrabajos_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Creequeelmedioquediseminamsestereotiposdegneroesenlostrabajos_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Creequeelmedioquediseminamsestereotiposdegneroesenlostrabajos_0.addFeatures(features_Creequeelmedioquediseminamsestereotiposdegneroesenlostrabajos_0);var lyr_Creequeelmedioquediseminamsestereotiposdegneroesenlostrabajos_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Creequeelmedioquediseminamsestereotiposdegneroesenlostrabajos_0, 
                style: style_Creequeelmedioquediseminamsestereotiposdegneroesenlostrabajos_0,
    title: '<b/>Percepción sobre la diseminación de estereotipos de género:</b><br />El degradado de colores en el mapa muestra el porcentaje de personas<br />que creen que es en los trabajos donde se disemina más estereotipos<br />de género. <br />\
    <img src="styles/legend/Creequeelmedioquediseminamsestereotiposdegneroesenlostrabajos_0_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Creequeelmedioquediseminamsestereotiposdegneroesenlostrabajos_0_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Creequeelmedioquediseminamsestereotiposdegneroesenlostrabajos_0_2.png" />  40 - 60 <br />\
    <img src="styles/legend/Creequeelmedioquediseminamsestereotiposdegneroesenlostrabajos_0_3.png" />  60 - 80 <br />\
    <img src="styles/legend/Creequeelmedioquediseminamsestereotiposdegneroesenlostrabajos_0_4.png" />  80 - 100 <br />'
        });

lyr_Creequeelmedioquediseminamsestereotiposdegneroesenlostrabajos_0.setVisible(true);
var layersList = [baseLayer,lyr_Creequeelmedioquediseminamsestereotiposdegneroesenlostrabajos_0];
lyr_Creequeelmedioquediseminamsestereotiposdegneroesenlostrabajos_0.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'En los tra': 'En los tra', });
lyr_Creequeelmedioquediseminamsestereotiposdegneroesenlostrabajos_0.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'En los tra': 'TextEdit', });
lyr_Creequeelmedioquediseminamsestereotiposdegneroesenlostrabajos_0.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', 'En los tra': 'no label', });

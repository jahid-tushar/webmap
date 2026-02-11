var wms_layers = [];

var format_Dhgaka_Division3_0 = new ol.format.GeoJSON();
var features_Dhgaka_Division3_0 = format_Dhgaka_Division3_0.readFeatures(json_Dhgaka_Division3_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dhgaka_Division3_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dhgaka_Division3_0.addFeatures(features_Dhgaka_Division3_0);
var lyr_Dhgaka_Division3_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dhgaka_Division3_0, 
                style: style_Dhgaka_Division3_0,
                popuplayertitle: 'Dhgaka_Division3',
                interactive: true,
                title: '<img src="styles/legend/Dhgaka_Division3_0.png" /> Dhgaka_Division3'
            });
var format_Dhgaka_Division2_1 = new ol.format.GeoJSON();
var features_Dhgaka_Division2_1 = format_Dhgaka_Division2_1.readFeatures(json_Dhgaka_Division2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dhgaka_Division2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dhgaka_Division2_1.addFeatures(features_Dhgaka_Division2_1);
var lyr_Dhgaka_Division2_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dhgaka_Division2_1, 
                style: style_Dhgaka_Division2_1,
                popuplayertitle: 'Dhgaka_Division2',
                interactive: true,
                title: '<img src="styles/legend/Dhgaka_Division2_1.png" /> Dhgaka_Division2'
            });
var format_Dhgaka_Division_2 = new ol.format.GeoJSON();
var features_Dhgaka_Division_2 = format_Dhgaka_Division_2.readFeatures(json_Dhgaka_Division_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dhgaka_Division_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dhgaka_Division_2.addFeatures(features_Dhgaka_Division_2);
var lyr_Dhgaka_Division_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dhgaka_Division_2, 
                style: style_Dhgaka_Division_2,
                popuplayertitle: 'Dhgaka_Division',
                interactive: true,
                title: '<img src="styles/legend/Dhgaka_Division_2.png" /> Dhgaka_Division'
            });

lyr_Dhgaka_Division3_0.setVisible(true);lyr_Dhgaka_Division2_1.setVisible(true);lyr_Dhgaka_Division_2.setVisible(true);
var layersList = [lyr_Dhgaka_Division3_0,lyr_Dhgaka_Division2_1,lyr_Dhgaka_Division_2];
lyr_Dhgaka_Division3_0.set('fieldAliases', {'adm3_name': 'adm3_name', 'adm3_name1': 'adm3_name1', 'adm3_name2': 'adm3_name2', 'adm3_name3': 'adm3_name3', 'adm3_pcode': 'adm3_pcode', 'adm2_name': 'adm2_name', 'adm2_name1': 'adm2_name1', 'adm2_name2': 'adm2_name2', 'adm2_name3': 'adm2_name3', 'adm2_pcode': 'adm2_pcode', 'adm1_name': 'adm1_name', 'adm1_name1': 'adm1_name1', 'adm1_name2': 'adm1_name2', 'adm1_name3': 'adm1_name3', 'adm1_pcode': 'adm1_pcode', 'adm0_name': 'adm0_name', 'adm0_name1': 'adm0_name1', 'adm0_name2': 'adm0_name2', 'adm0_name3': 'adm0_name3', 'adm0_pcode': 'adm0_pcode', 'valid_on': 'valid_on', 'valid_to': 'valid_to', 'area_sqkm': 'area_sqkm', 'version': 'version', 'lang': 'lang', 'lang1': 'lang1', 'lang2': 'lang2', 'lang3': 'lang3', 'adm3_ref_n': 'adm3_ref_n', 'center_lat': 'center_lat', 'center_lon': 'center_lon', });
lyr_Dhgaka_Division2_1.set('fieldAliases', {'adm2_name': 'adm2_name', 'adm2_name1': 'adm2_name1', 'adm2_name2': 'adm2_name2', 'adm2_name3': 'adm2_name3', 'adm2_pcode': 'adm2_pcode', 'adm1_name': 'adm1_name', 'adm1_name1': 'adm1_name1', 'adm1_name2': 'adm1_name2', 'adm1_name3': 'adm1_name3', 'adm1_pcode': 'adm1_pcode', 'adm0_name': 'adm0_name', 'adm0_name1': 'adm0_name1', 'adm0_name2': 'adm0_name2', 'adm0_name3': 'adm0_name3', 'adm0_pcode': 'adm0_pcode', 'valid_on': 'valid_on', 'valid_to': 'valid_to', 'area_sqkm': 'area_sqkm', 'version': 'version', 'lang': 'lang', 'lang1': 'lang1', 'lang2': 'lang2', 'lang3': 'lang3', 'adm2_ref_n': 'adm2_ref_n', 'center_lat': 'center_lat', 'center_lon': 'center_lon', });
lyr_Dhgaka_Division_2.set('fieldAliases', {'adm1_name': 'adm1_name', 'adm1_name1': 'adm1_name1', 'adm1_name2': 'adm1_name2', 'adm1_name3': 'adm1_name3', 'adm1_pcode': 'adm1_pcode', 'adm0_name': 'adm0_name', 'adm0_name1': 'adm0_name1', 'adm0_name2': 'adm0_name2', 'adm0_name3': 'adm0_name3', 'adm0_pcode': 'adm0_pcode', 'valid_on': 'valid_on', 'valid_to': 'valid_to', 'area_sqkm': 'area_sqkm', 'version': 'version', 'lang': 'lang', 'lang1': 'lang1', 'lang2': 'lang2', 'lang3': 'lang3', 'adm1_ref_n': 'adm1_ref_n', 'center_lat': 'center_lat', 'center_lon': 'center_lon', });
lyr_Dhgaka_Division3_0.set('fieldImages', {'adm3_name': 'TextEdit', 'adm3_name1': 'TextEdit', 'adm3_name2': 'TextEdit', 'adm3_name3': 'TextEdit', 'adm3_pcode': 'TextEdit', 'adm2_name': 'TextEdit', 'adm2_name1': 'TextEdit', 'adm2_name2': 'TextEdit', 'adm2_name3': 'TextEdit', 'adm2_pcode': 'TextEdit', 'adm1_name': 'TextEdit', 'adm1_name1': 'TextEdit', 'adm1_name2': 'TextEdit', 'adm1_name3': 'TextEdit', 'adm1_pcode': 'TextEdit', 'adm0_name': 'TextEdit', 'adm0_name1': 'TextEdit', 'adm0_name2': 'TextEdit', 'adm0_name3': 'TextEdit', 'adm0_pcode': 'TextEdit', 'valid_on': 'DateTime', 'valid_to': 'DateTime', 'area_sqkm': 'TextEdit', 'version': 'TextEdit', 'lang': 'TextEdit', 'lang1': 'TextEdit', 'lang2': 'TextEdit', 'lang3': 'TextEdit', 'adm3_ref_n': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', });
lyr_Dhgaka_Division2_1.set('fieldImages', {'adm2_name': 'TextEdit', 'adm2_name1': 'TextEdit', 'adm2_name2': 'TextEdit', 'adm2_name3': 'TextEdit', 'adm2_pcode': 'TextEdit', 'adm1_name': 'TextEdit', 'adm1_name1': 'TextEdit', 'adm1_name2': 'TextEdit', 'adm1_name3': 'TextEdit', 'adm1_pcode': 'TextEdit', 'adm0_name': 'TextEdit', 'adm0_name1': 'TextEdit', 'adm0_name2': 'TextEdit', 'adm0_name3': 'TextEdit', 'adm0_pcode': 'TextEdit', 'valid_on': 'DateTime', 'valid_to': 'DateTime', 'area_sqkm': 'TextEdit', 'version': 'TextEdit', 'lang': 'TextEdit', 'lang1': 'TextEdit', 'lang2': 'TextEdit', 'lang3': 'TextEdit', 'adm2_ref_n': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', });
lyr_Dhgaka_Division_2.set('fieldImages', {'adm1_name': 'TextEdit', 'adm1_name1': 'TextEdit', 'adm1_name2': 'TextEdit', 'adm1_name3': 'TextEdit', 'adm1_pcode': 'TextEdit', 'adm0_name': 'TextEdit', 'adm0_name1': 'TextEdit', 'adm0_name2': 'TextEdit', 'adm0_name3': 'TextEdit', 'adm0_pcode': 'TextEdit', 'valid_on': 'DateTime', 'valid_to': 'DateTime', 'area_sqkm': 'TextEdit', 'version': 'TextEdit', 'lang': 'TextEdit', 'lang1': 'TextEdit', 'lang2': 'TextEdit', 'lang3': 'TextEdit', 'adm1_ref_n': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', });
lyr_Dhgaka_Division3_0.set('fieldLabels', {'adm3_name': 'inline label - always visible', 'adm3_name1': 'no label', 'adm3_name2': 'no label', 'adm3_name3': 'no label', 'adm3_pcode': 'no label', 'adm2_name': 'no label', 'adm2_name1': 'no label', 'adm2_name2': 'no label', 'adm2_name3': 'no label', 'adm2_pcode': 'no label', 'adm1_name': 'no label', 'adm1_name1': 'no label', 'adm1_name2': 'no label', 'adm1_name3': 'no label', 'adm1_pcode': 'no label', 'adm0_name': 'no label', 'adm0_name1': 'no label', 'adm0_name2': 'no label', 'adm0_name3': 'no label', 'adm0_pcode': 'no label', 'valid_on': 'no label', 'valid_to': 'no label', 'area_sqkm': 'no label', 'version': 'no label', 'lang': 'no label', 'lang1': 'no label', 'lang2': 'no label', 'lang3': 'no label', 'adm3_ref_n': 'no label', 'center_lat': 'no label', 'center_lon': 'no label', });
lyr_Dhgaka_Division2_1.set('fieldLabels', {'adm2_name': 'inline label - always visible', 'adm2_name1': 'no label', 'adm2_name2': 'no label', 'adm2_name3': 'no label', 'adm2_pcode': 'no label', 'adm1_name': 'no label', 'adm1_name1': 'no label', 'adm1_name2': 'no label', 'adm1_name3': 'no label', 'adm1_pcode': 'no label', 'adm0_name': 'no label', 'adm0_name1': 'no label', 'adm0_name2': 'no label', 'adm0_name3': 'no label', 'adm0_pcode': 'no label', 'valid_on': 'no label', 'valid_to': 'no label', 'area_sqkm': 'no label', 'version': 'no label', 'lang': 'no label', 'lang1': 'no label', 'lang2': 'no label', 'lang3': 'no label', 'adm2_ref_n': 'no label', 'center_lat': 'no label', 'center_lon': 'no label', });
lyr_Dhgaka_Division_2.set('fieldLabels', {'adm1_name': 'no label', 'adm1_name1': 'no label', 'adm1_name2': 'no label', 'adm1_name3': 'no label', 'adm1_pcode': 'no label', 'adm0_name': 'no label', 'adm0_name1': 'no label', 'adm0_name2': 'no label', 'adm0_name3': 'no label', 'adm0_pcode': 'no label', 'valid_on': 'no label', 'valid_to': 'no label', 'area_sqkm': 'no label', 'version': 'no label', 'lang': 'no label', 'lang1': 'no label', 'lang2': 'no label', 'lang3': 'no label', 'adm1_ref_n': 'no label', 'center_lat': 'no label', 'center_lon': 'no label', });
lyr_Dhgaka_Division_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
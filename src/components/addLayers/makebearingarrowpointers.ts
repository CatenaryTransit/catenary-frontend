export function makeBearingArrowPointers(map:any, darkMode:boolean,layerspercategory:any) {
    const busbearingiconsize = ['interpolate', ['linear'], ['zoom'], 9, 0.1, 12, 0.25, 15, 0.4]

			const busbearingoffset = ['interpolate', ['linear'], ['zoom'],9, ['literal', [0, -64]], 13, ['literal', [0, -45]], 15, ['literal', [0, -48]]]

			const railbearingiconsize = ['interpolate', ['linear'], ['zoom'], 9, 0.2, 12, 0.3, 15, 0.5]

			const railbearingoffset = ['interpolate', ['linear'], ['zoom'],9, ['literal', [0, -80]], 13, ['literal', [0, -60]], 15, ['literal', [0, -60]]]

			const geobearingoffset = ['interpolate', ['linear'], ['zoom'],9, ['literal', [0, -80]], 13, ['literal', [0, -60]], 15, ['literal', [0, -60]], 17, ['literal', [0, -50]]];

			map.loadImage('./icons/pointing-shell-light.png', (error, image) => {
				if (image) {
					
					map.addImage('pointingshelllight', image);
				}});

			if (true) {
				map.loadImage('./icons/pointing-filled.png', (error, image) => {
				if (error) throw error;

				if (image) {
				map.addImage('pointingcoloured', image, {sdf: true});

				
				map.addLayer({
					id:  layerspercategory.bus.pointing,
					source: 'buses',
					type: 'symbol',
					filter: ["!=", 0, ['get', 'bearing']],
					paint: {
						'icon-color': ['get', 'contrastdarkmodebearing'],
						'icon-opacity': 0.4
					},
					layout: {
						'icon-image': 'pointingcoloured',
						'icon-allow-overlap': true,
						'icon-ignore-placement': true,
						'icon-rotate': ['get', 'bearing'],
						'icon-rotation-alignment': 'map',
						'icon-offset': busbearingoffset,
						'icon-size': busbearingiconsize
					},
                    minzoom: 8
				});

				map.addLayer({
					id: layerspercategory.intercityrail.pointing,
					source: 'intercityrail',
					type: 'symbol',
					filter: ["!=", 0, ['get', 'bearing']],
					paint: {
						'icon-color': ['get', 'contrastdarkmodebearing'],
						'icon-opacity': 0.6
					},
					minZoom: 2,
					layout: {
						'icon-image': 'pointingcoloured',
						'icon-allow-overlap': true,
						'icon-ignore-placement': true,
						'icon-rotate': ['get', 'bearing'],
						'icon-rotation-alignment': 'map',
						'icon-offset': railbearingoffset,
						'icon-size': railbearingiconsize
					}
				});

				map.addLayer({
					id: layerspercategory.localrail.pointing,
					source: 'localrail',
					type: 'symbol',
					filter: ["!=", 0, ['get', 'bearing']],
					paint: {
						'icon-color': ['get', 'contrastdarkmodebearing'],
						'icon-opacity': 0.6
					},
					layout: {
						'icon-image': 'pointingcoloured',
						'icon-allow-overlap': true,
						'icon-ignore-placement': true,
						'icon-rotate': ['get', 'bearing'],
						'icon-rotation-alignment': 'map',
						'icon-offset': railbearingoffset,
						'icon-size': railbearingiconsize
					}
				});

				map.addLayer({
					id: layerspercategory.other.pointing,
					source: 'other',
					type: 'symbol',
					filter: ["!=", 0, ['get', 'bearing']],
					paint: {
						'icon-color': ['get', 'contrastdarkmodebearing'],
						'icon-opacity': 0.6
					},
					layout: {
						'icon-image': 'pointingcoloured',
						'icon-allow-overlap': true,
						'icon-ignore-placement': true,
						'icon-rotate': ['get', 'bearing'],
						'icon-rotation-alignment': 'map',
						'icon-offset': railbearingoffset,
						'icon-size': railbearingiconsize
					}
				});

				//USER LOCATION

				map.addLayer({
					id: 'geolocationheadingfill',
					source: 'geolocation',
					type: 'symbol',
					filter: ["!=", null, ['get', 'heading']],
					paint: {
						'icon-color': "#2563EB",
						'icon-opacity': 0.8
					},
					layout: {
						'icon-image': 'pointingcoloured',
						'icon-allow-overlap': true,
						'icon-ignore-placement': true,
						'icon-rotate': ['get', 'heading'],
						'icon-rotation-alignment': 'map',
						'icon-offset':  geobearingoffset,
						'icon-size': railbearingiconsize
					}
				});

				
				}

			})

			}

			if (true) {
				map.loadImage('./icons/pointing-shell.png', (error, image) => {
				if (error) throw error;

				if (image) {
					
				map.addImage('pointingshell', image);

				map.addLayer({
					id: layerspercategory.bus.pointingshell,
					source: 'buses',
					type: 'symbol',
					filter: ["!=", 0, ['get', 'bearing']],
					paint: {
						'icon-opacity': ['interpolate', ['linear'], ['zoom'], 2, 0, 2.5, 0.9, 5, 0.8, 9, 0.6, 11.5, 0.8]
					},
					layout: {
						'icon-image': darkMode == true ? 'pointingshell' : 'pointingshelllight',
						'icon-allow-overlap': true,
						'icon-ignore-placement': true,
						'icon-rotate': ['get', 'bearing'],
						'icon-rotation-alignment': 'map',
						'icon-offset': busbearingoffset,
						'icon-size': busbearingiconsize
					},
                    minzoom: 8
				});

				map.addLayer({
					id: layerspercategory.intercityrail.pointingshell,
					source: 'intercityrail',
					type: 'symbol',
					filter: ["!=", 0, ['get', 'bearing']],
					paint: {
						'icon-opacity': ['interpolate', ['linear'], ['zoom'], 9, 0.3, 11.5, 0.8]
					},
					minZoom: 2,
					layout: {
						'icon-image': darkMode == true ? 'pointingshell' : 'pointingshelllight',
						'icon-allow-overlap': true,
						'icon-ignore-placement': true,
						'icon-rotate': ['get', 'bearing'],
						'icon-rotation-alignment': 'map',
						'icon-offset': railbearingoffset,
						'icon-size': railbearingiconsize
					},
				});

				map.addLayer({
					id: layerspercategory.localrail.pointingshell,
					source: 'localrail',
					type: 'symbol',
					filter: ["!=", 0, ['get', 'bearing']],
					paint: {
						'icon-opacity': ['interpolate', ['linear'], ['zoom'], 9, 0.3, 11.5, 0.8]
					},
					layout: {
						'icon-image': darkMode == true ? 'pointingshell' : 'pointingshelllight',
						'icon-allow-overlap': true,
						'icon-ignore-placement': true,
						'icon-rotate': ['get', 'bearing'],
						'icon-rotation-alignment': 'map',
						'icon-offset': railbearingoffset,
						'icon-size': railbearingiconsize
					},
				});

				map.addLayer({
					id: layerspercategory.other.pointingshell,
					source: 'other',
					type: 'symbol',
					filter: ["!=", 0, ['get', 'bearing']],
					paint: {
						'icon-opacity': ['interpolate', ['linear'], ['zoom'], 9, 0.3, 11.5, 0.8]
					},
					layout: {
						'icon-image': darkMode == true ? 'pointingshell' : 'pointingshelllight',
						'icon-allow-overlap': true,
						'icon-ignore-placement': true,
						'icon-rotate': ['get', 'bearing'],
						'icon-rotation-alignment': 'map',
						'icon-offset': railbearingoffset,
						'icon-size': railbearingiconsize
					},
				});

				//usergeo

				map.addLayer({
					id: "geolocationheadingshell",
					source: 'geolocation',
					type: 'symbol',
					filter: ["!=", null, ['get', 'heading']],
					paint: {
						'icon-opacity': ['interpolate', ['linear'], ['zoom'], 9, 0.3, 11.5, 0.8]
					},
					layout: {
						'icon-image': darkMode == true ? 'pointingshell' : 'pointingshelllight',
						'icon-allow-overlap': true,
						'icon-ignore-placement': true,
						'icon-rotate': ['get', 'heading'],
						'icon-rotation-alignment': 'map',
						'icon-offset':  geobearingoffset,
						'icon-size': railbearingiconsize
					},
				});
				}
			})
			}
}
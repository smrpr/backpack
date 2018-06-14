# bpk-component-map

> Backpack map component.

## Installation

```sh
npm install bpk-component-map --save-dev
```

## Usage

```js
import React from 'react';
import BpkText from 'bpk-component-text';
import BpkMap, { BpkOverlayView } from 'bpk-component-map';

export default () => (
  <BpkMap
    containerElement={<div style={{ height: '400px' }} />}
    mapElement={<div style={{ height: `100%` }} />}
    zoom={15}
    zoomEnabled={false}
    scrollEnabled={false}
    region={{
      latitude: 27.9881,
      longitude: 86.925,
    }}
  >
    <BpkOverlayView position={{ latitude: 27.9881, longitude: 86.925 }}>
      <BpkText>Shibuya Crossing</BpkText>
    </BpkOverlayView>
  <BpkMap>
);
```

## Accompanying HOCs

### withScriptjs

`withScriptjs` is a HOC that loads the Google Maps Javascript, then loads the map. This is useful for when you don't already have the Google Maps Javascript loaded.

If you intend to include multiple maps on one page, it's better to load the Google Maps Javascript elsewhere and not use this HOC, as it downloads the script every time it's used.

```js
import React from 'react';
import BpkMap, { withScriptjs } from 'bpk-component-map';

const MAP_URL = 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places';

const BpkMapWithScript = withScriptjs(BpkMap);

export default () => (
  <BpkMapWithScript
    googleMapURL={MAP_URL}
    loadingElement={<div />}
    containerElement={<div style={{ height: '400px' }} />}
    mapElement={<div style={{ height: `100%` }} />}
    zoom={15}
    region={{
      latitide: 27.9881,
      longitude: 86.925,
    }}
    zoomEnabled={false}
    scrollEnabled={false}
  />
);
```

## Props

### BpkMap

| Property	       | PropType                                     | Required                 | Default Value |
| ---------------- | -------------------------------------------- | ------------------------ | ------------- |
| containerElement | node                                         | true                     | -             |
| mapElement       | node                                         | true                     | -             |
| region           | shape({latitude: number, longitude: number}) | true                     | -             |
| mapRef           | func                                         | false                    | null          |
| onRegionChange   | func                                         | false                    | null          |
| onZoom           | func                                         | false                    | null          |
| scrollEnabled    | bool                                         | false                    | true          |
| zoom             | number                                       | false                    | 15            |
| zoomEnabled      | bool                                         | false                    | true          |

When using `withScriptjs`, some additional props are required:

| Property	       | PropType                                     | Required                 | Default Value |
| ---------------- | -------------------------------------------- | ------------------------ | ------------- |
| googleMapURL     | string                                       | true                     | -             |
| loadingElement   | node                                         | true                     | -             |

### BpkOverlayView

| Property	       | PropType                                     | Required                 | Default Value      |
| ---------------- | -------------------------------------------- | ------------------------ | ------------------ |
| children         | node                                         | true                     | -                  |
| position         | shape({latitude: number, longitude: number}) | true                     | -                  |
| mapPaneName      | oneOf(MAP_PANE_NAMES)                        | false                    | overlayMouseTarget |


## Methods

### BpkMap

* `fitBounds(south, west, north, east)`
* `getBounds`
* `getCenter`
* `getZoom`

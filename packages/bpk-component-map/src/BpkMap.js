/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2018 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* @flow */

import React, { type Node } from 'react';
import PropTypes from 'prop-types';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

type MapRef = ?{
  getBounds: () => Object,
  getCenter: () => Object,
  getZoom: () => number,
  fitBounds: ({
    south: number,
    west: number,
    north: number,
    east: number,
  }) => void,
};

type Props = {
  containerElement: Node,
  mapElement: Node,
  region: {
    latitude: number,
    longitude: number,
  },
  scrollEnabled: boolean,
  zoom: number,
  zoomEnabled: boolean,
  children: ?Node,
  mapRef: ?(?HTMLInputElement) => mixed,
  onRegionChange: ?({ [string]: any }, { [string]: any }) => mixed,
  onZoom: ?(number) => mixed,
};

const BpkMap = withGoogleMap((props: Props) => {
  const {
    children,
    mapRef,
    onRegionChange,
    onZoom,
    region,
    scrollEnabled,
    zoom,
    zoomEnabled,
  } = props;
  let ref: MapRef = null;
  return (
    <GoogleMap
      ref={map => {
        ref = map;
        if (mapRef) {
          mapRef(map);
        }
      }}
      defaultCenter={{
        lat: region.latitude,
        lng: region.longitude,
      }}
      defaultZoom={zoom}
      options={{
        gestureHandling: scrollEnabled ? 'auto' : 'none',
        zoomControl: zoomEnabled,
      }}
      onDragEnd={() => {
        if (ref && onRegionChange) {
          onRegionChange(ref.getBounds(), ref.getCenter());
        }
      }}
      onZoomChanged={() => {
        if (ref && onZoom) {
          onZoom(ref.getZoom());
        }
      }}
    >
      {children}
    </GoogleMap>
  );
});

BpkMap.propTypes = {
  containerElement: PropTypes.node.isRequired,
  mapElement: PropTypes.node.isRequired,
  region: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
  }).isRequired,
  children: PropTypes.node,
  mapRef: PropTypes.func,
  onRegionChange: PropTypes.func,
  onZoom: PropTypes.func,
  scrollEnabled: PropTypes.bool,
  zoom: PropTypes.number,
  zoomEnabled: PropTypes.bool,
};

BpkMap.defaultProps = {
  children: null,
  mapRef: null,
  onRegionChange: null,
  onZoom: null,
  scrollEnabled: true,
  zoom: 15,
  zoomEnabled: true,
};

export default BpkMap;

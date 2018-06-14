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
import { OverlayView } from 'react-google-maps';

const MAP_PANE_NAMES = {
  floatPane: 'floatPane',
  mapPane: 'mapPane',
  markerLayer: 'markerLayer',
  overlayLayer: 'overlayLayer',
  overlayMouseTarget: 'overlayMouseTarget',
};

type Props = {
  children: Node,
  position: {
    latitude: number,
    longitude: number,
  },
  mapPaneName: $Keys<typeof MAP_PANE_NAMES>,
};

const BpkOverlayView = (props: Props) => {
  const { children, position, mapPaneName, ...rest } = props;
  return (
    <OverlayView
      mapPaneName={mapPaneName}
      position={{ lat: position.latitude, lng: position.longitude }}
      {...rest}
    >
      {children}
    </OverlayView>
  );
};
BpkOverlayView.propTypes = {
  children: PropTypes.node.isRequired,
  position: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
  }).isRequired,
  mapPaneName: PropTypes.oneOf(Object.keys(MAP_PANE_NAMES)),
};

BpkOverlayView.defaultProps = {
  mapPaneName: MAP_PANE_NAMES.overlayMouseTarget,
};

export default BpkOverlayView;

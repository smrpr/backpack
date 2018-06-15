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

import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import BpkText from 'bpk-component-text';
import BpkMap, { BpkOverlayView, withScriptjs } from './index';

const BpkMapWithLoading = withScriptjs(BpkMap);

const StoryMap = props => {
  const { children, language, ...rest } = props;
  return (
    <BpkMapWithLoading
      containerElement={<div style={{ height: '400px' }} />}
      mapElement={<div style={{ height: `100%` }} />}
      googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&language=${language}&libraries=geometry,drawing,places`}
      loadingElement={<div />}
      {...rest}
    >
      {children}
    </BpkMapWithLoading>
  );
};

StoryMap.propTypes = {
  children: PropTypes.node,
  language: PropTypes.string,
};

StoryMap.defaultProps = {
  children: null,
  language: '',
};

const onZoom = level => {
  action(`Zoom changed to ${level}`);
};

const onRegionChange = (bounds, center) => {
  action(
    `Dragged to bounds: ${bounds.toString()}, center: ${center.toString()}`,
  );
};

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

storiesOf('bpk-component-map', module)
  .add('Simple', () => (
    <StoryMap
      zoom={15}
      region={{ latitude: 55.944357, longitude: -3.1967116 }}
      language="en"
    />
  ))
  .add('Zoom and drag disabled', () => (
    <StoryMap
      region={{ latitude: 55.944357, longitude: -3.1967116 }}
      scrollEnabled={false}
      zoomEnabled={false}
      language="zh"
    />
  ))
  .add('With onZoom and onRegionChange callbacks', () => (
    <StoryMap
      region={{ latitude: 55.944357, longitude: -3.1967116 }}
      onZoom={onZoom}
      onRegionChange={onRegionChange}
    />
  ))
  .add('With a bounding box', () => (
    <StoryMap
      mapRef={(map: MapRef) => {
        if (map) {
          map.fitBounds({
            south: 55.94129273544452,
            west: -3.2285547854247625,
            north: 55.952707392208396,
            east: -3.159632742578083,
          });
        }
      }}
    />
  ))
  .add('With markers', () => (
    <StoryMap region={{ latitude: 55.944357, longitude: -3.1967116 }}>
      <BpkOverlayView position={{ latitude: 55.944, longitude: -3.1967116 }}>
        <BpkText>Backpack</BpkText>
      </BpkOverlayView>
    </StoryMap>
  ));

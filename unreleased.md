# Unreleased

**Breaking:**
- bpk-component-map:
  - Removed all exports except for `BpkMap`, `BpkOverlayView` and `withScriptJs`.
  - Introduced `BpkOverlayView` component to replace `OverlayView`.
  - Simplified `BpkMap`'s props by removing unused ones and renaming others.

**Added:**
- react-native-bpk-component-carousel-indicator:
  - Introducing the React Native carousel indicator component.

- react-bpk-component-infinite-scroll:
  - Introducing a React component for building infinite lists.

- react-native-bpk-component-carousel:
  - Introducing the React Native carousel component.

**Fixed:**
- react-bpk-component-infinite-scroll:
  - In addition to issuing a prop warning when using emphasize in combination with xxl on iOS now nothing actually happens.

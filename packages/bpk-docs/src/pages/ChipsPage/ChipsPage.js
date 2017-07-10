import React, { Component } from 'react';
import BpkChip from 'bpk-component-chip';
import BpkButton from 'bpk-component-button';
import BpkParagraph from 'bpk-component-paragraph';
import { spacingSm } from 'bpk-tokens/tokens/base.es6';

import chipReadme from 'bpk-component-chip/readme.md';

import DocsPageBuilder from './../../components/DocsPageBuilder';

class DefaultChipContainer extends Component {
  constructor() {
    super();

    this.removeChip = this.removeChip.bind(this);
    this.addRemovableChip = this.addRemovableChip.bind(this);

    this.state = {
      chipNames: [],
      nextChipId: 1,
    };
  }

  addRemovableChip() {
    const newChipNames = this.state.chipNames.slice(0);
    newChipNames.push(`Example Chip ${this.state.nextChipId}`);
    this.setState({
      chipNames: newChipNames,
      nextChipId: this.state.nextChipId + 1,
    });
  }

  removeChip(chipName) {
    const newChipNames = this.state.chipNames.slice(0);
    const indexToRemove = newChipNames.indexOf(chipName);
    newChipNames.splice(indexToRemove, 1);
    this.setState({
      chipNames: newChipNames,
    });
  }

  render() {
    return (
      <div>
        <BpkButton
          style={{ marginBottom: spacingSm }}
          onClick={this.addRemovableChip}
        >
          Add removable chip!
        </BpkButton>
        <div>
          {this.state.chipNames.map((chipName, index) => (
            <span
              style={{ display: 'inline-block', marginBottom: spacingSm, marginRight: spacingSm }}
              key={index.toString()}
            >
              <BpkChip onClose={() => this.removeChip(chipName)}>
                {chipName}
              </BpkChip>
            </span>
          ))}
        </div>
      </div>
    );
  }
}

const components = [
  {
    id: 'default',
    title: 'Default',
    blurb: [
      <BpkParagraph>
        The default configuration displays a text value with a close button.
        This button can be assigned a custom action to remove itself from the view.
      </BpkParagraph>,
    ],
    examples: [
      <DefaultChipContainer />,
    ],
  },
];

const ChipsPage = () => <DocsPageBuilder
  title="Chips"
  blurb={[
    <BpkParagraph>
      Chips, sometimes called tags, are useful for displaying keywords or categories from common sets of data.
    </BpkParagraph>,
  ]}
  components={components}
  readme={chipReadme}
  sassdocId="cards"
/>;

export default ChipsPage;

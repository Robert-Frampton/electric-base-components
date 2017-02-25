'use strict';

import Autocomplete from 'metal-autocomplete';
import core from 'metal';
import Soy from 'metal-soy';

import ElectricSearchBase from './ElectricSearchBase';
import templates from './ElectricSearchAutocomplete.soy';

class ElectricSearchAutocomplete extends ElectricSearchBase {
	attached() {
		const {element} = this;

		const {input} = this.refs;

		if (input) {
			var autocomplete = new Autocomplete({
				autoBestAlign: false,
				data: this.search_.bind(this),
				format: this.format_.bind(this),
				inputElement: input,
				select: ({url}) => {
					window.location = url;
				}
			});
		}
	}

	format_(data) {
		let {title, description, url} = data;

		if (description && description.length > 100) {
			description = `${description.substr(0, 100)}...`;
		}

		return {
			textPrimary: `<a class="autocomplete-link" href="${url}">
				<div class="autocomplete-result">
					<p class="autocomplete-title">${title}</p>
					<p class="autocomplete-text">${description}</p>
				</div>
			</a>`,
			url: url
		};
	}
};

Soy.register(ElectricSearchAutocomplete, templates);

export default ElectricSearchAutocomplete;

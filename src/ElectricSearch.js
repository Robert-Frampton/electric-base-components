'use strict';

import core from 'metal';
import Soy from 'metal-soy';

import ElectricSearchBase from './ElectricSearchBase';
import templates from './ElectricSearch.soy';

class ElectricSearch extends ElectricSearchBase {
	attached() {
		ElectricSearchBase.prototype.attached.apply(this);

		const queryString = window.location.search;
		const queryIndex = queryString.indexOf('q=');

		if (queryIndex !== -1) {
			this.query = queryString.substr(queryIndex + 2);
		}
	}

	handleInput_(event) {
		const {target} = event;

		this.query = target.value;
	}
};

ElectricSearch.STATE = {
	maxResults: {
		value: Infinity
	}
};

Soy.register(ElectricSearch, templates);

export default ElectricSearch;

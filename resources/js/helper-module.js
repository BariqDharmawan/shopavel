/*!
 * Get all siblings of an element
 * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
 */

export const getSiblings = (elem) => {
	return Array.prototype.filter.call(elem.parentNode.children, (sibling) => {
		return sibling !== elem;
	});
};


/*
	formatting currency to rupiah
*/
export const formattingRupiah = (currency) => {
	return new Intl.NumberFormat('id-ID', {
		style: 'currency', currency: 'IDR'
	}).format(currency).replace(',00', '');
};

/**
 * set form action
 */
export const setFormAction = (form, url) => {
	document.querySelector(form).action = url
}

/**
 * get url without protocol
 */
export function getUrlWithoutProtocol(urlnya) {
	return urlnya.split('//').pop()
}

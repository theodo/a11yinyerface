const SCRAMBLE_FREQUENCY_MS = 200;
let scrambleIntervalle: NodeJS.Timer;

export const activeScrambleLetter = () => {
	scriptImportedFromExternalRepository();
};

export const removeScrambleLetter = () => {
	clearInterval(scrambleIntervalle);
};

/*********************************
 * Imported from https://github.com/geon/geon.github.com/pull/3
 *********************************/
const scriptImportedFromExternalRepository = () => {
	// create a list of text nodes to be messed up
	function getTextNodes() {
		const nodes = [];
		const walker = document.createTreeWalker(
			document.body,
			NodeFilter.SHOW_TEXT,
			null
		);
		while (walker.nextNode()) {
			nodes.push(walker.currentNode);
		}
		return nodes;
	}
	const textNodes = getTextNodes();

	const iterateFunction = function () {
		for (let i = 0; i < textNodes.length; i++) {
			textNodes[i].nodeValue = messUpWords(textNodes[i].nodeValue || '');
		}
	};

	// iterate over each text node and mess up their values
	scrambleIntervalle = setInterval(
		() => window.requestAnimationFrame(iterateFunction),
		SCRAMBLE_FREQUENCY_MS
	);

	// parse words out of a string and mess them up
	function messUpWords(str: string) {
		let messedUpText = '';

		// iterate through each word and scramble it
		const re = /\w+/g;
		let word;
		while ((word = re.exec(str)) != null) {
			// include any special characters before the word
			messedUpText += str.slice(messedUpText.length, word.index);
			// scramble the word
			messedUpText += scrambleWord(word[0]);
		}
		// include any special characters after the word
		messedUpText += str.slice(messedUpText.length, str.length);

		return messedUpText;
	}

	// scramble the word, being sure to always keep the first and last letters
	// in-tact. this is important so the text can still be read.
	function scrambleWord(word: string) {
		let scrambledWord = '';

		// if it's a small word or ~randomness~, don't scramble it
		if (word.length < 3 || Math.random() > 1 / 10) {
			return word;
		}

		const a = getRandomInt(1, word.length - 1);
		const b = getRandomInt(a, word.length - 1);

		scrambledWord += word.slice(0, a);
		scrambledWord += word.slice(a, b).split('').reverse().join('');
		scrambledWord += word.slice(b, word.length);

		return scrambledWord;
	}

	// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
	function getRandomInt(min: number, max: number) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}
};
/******************************** END OF IMPORT ********************************/

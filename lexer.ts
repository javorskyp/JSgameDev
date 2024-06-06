export enum TokenType {
	Number,
	Identifier,
	Let,
	BinaryOperator,
	Equals,
	OpenParen,
	CloseParen,
}

const KEYWORDS: Record<string, TokenType> = {
	let: TokenType.Let,
};

export interface Token {
	value: string;
	type: TokenType; 
}

function token(value = "", type: TokenType): Token {
	return { value, type };
}

function isalpha(src: string) {
	return src.toUpperCase() != src.toLowerCase();
}


function isskippable(str: string) {
	return str == " " || str == "\n" || str == "\t";
}

function isint(str: string) {
	const c = str.charCodeAt(0);
	const bounds = ["0".charCodeAt(0), "9".charCodeAt(0)];
	return c >= bounds[0] && c <= bounds[1];
}
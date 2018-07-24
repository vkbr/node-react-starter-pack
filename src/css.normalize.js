import { css } from 'emotion';

const resetCss = css`
	margin: 0;
	padding: 0;
	font-family: Whitney,DIN,Helvetica,Arial,sans-serif;
	width: 100%;
	height: 100%;
`;

document.body.classList.add(resetCss);
document.getElementById('app').classList.add(resetCss);

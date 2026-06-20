// const iconColor = '#4527a4';

// A single team profile: a circular avatar crowning a card, with name/role
// lines and a solid slide-up social bar (white social dots) at the base.
export const blockIcon = (
	<svg xmlns='http://www.w3.org/2000/svg' width={30} height={30} viewBox='0 0 24 24'>
		<rect x='4.5' y='6' width='15' height='15' rx='2.5'  opacity='0.12' />
		<rect x='4.5' y='6' width='15' height='15' rx='2.5' fill='none'  strokeWidth='1.5' />
		<circle cx='12' cy='6' r='4.3'  opacity='0.15' />
		<circle cx='12' cy='6' r='3.1'  />
		<rect x='7.5' y='12.2' width='9' height='1.5' rx='0.75'  />
		<rect x='9' y='14.8' width='6' height='1.2' rx='0.6'  opacity='0.5' />
		<path d='M4.5 17.8H19.5V18.5A2.5 2.5 0 0 1 17 21H7a2.5 2.5 0 0 1-2.5-2.5z'  />
		<circle cx='9' cy='19.4' r='0.85' fill='#ffffff' />
		<circle cx='12' cy='19.4' r='0.85' fill='#ffffff' />
		<circle cx='15' cy='19.4' r='0.85' fill='#ffffff' />
	</svg>
);

export const verticalLineIcon = <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} viewBox='0 0 14.707 14.707'>
	<rect x='6.275' y='0' width='2.158' height='14.707' />
</svg>;

export const horizontalLineIcon = <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} viewBox='0 0 357 357'>
	<path d='M357,204H0v-51h357V204z' />
</svg>;

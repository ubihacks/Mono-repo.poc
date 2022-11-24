const baseStyle = {
	':focus:not(:focus-visible)': {
		boxShadow: 'none',
	},
	fontWeight: 'medium',
};

const variants = {
	primary: () => ({
		bg: 'bg-accent',
		color: 'accent',
	}),
	'primary-on-accent': () => ({
		bgGradient: 'linear(to-b, #7928CA, #FF0080)',
		color: 'white',
	}),
	'menu-gradient': () => ({
		fontWeight: '500',
		color: 'gray.700',
		_hover: {
			color: 'white', bgGradient: 'linear(to-br, #5148E0, #9048E0)', boxShadow: 'md', _disabled: {
				bgGradient: 'linear(to-br, #5148E0, #9048E0)',
			},
		},
		_active: { bgGradient: 'linear(to-b, #5f51c9, #7e56c8)', boxShadow: 'md' },
		_activeLink: { color: 'white', bgGradient: 'linear(to-b, #5f51c9, #7e56c8)', boxShadow: 'md' },
		_dark: { color: 'white', boxShadow: 'dark-md' },
		_disabled: {
			color: 'white',
			bgGradient: 'linear(to-br, #5148E0, #9048E0)',
			_hover: {
				bgGradient: 'linear(to-b, #5f51c9, #7e56c8)',
				boxShadow: 'md',
			},
		},
	}),

	'gradient-purple': () => ({
		fontWeight: '500',
		color: 'white',
		padding: '10px 16px 10px 16px',
		bgGradient: 'linear(to-br, #5148E0, #9048E0)',
		_hover: {
			color: 'white', bgGradient: 'linear(to-br, #5148E0, #9048E0)', boxShadow: 'md', _hover: {
				_disabled: {
					bgGradient: 'linear(to-br, #5148E0, #9048E0)',
				},
			},
		},
		_active: { bgGradient: 'linear(to-b, #5f51c9, #7e56c8)', boxShadow: 'md' },
		_focus: { bgGradient: 'linear(to-b, #5f51c9, #7e56c8)', boxShadow: 'md' },
		_activeLink: { color: 'white', bgGradient: 'linear(to-b, #5f51c9, #7e56c8)', boxShadow: 'md' },
		_dark: { color: 'white', boxShadow: 'dark-md' },
		_disabled: {
			_hover: {
				bgGradient: 'linear(to-b, #5f51c9, #7e56c8)',
				boxShadow: 'md',
			},
		},
	}),
	'gradient-red': () => ({
		fontWeight: '500',
		color: 'white',
		padding: '10px 16px 10px 16px',
		bgGradient: 'linear(to-b, #E55B48, #E5734A)',
		_hover: {
			color: 'white', bgGradient: 'linear(to-b, #E55B48, #E5734A)', boxShadow: 'md', _disabled: {
				bgGradient: 'linear(to-b, #E55B48, #E5734A)',
			},
		},
		_active: { bgGradient: 'linear(to-b, #5f51c9, #7e56c8)', boxShadow: 'md' },
		_focus: { bgGradient: 'linear(to-b, #5f51c9, #7e56c8)', boxShadow: 'md' },
		_activeLink: { color: 'white', bgGradient: 'linear(to-b, #5f51c9, #7e56c8)', boxShadow: 'md' },
		_dark: { color: 'white', boxShadow: 'dark-md' },
		_disabled: {
			bgGradient: 'linear(to-b, #E55B48, #E5734A)',
			_hover: {
				bgGradient: 'linear(to-b, #5f51c9, #7e56c8)',
				boxShadow: 'md',
			},
		},
	}),

	'outline': () => ({
		borderWidth: 2
	}),

	'solid-dark': () => ({
		bg: 'dark.200',
		fontWeight: '500',
		borderRadius: 'full',
		color: 'dark.700',
		_hover: { boxShadow: 'md', bg: 'dark.300' },
		_dark: {
			bg: 'dark.700',
			color: 'white',
			_hover: { boxShadow: 'md', bg: 'dark.900' },
		},
	}),

	'rounded-outline': () => ({
		fontWeight: '500',
		borderRadius: 'full',
		borderWidth: 2,
		borderColor: 'gray.200',
		color: 'gray.500',
		_hover: {
			borderColor: 'gray.500'
		},
		_dark: {
			color: 'gray.200',
			borderColor: 'gray.200', _hover: {
				borderColor: 'gray.100'
			},
		}

	}),
	success: () => ({
		bg: 'green.400',
		color: 'white',
		_dark: {
			bg: 'green.500',
			color: 'white',
		},
	}),
	alert: () => ({
		bg: 'red.500',
		color: 'white',
		_dark: {
			bg: 'red.500',
			color: 'black',
		},
	}),
};

export default {
	baseStyle,
	variants,
};

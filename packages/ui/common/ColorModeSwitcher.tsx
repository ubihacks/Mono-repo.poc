import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton, useColorMode } from '@chakra-ui/react';
import React from 'react';

function ColorModeSwitcher() {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<header>
			<IconButton
				colorScheme="gray"
				onClick={toggleColorMode}
				aria-label="Change Color Mode"
				icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
			/>
		</header>
	);
}

export default ColorModeSwitcher;

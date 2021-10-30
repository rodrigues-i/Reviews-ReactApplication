import React, { useMemo } from 'react';
import Reviews from './Reviews';


function Application() {
	const memoUse = useMemo(() => {
		return <Reviews />
	}, [])
	return (
		<main>
			{memoUse}
		</main>
		);
}

export default Application;
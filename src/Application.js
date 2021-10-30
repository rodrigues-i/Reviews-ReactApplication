import React, { useMemo } from 'react';
import Reviews from './Reviews';
import people from './data';


function Application() {
	const memoUse = useMemo(() => {
		return <Reviews people={ people }/>
	}, [])
	return (
		<main>
			{memoUse}
		</main>
		);
}

export default Application;
import { useState } from "react";
import PropTypes from "prop-types";

import Chat from "@components/Beta/Chat";
import Sidepanel, { MobileSidepanel } from "@components/Beta/Sidepanel";

const Container = ({ disconnected }) => {
	const [isComponentVisible, setIsComponentVisible] = useState(false);

	const toggleComponentVisibility = () => {
		setIsComponentVisible(!isComponentVisible);
	};

	return (
		// eslint-disable-next-line tailwindcss/no-custom-classname
		<main className='h-all-screen relative flex w-full overflow-hidden bg-[#010001]'>
			{isComponentVisible ? (
				<MobileSidepanel
					toggleComponentVisibility={toggleComponentVisibility}
					disconnected={disconnected}
				/>
			) : null}
			<div className='hidden w-[17.813rem] shrink-0 bg-[#010001] min-[1081px]:flex min-[1081px]:flex-col'>
				<div className='flex h-full min-h-0 flex-col '>
					<Sidepanel disconnected={disconnected} />
				</div>
			</div>
			<Chat
				toggleComponentVisibility={toggleComponentVisibility}
				disconnected={disconnected}
			/>
		</main>
	);
};

Container.propTypes = {
	disconnected: PropTypes.bool,
};

export default Container;

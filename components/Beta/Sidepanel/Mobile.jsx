import React from "react";
import PropTypes from "prop-types";

import Sidepanel from "./index";

const MobileSidepanel = ({ toggleComponentVisibility, disconnected }) => {
	return (
		<div id='headlessui-portal-root display:hidden'>
			<div data-headlessui-portal=''>
				<div>
					<div
						className='relative z-40'
						id='headlessui-dialog-:re:'
						aria-modal='true'
						data-headlessui-state='open'>
						<div className='fixed inset-0 bg-[#F8FDFF]/[0.08] backdrop-blur-sm'></div>
						<div className='fixed inset-0 z-40 flex'>
							<div
								className='relative flex w-full max-w-xs flex-1 translate-x-0 flex-col bg-gray-900'
								id='headlessui-dialog-panel-:rf:'
								data-headlessui-state='open'>
								<Sidepanel disconnected={disconnected} />
							</div>
							<div
								role='none'
								className='w-full'
								onClick={toggleComponentVisibility}></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

MobileSidepanel.propTypes = {
	toggleComponentVisibility: PropTypes.func,
	disconnected: PropTypes.bool,
};

export default MobileSidepanel;

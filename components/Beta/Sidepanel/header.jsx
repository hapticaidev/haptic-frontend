import Link from "next/link";
import Image from "next/image";

import logoMark from "@icons/landing/haptic-logomark.svg";
import HapticWordMark from "@icons/landing/haptic-wordmark.svg";

const SidepanelHeader = () => {
	return (
		<Link
			className='flex h-[2.766rem] min-h-[2.766rem] w-full gap-[0.746rem] px-3.5'
			href='/'
			passHref>
			<div className='relative flex w-[2.254rem] items-center justify-center'>
				<Image
					fill
					src={logoMark}
					alt='logo_desktop'
				/>
			</div>
			<div className='relative flex w-[13.063rem] items-center justify-center py-[0.411rem]'>
				<Image
					fill
					src={HapticWordMark}
					alt='wordmark_logo_desktop'
				/>
			</div>
		</Link>
	);
};

export default SidepanelHeader;

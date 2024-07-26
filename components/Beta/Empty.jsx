import Template from "./Template";

const EmptyChat = () => {
	return (
		<div className='relative flex size-full flex-col'>
			<h4
				// eslint-disable-next-line tailwindcss/no-custom-classname
				className='font-ppf mx-9 mt-8 text-[2.5rem] font-extrabold uppercase leading-[4.236rem] text-[#F8FDFF] tracking-[-0.03em] sm:mx-[7.25rem] sm:mt-[4.25rem] sm:text-[4.236rem] min-[1400px]:mt-[9.625rem]'>
				How can we help?
			</h4>
			<p
				// eslint-disable-next-line tailwindcss/no-custom-classname
				className='font-gm mx-9 mt-[1.618rem] text-[1.309rem] uppercase leading-[1.571rem] tracking-[-0.01em] text-[#F8FDFF]/[0.5] sm:mx-[7.25rem] lg:max-w-[44.833rem]'>
				your feedback is vital to our ecosystem. earn token rewards by offering insights to shape the future of
				AI.
			</p>
			<Template />
		</div>
	);
};

export default EmptyChat;

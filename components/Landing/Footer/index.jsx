import FooterInfo from "./Info";
import FooterForm from "./Form";

const Footer = () => {
	return (
		<footer className='footer fixed inset-x-0 bottom-0 z-0 flex h-fit w-full flex-col justify-between gap-6 rounded-[0.645rem_0.645rem_0px_0px] bg-[#F8FDFF] p-[1.375rem_0.875rem_2.007rem_0.875rem] uppercase text-[#010001] sm:gap-[3.25rem] md:flex-row md:p-[3.193rem_2.25rem]'>
			<FooterInfo />
			<FooterForm />
		</footer>
	);
};

export default Footer;

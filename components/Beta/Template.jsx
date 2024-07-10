import { useRouter, useSearchParams, usePathname } from "next/navigation";

import { SuggestionCardsData, BETA_APP_QUERY_PARAMS } from "@constants";

const Template = () => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const template = searchParams.get(BETA_APP_QUERY_PARAMS.CONVERSATION_TEMPLATE) || "";
	const params = searchParams.toString();

	const onClickHandler = (e, index) => {
		e.preventDefault();

		if (params.includes(BETA_APP_QUERY_PARAMS.CONVERSATION_TEMPLATE)) {
			const query = params.replace(
				`${BETA_APP_QUERY_PARAMS.CONVERSATION_TEMPLATE}=${template}`,
				`${BETA_APP_QUERY_PARAMS.CONVERSATION_TEMPLATE}=${index}`
			);
			router.replace(`${pathname}?${query}`);
		} else {
			router.replace(
				`${pathname}?${params ? params + "&" : ""}${BETA_APP_QUERY_PARAMS.CONVERSATION_TEMPLATE}=${index}`
			);
		}
	};

	const renderCard = (text, index) => {
		return (
			<button
				key={index}
				onClick={(e) => onClickHandler(e, index)}
				// eslint-disable-next-line tailwindcss/no-custom-classname
				className='font-hnd flex-start flex h-[12.563rem] rounded-[1.063rem] bg-[#1C1D1C] px-3.5 py-[1.375rem] text-left font-medium leading-5 text-[#F8FDFF] text-[1rem]'>
				{text}
			</button>
		);
	};

	return (
		<div className='mx-3 mt-[5.544rem] sm:mx-[7.25rem] pb-60'>
			<div className='grid grid-cols-[repeat(1,_12.563rem)] justify-items-center justify-center xl:justify-start gap-3 sm:grid-cols-[repeat(2,_12.563rem)] xl:grid-cols-[repeat(4,12.563rem)]'>
				{SuggestionCardsData.map(renderCard)}
			</div>
		</div>
	);
};

export default Template;

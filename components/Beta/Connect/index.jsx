"use client";
import Image from "next/image";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

import { useWeb3Modal } from "@web3modal/wagmi/react";

import { BETA_APP_QUERY_PARAMS } from "@constants";

import walletIcon from "@icons/wallet.svg";

function Modal() {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const router = useRouter();

	const connect = searchParams.get(BETA_APP_QUERY_PARAMS.CONNECT_WALLET) || false;

	const { open } = useWeb3Modal();

	const onCloseHandler = () => {
		const params = searchParams.toString().replace(`${BETA_APP_QUERY_PARAMS.CONNECT_WALLET}=true`, "");

		router.push(`${pathname}${params ? "?" + params : ""}`);
	};

	return (
		<>
			{connect && (
				<dialog className='fixed inset-0 z-50 flex size-full items-center justify-center overflow-hidden bg-black/[0.5] backdrop-blur'>
					<div className='max-w-[31.5rem] rounded-3xl bg-[#C8300F] px-3 py-7 m-3.5'>
						<div className='flex flex-col items-center gap-[3.375rem]'>
							<div className='relative h-[8.193rem] w-[10.961rem]'>
								<Image
									fill
									src={walletIcon}
									alt='wallet icon'
								/>
							</div>
							<p
								// eslint-disable-next-line tailwindcss/no-custom-classname
								className='font-ppf text-center text-[2.618rem] font-extrabold uppercase leading-[3.142rem] tracking-[-0.03em]'>
								reconnect wallet to use the app
							</p>
							<div
								// eslint-disable-next-line tailwindcss/no-custom-classname
								className='font-gm flex w-full flex-col gap-2.5 px-6 text-[0.938rem] font-medium'>
								<button
									type='button'
									className='w-full rounded-full border-2 border-[#F8FDFF] bg-[#C8300F] py-4 text-[#F8FDFF]'
									onClick={onCloseHandler}>
									Close
								</button>
								<button
									type='button'
									className='w-full rounded-full border-2 border-[#F8FDFF] bg-[#F8FDFF] py-4 text-[#C8300F]'
									onClick={() => open()}>
									Connect
								</button>
							</div>
						</div>
					</div>
				</dialog>
			)}
		</>
	);
}

export default Modal;

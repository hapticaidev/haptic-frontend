import { useState } from "react";

import { FooterData } from "@constants";

import Tag from "@components/Tag";

const FooterForm = () => {
	const [nature, setNature] = useState(false);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [description, setDescription] = useState("");

	const [toast, setToast] = useState({ show: false, type: undefined });

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (!nature || !name || !email) {
			setToast({ show: true, type: "warning" });
			throw new Error("Empty Form Data");
		}

		const data = {
			nature,
			name: name.trim(),
			email: email.trim(),
			description: description.trim(),
		};
		try {
			const response = await fetch("/api/email", {
				method: "POST",
				body: JSON.stringify(data),
			});

			if (response.status !== 200) {
				throw new Error(`response status: ${response.status}`);
			}

			setToast({ show: true, type: "success" });
		} catch (err) {
			setToast({ show: true, type: "error" });
		} finally {
			setNature(false);
			setName("");
			setEmail("");
			setDescription("");
			setTimeout(() => {
				setToast({ show: false, type: undefined });
			}, 3000);
		}
	};

	const desktopForm = () => {
		return (
			<div className='hidden flex-none md:block'>
				<form
					// eslint-disable-next-line tailwindcss/no-custom-classname
					className='font-gm flex w-full max-w-72 flex-col gap-5 text-[1rem] font-[600] uppercase leading-5 tracking-[-0.02em] text-[#010001] lg:max-w-[25rem] xl:max-w-[35rem] 2xl:max-w-[40rem]'
					onSubmit={handleSubmit}>
					<input
						type='text'
						placeholder='name'
						required
						maxLength={50}
						value={name}
						onChange={(e) => setName(e.target.value)}
						className='border-b rounded-none border-[#010001]/[0.50] bg-transparent py-[1.125rem] text-[1rem] leading-5 tracking-[-0.01em] outline-none placeholder:uppercase placeholder:text-[#010001]'
					/>
					<input
						type='email'
						placeholder='email'
						required
						maxLength={80}
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className='border-b rounded-none border-[#010001]/[0.50] bg-transparent py-[1.125rem] text-[1rem] leading-5 tracking-[-0.01em] outline-none placeholder:uppercase placeholder:text-[#010001]'
					/>
					<div className='flex flex-col gap-4'>
						<span className='text-[1rem] leading-5 tracking-[-0.01em]'>Nature of communication</span>
						<div className='flex flex-wrap gap-[1.088rem]'>
							{FooterData.natureTags.map((tag) => {
								return (
									<Tag
										key={tag}
										title={tag}
										checked={nature === tag}
										handleTagClick={setNature}
									/>
								);
							})}
						</div>
					</div>

					<textarea
						name='describe'
						value={description}
						placeholder='describe'
						onChange={(e) => setDescription(e.target.value)}
						className='h-[10.625rem] rounded-none resize-none border-b border-[#010001]/[0.50] bg-transparent pt-[1.125rem] text-[1rem] leading-5 tracking-[-0.01em] outline-none placeholder:uppercase placeholder:text-[#010001]'></textarea>

					<button
						type='submit'
						// eslint-disable-next-line tailwindcss/no-custom-classname
						className='font-hnd mt-5 size-fit rounded-full bg-[#010001] px-[3.426rem] py-[1.309rem] text-center text-[1.309rem] font-medium uppercase leading-[1.571rem] tracking-[-0.01em] text-[#F8FDFF]'>
						send
					</button>
				</form>
			</div>
		);
	};

	const mobileForm = () => {
		return (
			<div className='w-full flex-none md:hidden'>
				<form
					// eslint-disable-next-line tailwindcss/no-custom-classname
					className='font-gm flex w-full flex-col gap-[1.238rem] font-[600] uppercase text-[#010001]'
					onSubmit={handleSubmit}>
					<input
						type='text'
						placeholder='name'
						required
						maxLength={50}
						value={name}
						onChange={(e) => setName(e.target.value)}
						className='border-b border-[#010001]/50 bg-transparent py-3 text-[0.875rem] leading-[1.094rem] tracking-[-0.01em] outline-none placeholder:uppercase placeholder:text-[#010001]'
					/>
					<input
						type='email'
						placeholder='email'
						required
						maxLength={80}
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className='border-b border-[#010001]/50 bg-transparent py-3 text-[0.875rem] leading-[1.094rem] tracking-[-0.01em] outline-none placeholder:uppercase placeholder:text-[#010001]'
					/>
					<div className='flex flex-col gap-3.5'>
						<span className='text-[0.875rem] leading-[1.094rem] tracking-[-0.01em]'>
							Nature of communication
						</span>
						<div className='flex flex-wrap gap-3'>
							{FooterData.natureTags.map((tag) => {
								return (
									<Tag
										key={tag}
										title={tag}
										checked={nature === tag}
										handleTagClick={setNature}
										small
									/>
								);
							})}
						</div>
					</div>

					<textarea
						name='describe'
						value={description}
						placeholder='describe'
						onChange={(e) => setDescription(e.target.value)}
						className='resize-none border-b border-[#010001]/50 bg-transparent pt-[0.438rem] text-[0.875rem] leading-[1.094rem] tracking-[-0.01em] outline-none placeholder:uppercase placeholder:text-[#010001] sm:h-[6.938rem]'></textarea>

					<button
						type='submit'
						// eslint-disable-next-line tailwindcss/no-custom-classname
						className='font-hnd mt-0 size-fit rounded-full bg-[#010001] px-6 py-2 text-center text-[1.056rem] font-medium uppercase leading-[1.268rem] tracking-[-0.01em] text-[#F8FDFF] sm:mt-[0.35rem] sm:px-[2.772rem] sm:py-[1.059rem]'>
						send
					</button>
				</form>
			</div>
		);
	};

	return (
		<>
			{desktopForm()}
			{mobileForm()}
			{toast.show && (
				<div className='toast toast-start'>
					{toast.type === "success" && (
						<div className='alert alert-success'>
							<span>Message sent successfully.</span>
						</div>
					)}
					{toast.type === "warning" && (
						<div className='alert alert-warning'>
							<span>Complete the form before submitting.</span>
						</div>
					)}
					{toast.type === "error" && (
						<div className='alert alert-error'>
							<span>Error, please try resubmitting the form.</span>
						</div>
					)}
				</div>
			)}
		</>
	);
};

export default FooterForm;

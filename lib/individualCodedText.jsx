import gsap from "gsap";

const randChar = () => {
	return String.fromCharCode(65 + Math.floor(Math.random() * 26));
};

export const individualCodedText = (classname) => {
	document.querySelectorAll(classname).forEach((t) => {
		const dataText = t.getAttribute("data-text");
		if (dataText !== null) {
			const arr1 = dataText.split("");
			const arr2 = arr1.map(randChar);
			const tl = gsap.timeline();

			tl.to(t, {
				duration: 1,
				onUpdate: () => {
					arr1.forEach((char, i) => {
						arr2[i] = randChar();
					});

					const p = Math.floor(tl.progress() * arr1.length);
					const pt1 = arr1.join("").substring(p, 0);
					const pt2 = arr2.join("").substring(arr2.length - p, 0);

					t.innerHTML = pt1 + pt2;
				},
			});
		}
	});
};

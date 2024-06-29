import { useEffect, useState, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { increment as benarIncrement } from "../redux/reducers/benar";
import { increment as soalIncrement } from "../redux/reducers/soal";
import { increment as salahIncrement } from "../redux/reducers/salah";
import { reset as waktuReset } from "../redux/reducers/waktu";
import { change, StatusEnum } from "../redux/reducers/status";
import "../css/gamecore.css";

interface randomizerMapType {
	[key: string]: () => number;
}

interface introductionMapType {
	[key: string]: string;
}

interface soalMapType {
	[key: string]: (angka1: number, angka2: number) => string;
}

interface answerMapType {
	[key: string]: (angka1: number, angka2: number, jawaban: number) => boolean;
}

const randomizerMap: randomizerMapType = {
	tambah: () => Math.floor(Math.random() * 20) + 1,
	kurang: () => Math.floor(Math.random() * 20) + 1,
	kali: () => Math.floor(Math.random() * 10) + 1,
};
const introductionMap: introductionMapType = {
	tambah: "Ayo Kita Mulai Belajar \nPertambahan",
	kurang: "Ayo Kita Mulai Belajar \nPerKurangan",
	kali: "Ayo Kita Mulai Belajar \nPerkalian",
};
const soalMap: soalMapType = {
	tambah: (angka1: number, angka2: number) =>
		angka1.toString() + " + " + angka2.toString() + " =",
	kurang: (angka1: number, angka2: number) =>
		angka1.toString() + " - " + angka2.toString() + " =",
	kali: (angka1: number, angka2: number) =>
		angka1.toString() + " x " + angka2.toString() + " =",
};
const answerMap: answerMapType = {
	tambah: (angka1: number, angka2: number, jawaban: number) =>
		angka1 + angka2 === jawaban,
	kurang: (angka1: number, angka2: number, jawaban: number) =>
		angka1 - angka2 === jawaban,
	kali: (angka1: number, angka2: number, jawaban: number) =>
		angka1 * angka2 === jawaban,
};

export default function GameCore({ tipe }: { tipe: string }) {
	const [angka1, setAngka1] = useState<number>(randomizerMap[tipe]);
	const [angka2, setAngka2] = useState<number>(randomizerMap[tipe]);
	const [jawaban, setJawaban] = useState<string>("");
	const [text, setText] = useState<string>(introductionMap[tipe]);
	const dispatch = useAppDispatch();
	const status = useAppSelector((state) => state.status.value);
	const inputRef = useRef<HTMLInputElement>(null);

	// stupid unefficient trash useeffect, yet it works as i wanted
	useEffect(() => {
		console.log("tambah effect");
		if (status == StatusEnum.JUST_STARTED) {
			setTimeout(() => {
				dispatch(change(StatusEnum.IN_PROGRESS));
				setText(soalMap[tipe](angka1, angka2));
				inputRef.current && inputRef.current.focus();
			}, 2000);
		} else if (status < StatusEnum.TIMEOUT) {
			dispatch(change(StatusEnum.IN_PROGRESS));
			setText(soalMap[tipe](angka1, angka2));
		}
		setJawaban("");
		setTimeout(() => {
			inputRef.current && inputRef.current.focus();
		}, 0);
	}, [angka1, angka2]);

	const handleSubmit = () => {
		if (status === StatusEnum.IN_PROGRESS) {
			dispatch(change(StatusEnum.RESULT_ANNOUNCE));
			const answer = answerMap[tipe](angka1, angka2, parseInt(jawaban));
			answer ? dispatch(benarIncrement()) : dispatch(salahIncrement());
			dispatch(soalIncrement());
			dispatch(waktuReset());
			answer ? setText("Benar") : setText("Salah");
			setTimeout(() => {
				setAngka1(randomizerMap[tipe]);
				setAngka2(randomizerMap[tipe]);
			}, 1000);
		}
	};

	return (
		<div className="gamecore">
			<div className="flex">
				<pre
					style={{
						visibility:
							status > StatusEnum.RESULT_ANNOUNCE ? "hidden" : "visible",
					}}
					className={`bubbleChat ${tipe}BubbleChat`}
				>
					{text}
				</pre>
			</div>
			<img src={`/assets/${tipe}Sprite.png`} className={`${tipe}Sprite`} />
			<div
				className="inputContainer"
				style={{
					visibility:
						status > StatusEnum.IN_PROGRESS ||
						status === StatusEnum.JUST_STARTED
							? "hidden"
							: "visible",
				}}
			>
				<div className="jawabanWrapper">
					<input
						type="text"
						className="jawabanField"
						ref={inputRef}
						value={jawaban}
						onChange={(e) => setJawaban(e.target.value)}
						onKeyDown={(e) => {
							e.key === "Enter" && handleSubmit();
						}}
					/>
				</div>
				<button className="submitBtn" onClick={handleSubmit}>
					<svg
						width="16px"
						height="16px"
						viewBox="0 0 512 512"
						xmlns="http://www.w3.org/2000/svg"
					>
						<title>ionicons-v5-e</title>
						<polyline
							points="416 128 192 384 96 288"
							style={{
								fill: "none",
								stroke: "#ffffff",
								strokeLinecap: "square",
								strokeMiterlimit: 10,
								strokeWidth: "96px",
							}}
						/>
					</svg>
				</button>
			</div>
		</div>
	);
}

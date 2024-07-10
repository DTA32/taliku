import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "../css/game.css";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { decrement as waktuDecrement } from "../redux/reducers/waktu";
import { change, StatusEnum } from "../redux/reducers/status";
import GameCore from "../components/GameCore";

interface statusMapperType {
	[key: number]: string;
}

const statusMapper: statusMapperType = {
	4: "kalah",
	5: "menang",
	6: "kalah",
	7: "seri",
};

export default function Game({ tipe }: { tipe: string }) {
	const navigate = useNavigate();
	const waktu = useAppSelector((state) => state.waktu.value);
	const soal = useAppSelector((state) => state.soal.value);
	const benar = useAppSelector((state) => state.benar.value);
	const salah = useAppSelector((state) => state.salah.value);
	const status = useAppSelector((state) => state.status.value);
	const dispatch = useAppDispatch();

	// i know, these code is trash
	useEffect(() => {
		console.log("soal effect");
		if (soal === 10 && status < StatusEnum.TIMEOUT) {
			if (benar > salah) {
				dispatch(change(StatusEnum.MENANG));
				setTimeout(() => {
					navigate("/reward");
				}, 2000);
			} else if (benar < salah) {
				dispatch(change(StatusEnum.KALAH));
			} else {
				dispatch(change(StatusEnum.SERI));
			}
		}
	}, [soal]);

	useEffect(() => {
		console.log("waktu effect");
		if (waktu === 0) {
			dispatch(change(StatusEnum.TIMEOUT));
		} else if (status < StatusEnum.TIMEOUT) {
			const interval = setInterval(() => {
				dispatch(waktuDecrement());
			}, 1000);
			return () => clearInterval(interval);
		}
	}, [waktu]);

	return (
		<section className={`${tipe} game`}>
			<div className="variables">
				<div className="flex">
					<div className="variableWrapper">
						<p className="variableText">waktu</p>
						<p className="variableText variableValue">{waktu}</p>
					</div>
				</div>
				<div className="flex">
					<div className="variableWrapper">
						<p className="variableText">Salah</p>
						<p className="variableText variableValue"> {salah}</p>
					</div>
				</div>
				<div className="flex">
					<div className="variableWrapper">
						<p className="variableText">Benar</p>
						<p className="variableText variableValue">{benar}</p>
					</div>
				</div>
				<div className="flex">
					<div className="variableWrapper">
						<p className="variableText">soal</p>
						<p className="variableText variableValue">{soal + 1}</p>
					</div>
				</div>
			</div>
			<GameCore tipe={tipe} />
			<div
				className="result"
				style={{
					display: `${status < 4 ? "none" : "flex"}`,
				}}
			>
				{status < StatusEnum.RESULT_ANNOUNCE ? (
					<></>
				) : (
					<img
						alt={statusMapper[status]}
						src={`/assets/${statusMapper[status]}.png`}
					/>
				)}
			</div>
		</section>
	);
}

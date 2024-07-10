import { useLocation, Navigate } from "react-router-dom";
import Game from "../pages/Game";
import { useAppDispatch } from "../redux/hooks";
import { reset as waktuReset } from "../redux/reducers/waktu";
import { reset as soalReset } from "../redux/reducers/soal";
import { reset as benarReset } from "../redux/reducers/benar";
import { reset as salahReset } from "../redux/reducers/salah";
import { change, StatusEnum } from "../redux/reducers/status";

export default function GameMid() {
	const location = useLocation();
	const tipe = location.state === null ? "" : location.state.tipe;
	const dispatch = useAppDispatch();
	dispatch(waktuReset());
	dispatch(soalReset());
	dispatch(benarReset());
	dispatch(salahReset());
	dispatch(change(StatusEnum.JUST_STARTED));
	return tipe.length === 0 ? <Navigate to="/pilih" /> : <Game tipe={tipe} />;
}

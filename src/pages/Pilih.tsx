import { Link } from "react-router-dom";
import "../css/pilih.css";
import { useAppDispatch } from "../redux/hooks";
import { reset } from "../redux/reducers/status";

export default function Pilih() {
	const dispatch = useAppDispatch();
	dispatch(reset());
	return (
		<section className="pilih">
			<div className="pilihBtnContainer">
				<Link to="/main" state={{ tipe: "tambah" }} className="btnTambah">
					Tambah
				</Link>
				<Link to="/main" state={{ tipe: "kali" }} className="btnKali">
					Kali
				</Link>
				<div className="lastrow">
					<Link to="/main" state={{ tipe: "kurang" }} className="btnKurang">
						Kurang
					</Link>
					<Link to="/">
						Kembali
						<img
							src="/assets/btnKembali.png"
							className="btnKembali kembaliPilih"
						/>
					</Link>
				</div>
			</div>
		</section>
	);
}

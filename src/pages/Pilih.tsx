import { Link } from "react-router-dom";
import "../css/pilih.css";

export default function Pilih() {
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
						<img src="/assets/btnKembali.png" className="btnKembali kembaliPilih" />
					</Link>
				</div>
			</div>
		</section>
	);
}

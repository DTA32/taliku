import "../css/tentanggame.css";
import { Link } from "react-router-dom";

export default function TentangGame() {
	return (
		<section className="tentang">
			<h2>Tentang</h2>
			<div>
				<p>Tema:Taliku(Tambah kali kurang)</p>
				<p>Versi:0.0.1.30</p>
				<p>Tanggal Pertama Kali Dibuat:24/06/2013</p>
				<p>Tanggal Diperbarui:--/--/-_--</p>
				<p>Buatan:M. Raditya</p>
			</div>
			<div className="kembaliContainer">
				<Link to="/">
					Kembali
					<img src="/assets/btnKembali.png" className="btnKembali" />
				</Link>
			</div>
		</section>
	);
}

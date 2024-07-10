import "../css/caramain.css";
import { Link } from "react-router-dom";

export default function CaraMain() {
	return (
		<section className="caramain">
			<h2>Cara Main</h2>
			<div>
				<p>Cara Main</p>
				<p>Anda Harus Menjawab Soal Yang Diberikan Pak</p>
				<p>
					Guru, Soal tambah: Soal Pertambahan, Soal Kurang: Soal Perkurangan
				</p>
				<p>Soal Kali:Soal Perkalian, Setiap Soal Ada 10 Soal</p>
				<p>Jika Anda Salah 10,Anda Kalah </p>
				<p>Jika Anda Benar 10,Anda Menang,Dan </p>
				<p>Mendapatkan Reward 5 Lagu Nasional+2 Lagu</p>
				<p>Yang Ada Di Game</p>
			</div>
			<footer>
				<p>SELAMAT BERMAIN+BELAJAR :&#41;</p>
			</footer>
			<div className="kembaliContainer">
				<Link to="/">
					Kembali
					<img src="/assets/btnKembali.png" className="btnKembali" />
				</Link>
			</div>
		</section>
	);
}

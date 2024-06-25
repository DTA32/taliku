import "../css/reward.css";
export default function Reward() {
	return (
		<section className="reward">
			<h2>Silahkan Pilih Lagu Sebagai Reward Menang</h2>
			<div className="rewardBtnContainer">
				<div className="rowLagu">
					<button className="btnLagu btnLagu1">
						<span>
							Hari Merdeka <br /> Lagu Nasional Indonesia
						</span>
					</button>
					<button className="btnLagu btnLagu2">
						Berkibarlah Benderaku <br /> Lagu Nasional Indonesia
					</button>
				</div>
				<div className="rowLagu">
					<button className="btnLagu btnLagu3">
						Halo-Halo Bandung <br /> Lagu Perjuangan Indo
					</button>
					<button className="btnLagu btnLagu4">
						Lagu Menu: <br /> Im Your
					</button>
				</div>
				<div className="rowLagu">
					<button className="btnLagu btnLagu5">
						LAGU Main All: <br /> Code lyoko Theme song <br /> Musical
					</button>
					<button className="btnLagu btnLagu6">
						Garuda Indonesia <br /> Lagu Nasional Indonesia
					</button>
				</div>
				<div className="rowLagu">
					<button className="btnLagu btnLagu7">
						Bangun Pemuda-Pemudi <br /> Lagu Nasional Indonesia
					</button>
					<div className="stopWrapper">
						<button className="btnLagu btnStop">Stop</button>
					</div>
				</div>
			</div>
		</section>
	);
}

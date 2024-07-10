import { useState, useEffect } from "react";
import "../css/reward.css";
import { Howl } from "howler";

const musicLocation = "https://static.dta32.my.id/taliku/";

const musicMap: { [key: number]: string } = {
	1: musicLocation + "hari-merdeka.mp3",
	2: musicLocation + "berkibarlah.mp3",
	3: musicLocation + "halo-bandung.mp3",
	4: musicLocation + "im-yours.mp3",
	5: musicLocation + "code-lyoko.mp3",
	6: musicLocation + "garuda.mp3",
	7: musicLocation + "bangun-pemuda.mp3",
	8: musicLocation + "what-makes-1d.mp3",
};

export default function Reward() {
	const [musicPlayer, setMusicPlayer] = useState<Howl | null>(null);

	const playMusic = (id: number) => () => {
		setMusicPlayer(
			new Howl({
				src: [musicMap[id]],
				autoplay: true,
				volume: 0.75,
			})
		);
	};

	useEffect(() => {
		return () => {
			if (musicPlayer) {
				musicPlayer.stop();
				musicPlayer.unload();
			}
		};
	}, [musicPlayer]);

	return (
		<section className="reward">
			<h2>Silahkan Pilih Lagu Sebagai Reward Menang</h2>
			<div className="rewardBtnContainer">
				<div className="rowLagu">
					<button className="btnLagu btnLagu1" onClick={playMusic(1)}>
						<span>
							Hari Merdeka <br /> Lagu Nasional Indonesia
						</span>
					</button>
					<button className="btnLagu btnLagu2" onClick={playMusic(2)}>
						Berkibarlah Benderaku <br /> Lagu Nasional Indonesia
					</button>
				</div>
				<div className="rowLagu">
					<button className="btnLagu btnLagu3" onClick={playMusic(3)}>
						Halo-Halo Bandung <br /> Lagu Perjuangan Indo
					</button>
					<button className="btnLagu btnLagu4" onClick={playMusic(4)}>
						Lagu Menu: <br /> Im Your
					</button>
				</div>
				<div className="rowLagu">
					<button className="btnLagu btnLagu5" onClick={playMusic(5)}>
						LAGU Main All: <br /> Code lyoko Theme song <br /> Musical
					</button>
					<button className="btnLagu btnLagu6" onClick={playMusic(6)}>
						Garuda Indonesia <br /> Lagu Nasional Indonesia
					</button>
				</div>
				<div className="rowLagu">
					<button className="btnLagu btnLagu7" onClick={playMusic(7)}>
						Bangun Pemuda-Pemudi <br /> Lagu Nasional Indonesia
					</button>
					<button className="btnLagu btnLagu8" onClick={playMusic(8)}>
						What Makes <br /> Your Beautiful
					</button>
				</div>
			</div>
		</section>
	);
}

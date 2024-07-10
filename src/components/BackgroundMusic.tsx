import { useEffect, useRef } from "react";
import { useAppSelector } from "../redux/hooks";
import { Howl } from "howler";
import { StatusEnum } from "../redux/reducers/status";

const musicLocation = "https://static.dta32.my.id/taliku/";
const notStartedMusic = musicLocation + "im-yours.mp3";
const inProgressMusic = musicLocation + "code-lyoko.mp3";

const musicMap: { [key in StatusEnum]?: string | null } = {
	[StatusEnum.NOT_STARTED]: notStartedMusic,
	[StatusEnum.JUST_STARTED]: inProgressMusic,
	[StatusEnum.IN_PROGRESS]: inProgressMusic,
	[StatusEnum.RESULT_ANNOUNCE]: inProgressMusic,
	[StatusEnum.TIMEOUT]: null,
	[StatusEnum.MENANG]: null,
	[StatusEnum.KALAH]: null,
	[StatusEnum.SERI]: null,
};

const BackgroundMusic = () => {
	const status: StatusEnum = useAppSelector((state) => state.status.value);
	const soundRef = useRef<Howl | null>(null);
	const currentMusicRef = useRef<string | null>(null);

	useEffect(() => {
		const currentMusic = musicMap[status];

		if (currentMusic) {
			if (currentMusicRef.current !== currentMusic) {
				if (soundRef.current) {
					soundRef.current.unload();
					soundRef.current = null;
				}
				soundRef.current = new Howl({
					src: [currentMusic],
					autoplay: true,
					loop: true,
					volume: 0.75,
				});
				soundRef.current.play();
				currentMusicRef.current = currentMusic;
			}
		} else {
			if (soundRef.current) {
				soundRef.current.unload();
				soundRef.current = null;
			}
		}
	}, [status]);

	return null;
};

export default BackgroundMusic;

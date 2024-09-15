import { useEffect, useState } from "react";
import { timerProps } from "../@types/timer";
import useLocalStorage from "./useLocalStorage";

interface UseTimerProps {
	timers: timerProps[];
	createTimer: (content: timerProps) => void;
	selectTimer: (name: string) => void;
	deleteTimer: (name: string) => void;
}

const useTimer = (): UseTimerProps => {
	const { getLocalStorage, setLocalStorage } = useLocalStorage();
	const [timers, setTimers] = useState<timerProps[]>([]);

	const getTimers = () => {
		const data: timerProps[] = getLocalStorage("oberon#timer");

		if (data != null) {
			setTimers(data);
		}
	};

	const selectTimer = (name: string) => {
		const data = timers.map((timer) => {
			if (timer.name === name && timer.selected) {
				timer.selected = false;
				return timer;
			}
			if (timer.name === name && !timer.selected) {
				timer.selected = true;
			}

			if (timer.name !== name && timer.selected) {
				timer.selected = false;
			}
			return timer;
		});

		setLocalStorage("oberon#timer", data);

		setTimers(data);
	};

	const deleteTimer = (name: string) => {
		const data = timers.filter((timer) => timer.name !== name);

		setLocalStorage("oberon#timer", data);

		setTimers(data);
		getTimers();
	};

	const createTimer = (content: timerProps) => {
		let data: timerProps[] = getLocalStorage("oberon#timer");

		const validate = timers.filter((timer) => timer.name === content.name);

		if (data === null) {
			data = [content];
		} else {
			if (validate.length > 0) {
				return alert("Timer ja inserido");
			}

			data.map((timer) => {
				if (timer.selected) {
					timer.selected = false;
				}

				return timer;
			});

			data.push(content);
		}

		setLocalStorage("oberon#timer", data);
		getTimers();
	};

	useEffect(getTimers, []);

	return { timers, createTimer, selectTimer, deleteTimer };
};

export default useTimer;

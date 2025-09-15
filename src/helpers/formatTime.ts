export const FormatTime = (seconds: number): string => {
    let minutes = Math.floor(seconds / 60);
    let hrs = Math.floor(minutes / 60);
    let secs = seconds % 60;
    minutes = minutes % 60;
    let  secString = secs < 10 ? `0${secs}` : `${secs}`;
    let minString = minutes < 10 ? `0${minutes}` : `${minutes}`;
    let hrString = hrs < 10 ? `0${hrs}` : `${hrs}`;
    return `${hrString}:${minString}:${secString}`;
}
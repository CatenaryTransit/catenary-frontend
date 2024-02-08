export function durationToIsoElapsed(inputms: number):string {
    let remaining_seconds:number = inputms / 1000;

    let minutes:number = Math.floor(remaining_seconds / 60);
    remaining_seconds = remaining_seconds % 60;

    const hours:number = Math.floor(minutes / 3600);
    minutes = minutes % 60;

    let output:string = "";

    if (hours > 0) {
        output = output + `${hours}h`;
    }

    if (minutes > 0 || hours > 0) {
        output = output + ` ${minutes}m`;
    }

    output = output + ` ${remaining_seconds.toPrecision(2)}s`;
    

    return output.trim()
}